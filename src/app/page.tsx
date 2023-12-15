'use client';

import { BrowserRouter, HashRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Form from './pages/form';
import Game from './game';

// const routers = createBrowserRouter([{
//   path='/',
//   element=<Game/>,
// },
// {
//   path='/game',
//   element=<Game/>,
// }
// ])

export default function App() {
  
    return (
      <div>
        {/* <RouterProvider router={routers} /> */}
        <HashRouter>
          <Routes>
            <Route index element={<Game/>} />
            <Route path='/game' element={<Game/>}/>
            <Route path='/form' element={<Form/>}/>
          </Routes>
        </HashRouter>
      </div>
    )
  }
