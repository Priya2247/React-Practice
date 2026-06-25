import React from 'react';
import ReactDOM from 'react-dom/client'

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'
import About from './components/About';
import Orders from './components/Orders';
import Cart from './components/Cart';
import MenuPage from './components/MenuPage';

import { createBrowserRouter,RouterProvider, Outlet } from 'react-router';




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
        <Outlet/>
        <Footer />
        </>
    );
}

const appRoute = createBrowserRouter([
        {
            path:"/",
            element:<App/>,
            children:[
                {
                    path:'/',
                    element:<Body/>
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

           ]
        }
]);



root.render(<RouterProvider router={appRoute}/>);

// root.render(<App/>);