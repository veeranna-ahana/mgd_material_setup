import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WithNav from "./Layout/WithNav";
import Parentroute from "./Layout/Parentroute";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import MaterialSetUp from "./pages/MaterialSetUp/MaterialSetUp";
import {  ToastContainer } from "react-toastify";







function App() {
  return (

   
    <BrowserRouter>
  <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route element={<Login />} path="/" />
        <Route path="/home" element={<Home/>} />

        <Route element={<WithNav />}>
          <Route path="/MaterialSetUp" element={<MaterialSetUp/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
