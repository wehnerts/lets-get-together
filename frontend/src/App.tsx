import React from 'react';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import {Route} from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import MainPage from "./pages/MainPage";
import ActionItemsPage from "./pages/ActionItemsPage";
import ActionItemDetailPage from "./pages/ActionItemDetailPage";
import PlanItemsPage from "./pages/PlanItemsPage";


function App() {

  return (
    <div className="App">

            <Routes>
               <Route path={"/"} element={<MainPage/>}/>
               <Route path={"/actions"} element={<ActionItemsPage/>}/>


             <Route path={'/actionitem/:id'}
                      element={<ActionItemDetailPage/>}/>

               <Route path={"/plans"} element={<PlanItemsPage/>}/>



        </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
