import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { faker } from '@faker-js/faker';
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
    <Card imgSrc="https://m.media-amazon.com/images/I/617f8u0Z6iL._SX425_.jpg"
           name="dog food"
           price={faker.commerce.price()}
           comment="good Quality"
           
           />
    <Card 
    imgSrc="https://m.media-amazon.com/images/I/71PKpcLG-3L._SX425_.jpg"
    name={faker.name.firstName()}
    price={faker.commerce.price()}
   comment="number one quality"
        
        />

        <Card
            imgSrc="https://m.media-amazon.com/images/I/616UBK7THSL._SX425_.jpg"
            name={faker.name.firstName()}
            price={faker.commerce.price()}
           comment="number one quality"
        
        />

    <Card
            imgSrc="https://m.media-amazon.com/images/I/616UBK7THSL._SX425_.jpg"
            name={faker.name.firstName()}
            price={faker.commerce.price()}
           comment="number one quality"
        
        />


    <Card
            imgSrc="https://m.media-amazon.com/images/I/616UBK7THSL._SX425_.jpg"
            name={faker.name.firstName()}
            price={faker.commerce.price()}
           comment="number one quality"
        
        />




    <Footer />

  </React.StrictMode>
);


