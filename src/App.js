import React from 'react';
import Header from './components/Header';
import CampsitesList from './features/campsites/CampsitesList';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <CampsitesList />
        <Footer />
    </div>
  );
}

export default App;
