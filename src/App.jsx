import React ,{ useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./home/home.jsx";
import Layout from "./pages/Layout.jsx";
import AddUser from './adduser/adduser.jsx';
import CreateCase from './createcase/createcase.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import Sidebar from './sidebar/Sidebar.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="adduser" element={<AddUser />} />
            <Route path="createcase" element={<CreateCase />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sidebar" element={<Sidebar/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
