
import React, { useEffect, useState } from 'react';
import '../My_Project/Box.css';


function Box() {

    const[data_1,setdata_1]= useState([]);
    const[data_2,setdata_2]= useState([]);

    const getCovidData= async()=>{
        try{
            const Response= await fetch('https://api.covid19india.org/data.json');
            const MyData=await Response.json();
            setdata_1(MyData.cases_time_series[MyData.cases_time_series.length-1]);
            setdata_2(MyData.statewise[0]);
        }catch(err){
                console.log(err);
        }
        
    }

    useEffect(()=>{
        getCovidData();
    },[]);

    


    return (
         < > 
         <div className="break"></div>
         <h1 className="tag">INDIA</h1>
                  <div className = "box color_1"> 
                        <div className = "head" > 
                                #Today Confirmed
                        </div> 
                        <div className="data">
                                {data_1.dailyconfirmed}
                            </div>
                    </div>

                    <div className = "box color_2"> 
                        <div className = "head" > 
                                #Today Deceased
                        </div> 
                        <div className="data">
                                {data_1.dailydeceased}
                            </div>
                    </div>

                    <div className = "box color_3"> 
                        <div className = "head" > 
                                #Today Recovered
                        </div> 
                        <div className="data">
                                {data_1.dailyrecovered}
                            </div>
                    </div>

                    <div className = "box color_4"> 
                        <div className = "head" > 
                                #Total Confirmed
                        </div> 
                        <div className="data">
                                {data_2.confirmed}
                            </div>
                    </div>

                    <div className = "box color_5"> 
                        <div className = "head" > 
                                #Total Deceased
                        </div> 
                        <div className="data">
                                {data_2.deaths}
                            </div>
                    </div>

                    <div className = "box color_6"> 
                        <div className = "head" > 
                                #Total Recovered
                        </div> 
                        <div className="data">
                               {data_2.recovered}
                            </div>
                    </div>

                    <div className = "box color_7"> 
                        <div className = "head" > 
                                #Last Update
                        </div> 
                        <div className="data">
                                {data_2.lastupdatedtime}
                            </div>  
                    </div>
        </ > 
            );
}

export default Box;