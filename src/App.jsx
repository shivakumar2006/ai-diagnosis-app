import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Description from './pages/Description';
import Navbar from './components/Navbar';
import "./App.css";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Description />} />
            </Routes>
        </>
    )
}

export default App;