import React from 'react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import './index.css';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
    return (
        <ErrorBoundary>
            <div>
                <Navbar />
                <Landing />
                <Footer />
            </div>
        </ErrorBoundary>
    );
};

export default App;