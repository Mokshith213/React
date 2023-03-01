
import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount()
  {
    let btn=document.querySelector('form')

    btn.addEventListener("click",(e)=>
    {
        e.preventDefault()
        let username=document.getElementById("name").value
        let password=document.getElementById("password").value
        console.log({username , password});
    })
  }
  
    render() {
    return (
      <div>
        <form action="">

            <label htmlFor="">name:</label>
            <br />
            <input type="text" id="name" />
            <br />
            <label htmlFor="">password:</label>
            <br />
            <input type="text" id='password' />
            <br />
            <button>Submit</button>
        </form>
   
      </div>
    )
  }
}
