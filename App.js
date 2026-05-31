import React from 'react';
import ReactDOM from 'react-dom/client'
import AppLogo from 'url:./assets/AppLogo.jpg'
import VikaBiriyani from 'url:./assets/VikaBiriyani.jpg'


const root=ReactDOM.createRoot(document.getElementById('root'));

/* Design 
   -- Header +> Logo , NavItems
   -- Body => Search , Card Container , Card items
   -- Footer => License , Address , contact
*/

const Header = () =>{
    return ( 
        <div className='header'>
            <div className='logo-container'>
                <img src={AppLogo} alt='Company Logo' className='logo'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Orders</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const CardItem = () =>{
    return (
        <div className='card-item'>
            <img className='card-img'  src={VikaBiriyani} alt='Ordering Food img' ></img>
            <h2>Vika's Food</h2>
            <h3>Rating : 4.3</h3>
            <h6>Arrive in 30 mins</h6>
        </div>
    );
}

const Body = () =>{
    return(
    <div className='card-container'>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
    </div>
    );
}

const Footer = () =>{
    return (
        <div className="footer">
            <p>&copy; 2026 BrandName. All rights reserved.</p>
        </div>
    );
}

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