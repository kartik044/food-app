import React, { useState } from 'react'
// import ReactDOM from 'react-dom'



function Smartwatch (){
    const newtime = new Date().toLocaleTimeString();
    const[ ctime, setCtime] = useState(newtime)
      let updatetime=()=>{
        const newtime = new Date().toLocaleTimeString();
        setCtime(newtime)
       };
       setInterval((updatetime),1000) ;

    return(
    <><div className='heading_style'></div>
        <h1 className='head_style'> {ctime} </h1>
        </>

    );

}

export  default Smartwatch;