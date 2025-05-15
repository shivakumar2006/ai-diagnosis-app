import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Description from './pages/Description';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Description />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;