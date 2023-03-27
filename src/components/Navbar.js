import React,{useState,useEffect} from 'react'
import logo from '../images/monkey.jpg'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
export default function Navbar() {
  const navStyle = {
    display: "flex",
    listStyleType: "none",
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
  }
  const items = {
    color: "#F2CD5C",
    fontFamily: "'Kanit', sans-serif",
    marginLeft:"30px",
  }
  const [border1,setBorder1] = useState(false)
  const [border2,setBorder2] = useState(false)
  const [border3,setBorder3] = useState(false)
  const [border4,setBorder4] = useState(false)
  const [border5,setBorder5] = useState(false)
  const [border6,setBorder6] = useState(false)
  const [border7,setBorder7] = useState(false)
  // const line = (id) =>{
  //   Array.from(document.querySelectorAll(".nav-icons")).forEach( element => {
  //     element.borderBottom = "none";
  //   })
  //   document.getElementById(id).borderBottom = "2px solid #F2CD5C"
  // }
  // useEffect(()=>{
  //   Array.from(document.querySelectorAll(".nav-icons")).forEach( element => {
  //         element.borderBottom = "none";
  //       })
  //       document.getElementById(id).borderBottom = "2px solid #F2CD5C"
  // },[borderBottom === "2px solid #F2CD5C"])
  return (
    <div style={{ width: "100%", height: "20%" ,display:"flex"}}>
      <ul style={navStyle}>
        <li style={{marginLeft:"20px"}}><img style={{ boxShadow: "0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)", height: "130px", width: '130px', border: "5px solid #F2CD5C", borderRadius: "100%"}} src={logo}></img></li>
        <li style={items}><h1 style={{ fontSize: "40px" }} >News Monkey</h1></li>
        <li style={{marginLeft:"auto",marginRight:"100px"}}>
          <ul style={{display:"flex",margin:"auto 0",listStyleType:"none"}}>
            <li><NavLink to="/business"style={{marginLeft:"18px",color:"#F2CD5C",fontFamily: "'Kanit', sans-serif",fontSize:"18px",textDecoration:"none",paddingBottom:"5px"}}>Business</NavLink></li>
            <li><NavLink to="/entertainment"style={{marginLeft:"18px",color:"#F2CD5C",fontFamily: "'Kanit', sans-serif",fontSize:"18px",textDecoration:"none",paddingBottom:"5px"}}>Entertainment</NavLink></li>
            <li><NavLink to="/"style={{marginLeft:"18px",color:"#F2CD5C",fontFamily: "'Kanit', sans-serif",fontSize:"18px",textDecoration:"none",paddingBottom:"5px"}}>General</NavLink></li>
            <li><NavLink to="/health"style={{marginLeft:"18px",color:"#F2CD5C",fontFamily: "'Kanit', sans-serif",fontSize:"18px",textDecoration:"none",paddingBottom:"5px"}}>Health</NavLink></li>
            <li><NavLink to="/science"style={{marginLeft:"18px",color:"#F2CD5C",fontFamily: "'Kanit', sans-serif",fontSize:"18px",textDecoration:"none",paddingBottom:"5px"}}>Science</NavLink></li>
            <li><NavLink to="/sports"style={{marginLeft:"18px",color:"#F2CD5C",fontFamily: "'Kanit', sans-serif",fontSize:"18px",textDecoration:"none",paddingBottom:"5px"}}>Sports</NavLink></li>
            <li><NavLink to="/technology"style={{marginLeft:"18px",color:"#F2CD5C",fontFamily: "'Kanit', sans-serif",fontSize:"18px",textDecoration:"none",paddingBottom:"5px"}}>Technology</NavLink></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
