import React from 'react'
import Aboutus from "./components/aboutus/Aboutus";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Programs from "./components/programs/Programs";
import "./App.css";
const App = () => {
  return (
    <div className="App">
        <div className="navbar">
            <Navbar/>
        </div>
        <Header/>
        <Aboutus/>
        <Programs/>
        <Contact/>
    </div>
  );
}

export default App