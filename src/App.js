import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'


const root=ReactDOM.createRoot(document.getElementById('root'));

/* Design 
   -- Header +> Logo , NavItems
   -- Body => Search , Card Container , Card items
   -- Footer => License , Address , contact
*/


const App = () =>{
    return (
        <>
        <Header />
        <Body />
        <Footer />
        </>
    );
}

root.render(<App/>);