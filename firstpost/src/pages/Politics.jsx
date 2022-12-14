// import axios from 'axios';
// import { useState,useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'
import React from 'react'

import data from '../db'


function Politicpage({
  img,category,title,desc
}) {

return (
      <>
    
      <div style={{width:"42%",height:"650px",margin:"auto"}}>
      
      <div >
          <a href="https://www.firstpost.com/opinion/agnipath-scheme-has-its-reasons-but-government-should-have-initiated-it-as-a-pilot-project-10797931.html"><img style={{width:"100%"}} src={img}/></a>
      </div>

      
      <div style={{borderBottom:"4px solid #f3a342",width:"70px",marginBottom:"10px"}}>{category}</div>
      <p style={{ font: "Playfair Display",fontSize: "25px",fontWeight: "bold" }}>{title}</p>
      <div >{desc}</div>
      
  </div>
  </>
)
}

const Politics = () => {
  return (
    <>
    <p style={{marginBottom:"20px",marginTop:"30px",marginLeft:"660px",fontWeight:"600",width:"250px",fontSize:"30px",borderBottom:"5px solid #f3a342"}}>POLITICAL NEWS</p>
    <div>
        {
          data.india.map(item =>
            <Politicpage key={item.id} {...item}/>
            )
        }
      </div>
      </>
  )
}

export default Politics