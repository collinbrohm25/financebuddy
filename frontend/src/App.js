import Navbar from "./Navbar"
import Hope from "./pages/Hope Tracker/HopeTracker"
import Home from "./pages/Home"
import Log from "./pages/LogIn"
import LogIn from "./pages/LogIn"
import LoggedIn from "./pages/LoggedIn"
import SignUp from "./pages/SignUp"
import React from "react"
import NotFound from "./Error"
import { BrowserRouter as Router, Route, Switch, Redirect,Routes } from 'react-router-dom';
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
    <UserProvider>
      <Navbar /> 
      <div className="container">
         <Routes>
          <Route exact path= "/login" element={<Log />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/hopetracker" element={<Hope />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/loggedin" element={<LoggedIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
    </UserProvider>
    </>
  )
}

export default App