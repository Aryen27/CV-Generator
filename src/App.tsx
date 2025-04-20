import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./components/SideBar"
import Preview from "./components/Preview"

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'abc@gmail.com',
    phone: '0000000000',
    linkedin: 'linkedin.com/abc',
    summary: 'Experienced web developer with a strong background in frontend and backend development.',
    graduation: {
      degree: 'Bachelors in Economics',
      university:'Mumbai University',
      grad_grade: 75,
    },
    hsc: {
      board:'CBSE',
      school:'',
      hsc_grade: 0,
    },
    ssc: {
      board:'CBSE',
      school:'',
      ssc_grade: 0,
    },
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
