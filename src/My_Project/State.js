import React ,{useEffect,useState} from 'react';
import './State.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function State() {

    // const url= "https://api.covid19india.org/data.json";

    //     const xhr= (url)=>{
    //         const request= new XMLHttpRequest();
    //         request.open("GET",url);
    //         request.send();
    //     return request;
    //     }

    //     const getdata= ()=>{
    //         const key= xhr(url);
    //         const states=[];

    //         key.onload= ()=>{
    //             const result= JSON.parse(key.response);
    //             const statewise= result.statewise;
    //             const length= statewise.length;
             
    //         for(var i=1;i<= length-1;i++){
    //             states[i]= result.statewise[i].state;
    //         }
    //     }
    //         for(var i=1;i<= 37;i++){
    //             return(
    //                 <div>
    //                     {states[i]}
    //                 </div>
    //             );
    //         }
    // }

// getdata();


const[data,setdata]= useState([]);
const[data_temp,setdata_temp]= useState("");

const getCovidData= async()=>{
    try{
        const Response= await fetch('https://api.covid19india.org/data.json');
        const MyData=await Response.json();
        setdata(MyData.statewise);
        setdata_temp(MyData);
    }catch(err){
            console.log(err);
    }
    
}


useEffect(()=>{
    getCovidData();
},[]);


const[active,setactive]= useState();
const[confirmed,setconfirmed]= useState();
const[deaths,setdeaths]= useState();
const[recovered,setrecovered]= useState();

const[deltaconfirmed,setdeltaconfirmed]= useState();
const[deltadeaths,setdeltadeaths]= useState();
const[deltarecovered,setdeltarecovered]= useState();

const[lastupdatedtime,setlastupdatedtime]= useState();

const[]= useState();


const update= (e)=>{
    const state_value=e.target.value;
    var i;

    for(i=0; i<=data.length-1; i++){
        if(data[i].state===state_value){
            // currentStateDetails=data[i];
            // setdetails(i);
            setactive("# Total Active Cases : "+data_temp.statewise[i].active);
            setconfirmed("#Total Confirmed : "+data_temp.statewise[i].confirmed);
            setdeaths("#Total Deceased : "+data_temp.statewise[i].deaths);
            setrecovered("#Total Recovered : "+data_temp.statewise[i].recovered);

            setdeltaconfirmed("# Today Confirmed : "+data_temp.statewise[i].deltaconfirmed);
            setdeltadeaths("#Today Deceased : "+data_temp.statewise[i].deltadeaths);
            setdeltarecovered("#Today Recovered : "+data_temp.statewise[i].deltarecovered);

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
                    <option>Choose Your STATES</option>
                    {output}
                </select>
                <span className="status">
                   {deltaconfirmed}
                   <hr />
                   {deltadeaths}
                   <hr />
                   {deltarecovered}
                   <hr />
                   {active}
                   <hr />
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
