
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './Components/RootLayout';
import Home from './Components/Home/Home';
import Play from './Components/Play/Play';
import Maze from './Components/Maze/Maze';
import ConnectFour from './Components/ConnectFour/ConnectFour';

import Tictactoe from './Components/Tictactoe/Tictactoe';
import Memorymatch from './Components/Memorymatch/Memorymatch';
function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/play",
          element:<Play/>
          
            
          
        },
        {
          path:"/maze",
          element:<Maze/>
        },
        {
          path:"/connectfour",
          element:<ConnectFour/>
        },
        {
          path:"/tictac",
          element:<Tictactoe/>
        },
        {
          path:"/memorymatch",
          element:<Memorymatch/>
        }
      ]
    }
  ])
  return (
    <div >
      <RouterProvider router={route}>

      </RouterProvider>
    </div>
  );
}

export default App;
