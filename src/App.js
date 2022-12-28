import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <div className="bg-color  min-h-screen">
      <div className="">
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
