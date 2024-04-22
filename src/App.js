import Navbar from "./Navbar"
import Cash from "./pages/CashFlow"
import Budget from "./pages/Budget"
import Hope from "./pages/Hope Tracker/HopeTracker"
import Home from "./pages/Home"
import Log from "./pages/LogIn"
import LogIn from "./pages/LogIn"
import LoggedIn from "./pages/LoggedIn"
import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect,Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar /> 
      <div className="container">
         <Routes>
          <Route exact path= "/login" element={<Log />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/cashflow" element={<Cash />} />
          <Route path="/hopetracker" element={<Hope />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/loggedin" element={<LoggedIn />} />
          </Routes>
      </div>
    </>
  )
}

export default App