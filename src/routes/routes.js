import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home';
export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])