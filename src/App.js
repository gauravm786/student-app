import './App.css'
import React from 'react'
import Layout from './components/Layout'
import Home from './components/Home'
import NoPage from './components/NoPage'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import TeachersDashboard from './components/TeachersDashboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>{
return(
  <>
  <div>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="Dashboard" element={<TeachersDashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  </>
)
} 
export default App