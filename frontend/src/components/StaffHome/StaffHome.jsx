import React,{useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import LatestUpdates from '../LatestUpdates/LatestUpdates';
import Search from '../Search/Search';
import Header from '../Header/Header';
import stafflogo from '../assets/Teacherlogo.png'
import './StaffHome.css'
import SidebarStaff from '../SidebarStaff/SidebarStaff';
import { PdfProvider } from './components/Context/pdfContext'

const StaffHome = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [showUpload, setShowUpload] = useState(false);
    let {state}=useLocation()
    


   
      return(
        <div>
          <PdfProvider>
          <Header/>
         <SidebarStaff state={state}/>
         </PdfProvider>
        </div>
      )
    };

export default StaffHome;
