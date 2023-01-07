import React,{useState} from 'react';
import './SignUp.css'

const SignUp = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [message,setMessage]=useState("");
    // const emailRegex = new RegExp('/\S+@\S+\.\S+/');
    const emailRegex = /\S+@\S+\.\S+/;

    const handleSignup=()=>{
        console.log(name,email,password)

        
        if(!name && !email && !password && !confirmPassword){
            console.log("first")
            setMessage("Error : All the fields are mandatory");
            document.getElementById("msg").style.color="#FF4F4F";
        }
        else if(!emailRegex.test(email)){
            console.log("email invalid")
            setMessage("Please Enter a valid email");            
            document.getElementById("msg").style.color="#FF4F4F";
        }
        else if(password!==confirmPassword){
            setMessage("Password and Confirm password should be same");            
            document.getElementById("msg").style.color="#FF4F4F";
        }
        else{
            setMessage("Successfully Signed Up!");
            document.getElementById("msg").style.color="#7ECD71"
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    }
  return (
    <div className="main">
        <div className="body">
           <h1>Signup</h1>
           <input type="text" placeholder="Full Name" id="name" value={name} onChange={(e)=>{
            setName(e.target.value)
        }}/>
           <input type="email" placeholder="Email" id="email" value={email} onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
           <input type="text" placeholder="Password" id="password" value={password} onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
           <input type="text" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={(e)=>{
            setConfirmPassword(e.target.value)
        }}/>
           <p id="msg">{message}</p>
           <button onClick={handleSignup}>Signup</button>
        </div>
    </div>
  )
}

export default SignUp