import { useContext, useState } from 'react';
import AppLogo from 'url:../assets/Logo.png'
import { Link } from 'react-router';
import useOnlineStatus from './useOnlineStatus';
import UserContext from './UserContext';

const Header = () =>{
    const [btnName,setBtnName]=useState('Login');
    const onlineStatus = useOnlineStatus();
    const {UserName} = useContext(UserContext);
    return ( 
        <div className='flex justify-between bg-linear-to-tr from-yellow-200 to-yellow-400 text-white  text-lg shadow-lg shadow-gray-400 '>

            <div>
                <img src={AppLogo} alt='Company Logo' className='w-30 ml-4'/>
            </div>

            <div className='flex items-center mx-6'>
                <ul className=' flex items-center font-medium'>
                    <li className='mx-4'><div className={`w-5 h-5 rounded-full ${onlineStatus?'bg-green-500':'bg-red-600'}`}></div></li>
                    <li className='mx-4  hover:text-amber-500 '><Link to={'/'}>Home</Link></li>
                    <li className='mx-4  hover:text-amber-500'><Link to={'/about'}>About</Link></li>
                    <li className='mx-4  hover:text-amber-500'><Link to={'/orders'}>Orders</Link></li>
                    <li className='mx-4  hover:text-amber-500'><Link to={'/cart'}>Cart</Link></li>
                </ul>
                <button className='font-medium mx-4 bg-linear-to-tr from-orange-600 to-orange-400 px-4 py-1 rounded-md hover:from-orange-400 hover:to-yellow-400 hover:border hover:border-white cursor-pointer' onClick={()=>{
                    btnName==='Login'?setBtnName('LogOut'):setBtnName('Login');
                }}>{btnName}</button>
                <p>{UserName}</p>
            </div>
            
        </div>
    );
}

export default Header;