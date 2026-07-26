import React from 'react';
import ReactDOM from 'react-dom/client'

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'
import About from './components/About';
import Orders from './components/Orders';
import Cart from './components/Cart';
import MenuPage from './components/MenuPage';
import Error from './components/Error';

import { createBrowserRouter,RouterProvider, Outlet } from 'react-router';
import useOnlineStatus from './components/useOnlineStatus';
import OfflinePage from './components/OfflinePage';



/* Design 
   -- Header +> Logo , NavItems
   -- Body => Search , Card Container , Card items
   -- Footer => License , Address , contact
*/

const App = () =>{
    const onlineStatus = useOnlineStatus();
    return (
        <div>
        <Header />
        {onlineStatus? <Outlet/> : <OfflinePage/>}
        <Footer />
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
                    element:<About/>
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