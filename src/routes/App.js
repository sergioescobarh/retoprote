import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './App.scss';
import Home from '../pages/Home'
import Heros from '../pages/Heros';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
          <Route path='/' element={<Home/>} />
          <Route path='/heros' element={<Heros/>} />
    </>
  ));
  return (
    < >
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
