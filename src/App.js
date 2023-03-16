import './styles/App.css';
import Home from './components/Home.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Marketplace from './components/Marketplace';
import Rental from './components/Rental';
import Updates from './components/Updates';
import { Community } from './components/Community';
import { useEffect } from 'react';


function App() {


  return (
    <div className="App">

        <BrowserRouter>
        
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/community" element={<Community/>}/>
            <Route path="/marketplace" element={<Marketplace/>}/>
            <Route path="/rental" element={<Rental/>}/>
            <Route path="/updates" element={<Updates/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
