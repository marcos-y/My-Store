import './App.css';
import React, { useState } from 'react';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import Smartphones from './Pages/Smartphones/Smartphones';
import Drones from './Pages/Drones/Drones';
import Computers from './Pages/Computers/Computers';
import Home from './Pages/Home/Home';
import Account from './Pages/Account/Account';
import Profile from './Pages/Profile/Profile';
import Dashboard from './Pages/Dashboard/Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  //TOTAL CART COST
  sessionStorage.setItem('Total',0);

  //ITEMS CART
  const [items,setItems] = useState([{}]);
  sessionStorage.setItem('Items',JSON.stringify(items));
  console.log( sessionStorage.getItem('Items'));

  return (
    <>
    <div style={{backgroundColor:'#c4d8e5'}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/smartphones" element={<Smartphones/>} />
            <Route path="/drones" element={<Drones/>} />
            <Route path="/computers" element={<Computers/>} />
            <Route path="/create-account" element={<CreateAccount/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
