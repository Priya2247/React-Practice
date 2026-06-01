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

const CardItem = (props) =>{
    return (
        <div className='card-item'>
            <img className='card-img'  src={VikaBiriyani} alt='Ordering Food img' ></img>
            <h2>{props.resName}</h2>
            <h3>{props.rating}</h3>
            <h6>Arrive in 30 mins</h6>
        </div>
    );
}

const Body = () =>{
    return(
    <div className='card-container'>
        <CardItem resName="Hema's Food" rating="4.9"/>
        <CardItem resName="Burma Burger" rating="3.5"/>
        <CardItem resName="KFC" rating="3.8"/>
        <CardItem resName="Chaat Tadka" rating="2.7"/>
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