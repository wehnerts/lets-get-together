import React from 'react';
import {Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import './App.css';
import {Route} from "react-router";
import 'react-toastify/dist/ReactToastify.css';
import useActionItems from "./hooks/useActionItems";
import TitleBar from './components/TitleBar';
import MainPage from './pages/MainPage';
import ActionItemsPage from './pages/ActionItemsPage';
import ActionItemDetailPage from './pages/ActionItemDetailPage';
import PlanItemsPage from './pages/PlanItemsPage';
import NewActionItem from './components/ActionItem/NewActionItem';
import usePlanItems from "./hooks/usePlanItems";

export default function App() {
const {addNewActionItem, actionItems}= useActionItems()
const {planItems}=usePlanItems()
    return (
    <div className="App">
        <TitleBar/>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/actions"} element={<ActionItemsPage actionItems={actionItems}/>}/>
                <Route path={'/actionitem/:id'} element={<ActionItemDetailPage/>}/>
                <Route path={"/plans"} element={<PlanItemsPage planItems={planItems}/>}/>
                <Route path={"/new-action"} element={<NewActionItem addNewActionItem={addNewActionItem}/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    )
}
