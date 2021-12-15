import React from "react";
import Topbar from "./components/Topbar";
import Header from './components/Header';
import Home from "./pages/Home";
import './App.css'
import Single from "./pages/Single";
import Write from "./pages/Write";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import singlePost from "./pages/SinglePost";

function App() {
  const user = false ;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> :<Login/>}/>
        <Route path="/login" element={user ? <Home/> :<Register />}/>
        <Route path="/setting" element={user ? <Setting/> :<Register/>}/>
        <Route path="/write" element={user ? <Write/> :<Register/>}/>
        <Route path="/post:id" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
