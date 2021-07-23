import React from 'react';
import Box from './Box';
import './Covid.css';

const Covid = ()=>{

    let year = new Date();




    return(
        <>
        <div className="main">
            <div className="main_head">
                <h6 className="live">
                    <b className="blink">🔴</b> 
                    LIVE 
                </h6>
                <h3 className="tracker">COVID-19 TRACKER INDIA</h3>
            </div>

            <div className="main_body">    
                <Box />
            </div>
            <i>No ©Copyright~{year.getFullYear()} @Ari</i>
        </div>

        </>
    );
}

export default Covid;