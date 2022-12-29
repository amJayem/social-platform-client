import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Authentication/Login';
import Register from '../Pages/Authentication/Register';
import Media from '../Pages/Media/Media';
import MediaDetails from '../Pages/Media/MediaDetails';
export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/media',
                element: <Media/>
            },
            {
                path: '/post-details/:id',
                element: <MediaDetails/>
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