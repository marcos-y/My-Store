import './App.css';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import Smartphones from './Pages/Smartphones/Smartphones';
import Drones from './Pages/Drones/Drones';
import Computers from './Pages/Computers/Computers';
import Home from './Pages/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <div style={{backgroundColor:'#c4d8e5'}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
            </Route>
            <Route path="/smartphones" element={<Smartphones/>}>
            </Route>
            <Route path="/drones" element={<Drones/>}>
            </Route>
            <Route path="/computers" element={<Computers/>}>
            </Route>
            <Route path="/create-account" element={<CreateAccount/>}>
            </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
