import AppLogo from 'url:../assets/AppLogo.jpg'
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

export default Header;