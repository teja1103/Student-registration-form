import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './Home.css'
import Logo from './Logo'

const Home = () => {

    const [fullname,setFullname] = useState("");
    const [email,setEmail] = useState("");
    const [collegeId,setCollegeId] = useState("");
    const [branch,setBranch] = useState("")

    const [x,setX] = useState(false)
    const [y,setY] = useState(false)
    const [z,setZ] = useState(false)
    const [p,setP] = useState(false)
    const [q,setQ] = useState(false)
    const [r,setR] = useState(false)
    const [s,setS] = useState(false)

    const submitHandler = () =>{

        if(fullname && email && collegeId && branch)
        {
            localStorage.setItem("fullname",fullname);
            localStorage.setItem("email",email)
            localStorage.setItem("collegeId",collegeId)
            localStorage.setItem("branch",branch)
            console.log(branch)

            if(branch === "IT")
            {
                setX(true)
            }
            else if(branch === "MECH")
            {
                setY(true)
            }
            else if(branch === "CIVIL")
            {
                setZ(true)
            }
            else if(branch === "EEE")
            {
                setP(true)
            }
            else if(branch === "ECE")
            {
                setQ(true)
            }
            else if(fullname === "VJIT" && collegeId === "VJIT" && branch === "MTech")
            {
                setS(true)
            }

            else if(branch === "CSE" || branch === "AI" || branch === "CSDS")
            {
                setR(true)
            }
            
        }
        else{
            alert("fill the complete info")
        }

    }

    if(x){
        return <Navigate to='/it' />
    }
    if(y){
        return <Navigate to='/mech' />
    }
    if(z){
        return <Navigate to='/civil' />
    }
    if(p){
        return <Navigate to='/eee' />
    }
    if(q){
        return <Navigate to='/ece' />
    }
    if(r){
        return <Navigate to='/cse' />
    }
    if(s){
        return <Navigate to='/admin' />
    }
    

    return (
        <div >
            <center>

             <Logo />  
            <div className='hom'>
                <section  style={{"marginTop":"140px"}}>
                
                    <h1  className='home-heading' style={{"paddingTop":"2rem"}} ><b>VJIT Information form</b></h1>
                    <input type="text" value={fullname} name="fullname" placeholder="fullname" onChange={e => setFullname(e.target.value)} /><br /><br />
                    <input type="text" value={collegeId} name="collegeId" placeholder="collegeId" onChange={e => setCollegeId(e.target.value)} /><br /><br />
                    <input type="email" value={email} name="email" placeholder="email"  onChange={e => setEmail(e.target.value)} /><br /><br />
                    
                    <h4>Branch:</h4>
                    <select name="branch" onChange={e => setBranch(e.target.value)} >
                        <option value="">Select</option>
                        <option value="IT">IT</option>
                        <option value="CSE">CSE</option>
                        <option value="AI">AI</option>
                        <option value="CSDS">CSDS</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="MTech">MTech</option>
                    </select>
                    <br /><br />
                    <button onClick={submitHandler} className="btn btn-success">submit</button>
                    <br /><br /><br /><br />
                
                </section>
            </div>

            </center>
        </div>
        
    )
}

export default Home
