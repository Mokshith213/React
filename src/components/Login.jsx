import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {

    let [username,setUsername]=useState();
    let [password,setPassword]=useState();
    let navigate=useNavigate()

    let handlelog=(e)=>
    {
        e.preventDefault()
       
        let user=localStorage.getItem("username")
        let pass=localStorage.getItem("password")

        if(username===user && password===pass)
        {
            toast.success('Sucessfully Logined',{
                position: toast.POSITION.TOP_CENTER
            });
                navigate('/home')
        }
        else
        {
            navigate('/login')
            toast.error('Username & password not match', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        console.log({username,password});
    }
  return (
    <div className='ldiv'>
        <center><h3>LOGIN</h3></center>
    <form>
    <ToastContainer />
      <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' 
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      />
      <MDBInput className='mb-4' type='password' id='form1Example2' label='Password'
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit'  onClick={handlelog} block>
        Sign in
      </MDBBtn>
    </form>
    </div>
  );
}