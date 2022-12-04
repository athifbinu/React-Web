import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import Banner from './components/Banner';
import Card from './components/Card'
import Footer from './components/Footer'
import './components/Generel.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Banner />
    <Card />
    <Card />
    <Card />
    <Footer />

  </React.StrictMode>
);


