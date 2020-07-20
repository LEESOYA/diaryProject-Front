import React from 'react';
import Routes from "./components/routes";
import Menu from "./components/fixlayout/menu";
import Footer from "./components/fixlayout/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Menu/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
