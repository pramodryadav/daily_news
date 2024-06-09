import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import ErrorPage from "./Pages/Error";
import Favourites from "./Pages/Favourite";
import ProtectRoutes from "./ProtectRoutes";
import NewsListing from "./Pages/Newslisting";
import Login from "./Pages/Login";
import ResponsiveAppBar from "./components/Appbar";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ResponsiveAppBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProtectRoutes />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <NewsListing />,
          },
          {
            path: "/fav",
            element: <Favourites />,
          },
          {
            path: "/all",
            element: <NewsListing />,
          },
        ],
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  }
]);

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
