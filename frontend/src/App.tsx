import React from 'react';
import {Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import './App.css';
import {Route} from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import MainPage from "./pages/MainPage";
import ActionItemsPage from "./pages/ActionItemsPage";
import ActionItemDetailPage from "./pages/ActionItemDetailPage";
import PlanItemsPage from "./pages/PlanItemsPage";
import useActionItems from "./hooks/useActionItems";
import NewActionItem from "./components/NewActionItem";



export default function App() {
const {addNewActionItem, actionItems}= useActionItems()
    return (
        <div className="App">

            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/actions"} element={<ActionItemsPage actionItems={actionItems}/>}/>
                <Route path={'/actionitem/:id'} element={<ActionItemDetailPage/>}/>
                <Route path={"/plans"} element={<PlanItemsPage/>}/>
                <Route path={"/new-action"} element={<NewActionItem addNewActionItem={addNewActionItem}/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
}


