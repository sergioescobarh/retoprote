import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import './App.scss';
import Home from '../pages/Home'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
          <Route path='/' element={<Home/>} />
    </>
  ));
  return (
    < >
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
