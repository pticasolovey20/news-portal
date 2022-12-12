import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContent from '../AppContent';
import { StrictMode } from 'react';

const App = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </StrictMode>
    );
};

export default App;
