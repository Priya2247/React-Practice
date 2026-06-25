import { useState } from 'react';
import AppLogo from 'url:../assets/AppLogo.jpg'
import { Link } from 'react-router';

const Header = () =>{
    const [btnName,setBtnName]=useState('Login');
    return ( 
        <div className='header'>

            <div className='logo-container'>
                <img src={AppLogo} alt='Company Logo' className='logo'/>
            </div>

            <div className='nav-items'>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/orders'}>Orders</Link></li>
                    <li><Link to={'/cart'}>Cart</Link></li>
                </ul>
                <button className='login-btn' onClick={()=>{
                    btnName==='Login'?setBtnName('LogOut'):setBtnName('Login');
                }}>{btnName}</button>
            </div>
            
        </div>
    );
}

export default Header;