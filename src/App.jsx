import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Signup from "./pages/signup";
import Login from "./pages/login";



function App(){
    const router = createBrowserRouter([
{ path:"/signup", element: <Signup/>},
{ path:"/login", element: <Login/>},
   
]
    );

  return <RouterProvider router={router} />;  
}

export default App;