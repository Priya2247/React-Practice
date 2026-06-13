import { useState } from 'react';
import AppLogo from 'url:../assets/AppLogo.jpg'
const Header = () =>{
    const [btnName,setBtnName]=useState('Login');
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
                <button className='login-btn' onClick={()=>{
                    btnName==='Login'?setBtnName('LogOut'):setBtnName('Login');
                }}>{btnName}</button>
            </div>
        </div>
    );
}

export default Header;