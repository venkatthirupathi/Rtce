import React, { useEffect, useState } from 'react'
import "./style.css"
import { useNavigate } from 'react-router-dom';
import  {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast'
import logo from './assets/logo.svg'
import git from './assets/git.svg'
import linkedin from './assets/linkedin.svg'
import twitter from './assets/twitter.svg'
import hashnode from './assets/hashnode-svgrepo-com.svg'
import Loginbox from './Components/Loginbox';
import LoginActual from './LoginActual';
import CardWithForm from './Components/CardComponent'
import { Button } from './Components/ui/button';
import { motion } from "framer-motion"

const Login = () => {

    const navigate = useNavigate();

    const [submited , setSubmited]= useState(false);

    let [teamID , setTeamID] = useState("");
    const [userName , setUserName] = useState("");

    const handelSubmit = (e)=>{
        e.preventDefault();
        if(teamID == "" || userName  == "") {
            toast.error("Team ID and username are required")
            return;
        }
        navigate(`/Home/${teamID}` , {
            state: {
                userName
            }
        })
    }


    const createNewTeam = (e)=>{
        e.preventDefault();
        const id = uuidv4();
        setTeamID(id)
        toast.success("Created New Team")
    }

    
    const handleEnter = (e)=>{
        if(e.code === 'Enter'){
            handelSubmit(e);
        }
    }

    const handleAuth = ()=>{
        navigate('/Login')
    }

  return (
    <>  
        <motion.div className='login-page' exit={{opacity:0}}>

            <nav>
                <img className='logo3' src={logo} alt="" />
                <h1 className='coder'>Real Time Code Editor</h1>
                {/* <button className='' onClick={handleAuth}>Sign Up</button> */}
                {/* <Button onClick={handleAuth}>Sign Up</Button> */}
            </nav>
            
            <span className='main-heading'> <h1>Code With Your Team<span className='highlite'>.</span> Anytime<span className='highlite'>.</span> <br /> Anywhere<span className='highlite'>.</span></h1></span>
            <p className="tagline">
                 <span className='highlite' >Our Collaborative Code Editor</span>  is designed to revolutionize the way teams collaborate on code. With our powerful and intuitive platform, you can <span className='highlite'> code together in real-time,</span>  no matter where your team members are located </p>

            <div className="preview">
                <div className="preview-content-div">
                    <p className='preview-content'>Experience the future of collaborative coding with our innovative and powerful Collaborative Code Editor. Empower your team to work together seamlessly, boost productivity, and bring your ideas to life like never before. Start coding together, and let the possibilities unfold.</p>               
                </div>
            </div>

            {/* <p>Currently SignUp, Lock, And Chat Features are partially implemented ...</p> */}

            <section className='mb-14 flex'>
            <div className=''>
                {/* <LoginActual/> */}
                </div>
                <div className=''>
                    
                </div>
               
            
            </section>

            <section>
                     
            <div className='leftContent'>
                <h1> Let<span className='highlite' >'</span>s <span className='highlite' >Code</span> <br /> Together</h1>
            </div>

            <div className='loginboxwrapper'>
           
            {/* <div className="login-box"> 
                <form  onSubmit={handelSubmit} action="" method="get" >
                    <div className=" user-box">
                    <input type="text" name="teamID" required="" value={teamID } onKeyUp={handleEnter} onChange={(e)=>setTeamID(e.target.value)}/>
                    <label>TeamID</label>
                    </div>
                    <div className="user-box">
                    <input type="text" name="" required="" value={userName} onKeyUp={handleEnter} onChange={(e)=>setUserName(e.target.value)} />
                    <label>UserName</label>
                    </div><center>           
                    <button type="submit" onChange={()=>setSubmited(true)}>JOIN </button>     
                    </center>
                    <span>If your are the Team Lead , <a onClick={createNewTeam} href="" className='aInP'>Create Team ID</a></span>
                </form>
            </div>   */}
            <Loginbox/>
            {/* <LoginActual/> */}
         </div>  


            </section>

            <section className='todos'>
                <h2> To-Do  <span className='highlite'>S </span> </h2>
                <p>We welcome collaboration and invite you to contribute your ideas and expertise to enhance our project. Your valuable input is highly appreciated as we work together to create something exceptional. Feel free to join us and make a meaningful impact with your contributions.</p>
                <ul>
                   <a href="https://github.com/venkatthirupathi/Rtce/issues/1"><li>Enable Simultaneous Coding </li></a>
                    <a href=""><li>Efficient Database Implementation for Storing Individual Team's Code <span className='highlite'>- Done</span> </li></a>
                   <a href="https://github.com/venkatthirupathi/Rtce/issues/2"><li>Enhanced Code Editor: Customizable Theme Selection and UI</li></a> 
                   <a href="https://github.com/venkatthirupathi/Rtce/issues/3"><li>Advanced Speech Recognition Module: Hands-free Coding Experience</li></a> 
                   <a href="https://github.com/venkatthirupathi/Rtce/issues/4">
                    <li>Implement Encreption and Decreption Algorithem At Server and Client Side</li>
                   </a>
                   <a href="https://github.com/venkatthirupathi/Rtce.git"> <li>Contribute To Project</li></a>
                </ul>

            </section>


            <footer>
                <ul>
                    <a href="https://github.com/venkatthirupathi">
                        <img src={git} alt=""  className="social-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/thirupathi-venkat-8900102a6/">
                        <img src={linkedin} alt="" className="social-icon"/>
                    </a>
                    <a href="hhttps://hashnode.com/@venkat123">
                        <img src={hashnode} alt="" className="social-icon"/>
                    </a>
                    <a href="https://x.com/T_VENKAT_2005">
                        <img src={twitter} alt="" className="social-icon"/>
                    </a>
                </ul>
                <center className='highlite'><h3>Thirupathi Venkat<br /></h3>thirupathivenkat2005@gmail.com</center>
                
            </footer>       
        </motion.div>

    </>
  )
}

export default Login