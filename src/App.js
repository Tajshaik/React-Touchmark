import { Children } from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Newtransaction from './Components/Newtransaction';
import Viewtransaction from './Components/Viewtransaction';
import Userprofile from './Components/Userprofile';
import { UseSelector, useSelector } from 'react-redux';

function App() {
  const LoggedIn = useSelector((state) => state.AuthSlice.isLoggedIn)
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element: <Login/>,
    },
    {
      path:'Home',
      element: (LoggedIn) ? <Home /> : <Navigate to='/'/>,
      children:[
        {
          path:'Newtransaction',
          element:<Newtransaction />
        },
        {
          path:'ViewSubmittedTransaction',
          element:<Viewtransaction />
        },
        {
          path:'UserProfile',
          element:<Userprofile />
        }
      ]
    }
  ])
  return (
    <div className="App">
        <RouterProvider router={appRouter}>
           {/* <Login /> */}
        </RouterProvider>
    </div>
  );
}

export default App;
