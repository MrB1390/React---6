import React, { useState } from 'react';
import Userdetail from './component/Userdetail';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './component/NavBar';
import Add from './component/Add';
import Edit from './component/Edit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const[userId,setUserId] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ToastContainer />
      <Routes>
        <Route path='/' element={<Userdetail setUserId={setUserId}/>}/>
        <Route path='/add' element={<Add />}/>
        <Route path='/edit' element={<Edit  userId={userId}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;