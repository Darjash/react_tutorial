'use client';

import {HashRouter, Route, Routes} from 'react-router-dom';
import Form from './pages/form';
import Game from './game';
import MainPage from './pages/mainPage';


export default function App() {
  
    return (
      <div>
        {/* <RouterProvider router={routers} /> */}
        <HashRouter>
          <Routes>
            <Route index element={<MainPage/>} />
            <Route path='/game' element={<Game/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/main' element={<MainPage/>}/>
          </Routes>
        </HashRouter>
      </div>
    )
  }
