import React from 'react'
import Signup from "./components/Signup.jsx"
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./components/global.css";
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';



const App = () => {
  return (
   <Router>
        <Routes>
            <Route path='/' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/home' element={<Home/>}/>
        </Routes>

   </Router>
  )
}

export default App