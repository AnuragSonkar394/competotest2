

import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function Signup() {
    const navigate=useNavigate();

    const [user,setUser]=useState({
        name:"", email:"",phone:"",work:"",password:"",cpassword:""
    });
    let name,value;
     const handleInputs =(e)=>{
         console.log(e);
         name=e.target.name;
         value=e.target.value;
         setUser({...user,[name]:value})
     }
    const PostData= async (e)=>{
        e.preventDefault(); 

        const{name,email,phone,work,password,cpassword}=user;

        const res=await fetch("/register",{

            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,work,password,cpassword
            })

        });

        const data = await res.json();

        if(data.status=== 422|| !data){
            window.alert("invald Registration");
            console.log("invalid Registration");
        }
        else{
            window.alert(" Registration Successful");
            console.log("Registration Successful");

            navigate("/login");

        }
    }
       
  return (
      
    <div class="m-5">
      <span class="badge badge-warning ">SingUp</span>
        <form  method="POST">
        <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input name="name" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
     value={user.name}
     onChange={handleInputs}
     
    
     placeholder="Name"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    
    value={user.email}
     onChange={handleInputs}
    placeholder="Enter email"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">PhoneNmber</label>
    <input name="phone" type="number" class="form-control" id="exampleInputPassword1"
    
    value={user.phone}
     onChange={handleInputs}
     placeholder="PhoneNumber"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Work</label>
    <input name="work"type="text" class="form-control" id="exampleInputPassword1" 
     value={user.work}
     onChange={handleInputs}
    placeholder="Work"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input name="password" type="password" class="form-control" id="exampleInputPassword1" 
    
    value={user.password}
     onChange={handleInputs}
    placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input name="cpassword" type="password" class="form-control" id="exampleInputPassword1" 
     value={user.cpassword}
     onChange={handleInputs}
    placeholder="Confirm Password"/>
  </div>
  
  
  <input  type="submit" class="btn btn-success"
      onClick={PostData}
  />
</form>
    </div>
  )
}

export default Signup