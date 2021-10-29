import React from 'react';
import Header from'./Component/Header';
import NavBar from'./Component/NavBar';
import Maincontent from './Component/Maincontent';
import Footer from'./Component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
         <Header />
         <NavBar />
         <Maincontent />
         <Footer />
    </div>
  );
}

export default App;
