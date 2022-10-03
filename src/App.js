import './App.scss';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Verify from './Pages/Verify';
import { Routes, Route, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Verify' element={<Verify />}></Route>
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
