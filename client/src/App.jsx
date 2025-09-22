import React from 'react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import './index.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <Landing />
            <Footer />
        </div>
    );
};

export default App;