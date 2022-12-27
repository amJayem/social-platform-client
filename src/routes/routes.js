import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home';
import Login from '../Pages/Authentication/Login';
import Register from '../Pages/Authentication/Register';
export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
        ],
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])