import React ,{useEffect,useState} from 'react';
import './State.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const State = ()=>{

const[data,setdata]= useState([]);
const[data_temp,setdata_temp]= useState("");
const [data_temp_2,setdata_temp_2]= useState("");

const getCovidData= async()=>{
    try{
        const Response= await fetch('https://api.covid19india.org/data.json');
        const MyData=await Response.json();
        setdata(MyData.statewise);
        setdata_temp(MyData);
    }catch(err){
            prompt(err);
    }
    
}


const getCovidData_state= async()=>{
    try{
        const Response= await fetch('https://api.covid19india.org/v4/min/data.min.json');
        const MyData=await Response.json();
        setdata_temp_2(MyData);
    }catch(err){
           prompt(err);
    }
    
}


useEffect(()=>{
    getCovidData();
    getCovidData_state();
},[]);


const[confirmed,setconfirmed]= useState();
const[deaths,setdeaths]= useState();
const[recovered,setrecovered]= useState();

const[deltaconfirmed,setdeltaconfirmed]= useState();
const[deltadeaths,setdeltadeaths]= useState();
const[deltarecovered,setdeltarecovered]= useState();

const[lastupdatedtime,setlastupdatedtime]= useState();




const update= (e)=>{
    const state_value=e.target.value;
    var i;

    for(i=0; i<=data.length-1; i++){
        if(data[i].state===state_value){
            let x = "data_temp_2."+data_temp.statewise[i].statecode;
            let stateToday=eval(x);
            setconfirmed("#Total Confirmed : "+data_temp.statewise[i].confirmed);
            setdeaths("#Total Deceased : "+data_temp.statewise[i].deaths);
            setrecovered("#Total Recovered : "+data_temp.statewise[i].recovered);


            setdeltaconfirmed("# Today Confirmed : "+stateToday.delta.confirmed);
            setdeltadeaths("#Today Deceased : "+stateToday.delta.deceased);
            setdeltarecovered("#Today Recovered : "+stateToday.delta.recovered);


            setlastupdatedtime("#Last Update : "+data_temp.statewise[i].lastupdatedtime);
        }
    }
}




    const output= data.map((x,index)=>{
        if(index>0){
            return (
                    <option className="content" value={x.state} key={x.state}>{x.state}</option>
            )
        }
        
    });

    return (
        <>
            <div className="main-s">
                <div className="line"></div>
                <select className="container" onChange={(e)=>{update(e)}}>
                    {/* <option>Choose Your STATES</option> */}
                    {output}
                </select>
                <span className="status">
                   {deltaconfirmed}
                   <hr />
                   {deltadeaths}
                   <hr />
                   {deltarecovered}
                   <hr />
                   {/* {active}
                   <hr /> */}
                   {confirmed}
                   <hr />
                   {deaths}
                   <hr />
                   {recovered}
                   <hr />
                   {lastupdatedtime}
                </span>
            </div>
        </>
    ); 
}

export default State;
