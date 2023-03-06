import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {

  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';




export default function App() {

    let [username,setUsername]=useState();
    let [password,setPassword]=useState();
    let navigate=useNavigate()
    let handleClick=(e)=>
    {
        e.preventDefault()
       
        localStorage.setItem("username", username)
        localStorage.setItem("password", password)
       
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_CENTER
        });
        navigate('/login')
    }
  return (
    
    <div className='sdiv'>
        <center><h3>SIGNUP</h3></center>
       
    <form>
    <ToastContainer />
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email address' 
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      />
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password'
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      />

      <MDBCheckbox
        wrapperClass='d-flex justify-content-center mb-4'
        id='form3Example5'
        label='Subscribe to our newsletter'
        defaultChecked
      />

      <MDBBtn type='submit' className='mb-4' block onClick={handleClick}>
        Sign in
      </MDBBtn>

      <div className='text-center'>
        <p>
          Alredy a member? <Link to='/login'>Login</Link>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </div>
  );
}