import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

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