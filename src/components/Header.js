import { useState } from 'react';
import AppLogo from 'url:../assets/Logo.png'
import { Link } from 'react-router';
import useOnlineStatus from './useOnlineStatus';

const Header = () =>{
    const [btnName,setBtnName]=useState('Login');
    const onlineStatus = useOnlineStatus();
    return ( 
        <div className='flex justify-between bg-linear-to-r from-pink-900 to-yellow-500 text-white  text-lg shadow-2xl shadow-gray-700 '>

            <div>
                <img src={AppLogo} alt='Company Logo' className='w-30 ml-4'/>
            </div>

            <div className='flex items-center mx-6'>
                <ul className=' flex font-semibold'>
                    <li className='mx-4 '>{onlineStatus ? '🟢':'🔴'}</li>
                    <li className='mx-4  hover:text-amber-500 '><Link to={'/'}>Home</Link></li>
                    <li className='mx-4  hover:text-amber-500'><Link to={'/about'}>About</Link></li>
                    <li className='mx-4  hover:text-amber-500'><Link to={'/orders'}>Orders</Link></li>
                    <li className='mx-4  hover:text-amber-500'><Link to={'/cart'}>Cart</Link></li>
                </ul>
                <button className='login-btn mx-4 bg-linear-to-tr from-red-800 to-red-400 px-4 py-1 rounded-md hover:bg-orange-500 cursor-pointer' onClick={()=>{
                    btnName==='Login'?setBtnName('LogOut'):setBtnName('Login');
                }}>{btnName}</button>
            </div>
            
        </div>
    );
}

export default Header;