import { RouterProvider } from 'react-router-dom';
import { routes } from './routes/routes';

function App() {
  return (
    <div className='max-w-4xl mx-auto my-0 bg-emerald-100 min-h-screen'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
