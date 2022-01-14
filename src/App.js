import {HashRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import CanchasProvider from './app/appContext';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Deporte from './pages/Deporte';
import Home from './pages/Home/Home';

function App() {
  return (
    <CanchasProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:dep" element={<Deporte/>}/>
          {/* <Route path="/:deporte" element={<Tenis/>}/>
          <Route path="/:deporte" element={<Voley/>}/> */}

        </Routes>
      </Router>
      <Footer/>
    </CanchasProvider>
  );
}

export default App;
