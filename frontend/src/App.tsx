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
import PlanItemDetailPage from "./pages/PlanItemDetailPage";
import NewPlanItem from "./pages/NewPlanItem";
import useMembers from "./hooks/useMembers";

export default function App() {
const {addNewActionItem, actionItems, deleteActionItem, editActionItem}= useActionItems()
const {planItems, deletePlanItem, editPlanItem}=usePlanItems()
const {membersForWork}=useMembers()
    return (
    <div className="App">
        <TitleBar/>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/actions"} element={<ActionItemsPage actionItems={actionItems}/>}/>
                <Route path={'/actionitem/:id'} element={<ActionItemDetailPage editActionItem={editActionItem} deleteActionItem={deleteActionItem}/>}/>
                <Route path={"/new-action"} element={<NewActionItem addNewActionItem={addNewActionItem}/>}/>

                <Route path={"/plans"} element={<PlanItemsPage actionItems={actionItems} planItems={planItems}/>}/>
                <Route path={'/planItem/:id'} element={<PlanItemDetailPage actionItems={actionItems} editPlanItem={editPlanItem} deletePlanItem={deletePlanItem}/>}/>
                <Route path={'/new-plan/:actionId'} element={<NewPlanItem membersForWork={membersForWork} />}/>
            </Routes>
            <ToastContainer/>
        </div>
    )
}
