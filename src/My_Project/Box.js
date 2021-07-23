import React, { useEffect, useState } from 'react';
import '../My_Project/Box.css';


function Box() {

    const[data,setdata]= useState([]);

    const getCovidData= async()=>{
        try{
            const Response= await fetch('https://api.covid19india.org/data.json');
            const MyData=await Response.json();
            setdata(MyData.cases_time_series[MyData.cases_time_series.length-1]);
        }catch(err){
                console.log(err);
        }
        
    }

    useEffect(()=>{
        getCovidData();
    },[]);


    return (
         < > 
                  <div className = "box color_1"> 
                        <div className = "head" > 
                                #Today Confirmed
                        </div> 
                        <div className="data">
                                {data.dailyconfirmed}
                            </div>
                    </div>

                    <div className = "box color_2"> 
                        <div className = "head" > 
                                #Today Deceased
                        </div> 
                        <div className="data">
                                {data.dailydeceased}
                            </div>
                    </div>

                    <div className = "box color_3"> 
                        <div className = "head" > 
                                #Today Recovered
                        </div> 
                        <div className="data">
                                {data.dailyrecovered}
                            </div>
                    </div>

                    <div className = "box color_4"> 
                        <div className = "head" > 
                                #Total Confirmed
                        </div> 
                        <div className="data">
                                {data.totalconfirmed}
                            </div>
                    </div>

                    <div className = "box color_5"> 
                        <div className = "head" > 
                                #Total Deceased
                        </div> 
                        <div className="data">
                                {data.totaldeceased}
                            </div>
                    </div>

                    <div className = "box color_6"> 
                        <div className = "head" > 
                                #Total Recovered
                        </div> 
                        <div className="data">
                               {data.totalrecovered}
                            </div>
                    </div>

                    <div className = "box color_7"> 
                        <div className = "head" > 
                                #Last Update
                        </div> 
                        <div className="data">
                                {data.date}
                            </div>  
                    </div>
        </ > 
            );
}

export default Box;