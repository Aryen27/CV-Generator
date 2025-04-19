import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./components/SideBar"
import Preview from "./components/Preview"

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    summary: '',
    graduation: '',
    grad_grade: 0,
    hsc: '',
    hsc_grade: 0,
    ssc: '',
    ssc_grade: 0,
    work_ex: [
      {
        title: '',
        company_name: '',
        startDate: '',
        endDate: '',
        loc_type: '',
        description: '',
      }
    ] 
  });

  return (
    <div className='h-dvh grid grid-cols-5'>
      <SideBar setUserInfo={setUserInfo} userInfo={userInfo} />
      <Preview className='' userInfo={userInfo}/>
      <ToastContainer />
    </div>
  )
}

export default App
