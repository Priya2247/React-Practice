import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'
import Orders from './components/Orders';
import Cart from './components/Cart';
import MenuPage from './components/MenuPage';
import Error from './components/Error';

import { createBrowserRouter,RouterProvider, Outlet } from 'react-router';
import useOnlineStatus from './components/useOnlineStatus';
import OfflinePage from './components/OfflinePage';
import UserContext from './components/UserContext';


const About = lazy(()=> import('./components/About'));

/* Design 
   -- Header +> Logo , NavItems
   -- Body => Search , Card Container , Card items
   -- Footer => License , Address , contact
*/



const App = () =>{
    const {UserName} = useContext(UserContext);
    const [userName, setUserName] = useState(UserName);

    const onlineStatus = useOnlineStatus();
    return (
        <div>
        <UserContext.Provider value={{UserName:userName, setUserName}}>
        <Header/>
        {onlineStatus? <Outlet/> : <OfflinePage/>}
        <Footer />
        </UserContext.Provider>
        </div>
    );
}

const appRoute = createBrowserRouter([
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:'/',
                    element:<Body/>,
                },
                {
                    path:'/about',
                    element:<Suspense><About/></Suspense>
                },
               {
                    path:'/orders',
                    element:<Orders/>
               },
              {
                    path:'/cart',
                    element:<Cart/>
              },
              {
                    path:'/restaurants/:resID',
                    element:<MenuPage/>
              }
           ],
           errorElement:<Error/>
        }
]);

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>);

// root.render(<App/>);