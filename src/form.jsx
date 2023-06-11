import React, { useState } from 'react'
import {createRoot} from 'react-dom'
   


 const  Form = () =>{
    const [name,setName]=useState();
    const[fname,setFname ]=useState();

    const inputEvent =(event) =>{
        
        setName(event.target.value)
    }
    const above =()=>{
        
        
        setFname(name)
    }




return(
<>
<div>
<h1>Hello {fname}</h1>
<input type="text" placeholder='Enter your text'  onChange={inputEvent } 
value={name }
/> 
<button onClick={above}>Submit  :</button>
</div>

</>
);

};


export default Form;