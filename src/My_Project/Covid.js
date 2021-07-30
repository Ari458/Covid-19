import React from 'react';
import Box from './Box';
import './Covid.css';



const Covid = ()=>{

    let year = new Date();




    return(
        <>
            <div className="main_body">    
                <Box />
            </div>
            <i>No ©Copyright~{year.getFullYear()} @Ari</i>
        </>
    );
}

export default Covid;