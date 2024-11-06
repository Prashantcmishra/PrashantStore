import React from 'react'
import Home from './Home/home';
import Courses from './Courses/courses'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup';


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/Signup" element={<Signup/>}/>
     </Routes>
    </>
  );
}

export default App
