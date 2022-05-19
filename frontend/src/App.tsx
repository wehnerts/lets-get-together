import React from 'react';
import { Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import useActionItems from "./hooks/useActionItems";
import {Route} from "react-router";
import ActionItemsGallery from "./components/ActionItemsGallery";
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const {actionItems} = useActionItems()
  return (
    <div className="App">
        <ToastContainer/>
        <Routes>
            <Route path={"/"} element={<ActionItemsGallery actionItems={actionItems}/>}>

            </Route>

        </Routes>
    </div>
  );
}

export default App;
