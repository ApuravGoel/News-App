import React from 'react'
import logo from '../images/monkey.jpg'

export default function Newsitem(props) {
  
  return (
    <div style={{boxShadow: "0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)",marginTop:"20px",fontFamily: "'Kanit', sans-serif",minHeight:"250px",width:"82%",backgroundColor:"rgba(222,205,92,.8)",display:'flex',padding:"20px 20px",borderRadius:"30px"}}>
        <img src={props.imageUrl == null?logo:props.imageUrl} alt='img' style={{boxShadow: "0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)",float:'left',height:"230px",width:"280px",borderRadius:"20px",alignSelf:"center"}}></img>
        <div className="text" style={{display:'flex',marginLeft:"30px",flexDirection:"column",width:"75%",wordWrap:"break-word"}}>
          <h2 style={{fontSize:"1.7rem",color:"#1A120B"}}>{props.title}</h2>
          <div style={{fontSize:"17px",width:"95%"}}><p>{props.description}</p></div>
          <a href={props.url} style={{margin:"0",textDecoration:"none",color:"black",fontWeight:"700",fontSize:"14px"}}target="_blank">Read More</a>
        </div>
        
    </div>
  )
}



