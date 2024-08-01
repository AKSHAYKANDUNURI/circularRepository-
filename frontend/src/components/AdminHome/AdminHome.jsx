import React,{useState} from 'react';
import './AdminHome.css'
import { useNavigate, useLocation } from 'react-router-dom';
import UserManage from '../UserManage/UserManage';
import CircularDelete from '../CircularDelete/CircularDelete';
import CircularUpload from '../CircularUpload/CircularUpload';
import Header from '../Header/Header';
import Adminlogo from '../assets/Adminlogo.png'
import Sidebar from '../Sidebar/Sidebar';
import { PdfProvider } from '../Context/pdfContext';


const AdminHome = () => {
    let {state}=useLocation()
    

    const[showUserManage,setShowUserManage]=useState(false);
    const[showCircularUpload,setShowCircularUpload]=useState(false);
    const[showCircularDelete,setShowCircularDelete]=useState(true);


    

    return (
        <div>
            <PdfProvider>
            <Header/>
            <Sidebar state={state} />
            </PdfProvider>
           

           


           

{/*
        <div className="card" onClick={handleUser} >
           <p>Register a New User</p> 
        </div>

        <div className="card"   onClick={handleUpload} >
            <p>Upload New Circular</p>
        </div>
        
        <div className="card" onClick={handleDelete} >
            <p>Delete Circular</p>
        </div>
    */}
            
        </div>
    );
};

export default AdminHome;
