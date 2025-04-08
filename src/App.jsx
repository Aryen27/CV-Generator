import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function SideBar() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  }

  const handleBlur = (e) => {
    const { required, value } = e.target;
  
    if (required && value.trim() === "") {
      toast.warn("This is a required field", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo({ ...userInfo, [id]: value });
    console.log(userInfo);
  }

  return (
    <div className='bg-slate-700 col-span-2'>
      <h1 className='text-center mt-[2.5rem] uppercase text-2xl'> Resume Generator</h1>
      {/*PERSONAL DETAILS*/}
      <div className='py-[2rem]'>
            <h3 className='text-center text-lg  text-white'>Personal Details</h3>
        <form method='POST' id='personal'>
          <section>
          <div className='flex flex-col w-4/5 m-auto gap-3'>
          <label htmlFor='firstName' className='text-white'>First Name</label>
          <input id='firstName' name='firstName' type='text' onChange={handleChange} required onBlur={handleBlur}/>

          <label htmlFor='lastName' className='text-white'>Last Name</label>
          <input id='lastName' name='lastName' type='text' onChange={handleChange} required onBlur={handleBlur}/>

          <label htmlFor='email' className='text-white'>Email ID</label>
          <input id='email' name='email' type='email' onChange={handleChange} required onBlur={handleBlur}/>

          <label htmlFor='phone' className='text-white'>Phone</label>
          <input id='phone' name='phone' type='text' minLength={9} onChange={handleChange} required onBlur={handleBlur}/>
            
          <label htmlFor='linkedin' className='text-white'>Linkedin</label>
          <input id='linkedin' name='linkedin' type='url' pattern="https://.*" onChange={handleChange} />
              
          <label htmlFor='summary' className='text-white'>Summary</label>
          <input id='summary' name='summary' type='text' onChange={handleChange}/>

          </div>
          </section>
        <Button type="button" className='flex mx-auto my-4' onClick={handleSubmit}>Button</Button>
        </form>
      </div>

    {/*EDUCATION*/}
    <div>
        <form method='POST' className='flex flex-col justify-center items-center' id='edu'>
        <h3 className='text-center text-lg'>Education Details</h3>
      <div className='flex flex-col gap-2'>
            <label htmlFor='graduation' className='text-white'>Graduation</label>
            <div className='flex gap-2'> 
        <input id='graduation' name='graduation' type='text' required className='w-[70%]' onChange={handleChange}/>
        <input id='grad_grade' name='grad_grade' type='number' required className='w-[20%]' placeholder='Eg 75%' onChange={handleChange}/>
            </div>
      </div>
          
      <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='hsc' className='text-white'>Higher Secondary/ Grade 12</label>
          <div className='flex gap-2'> 
        <input id='hsc' name='hsc' type='text' required className='w-[70%]' onChange={handleChange}/>
        <input id='hsc_grade' name='hsc_grade' type='number' className='w-[20%]' placeholder='Eg 75%' onChange={handleChange}/>
           </div>
          </div>
          

          <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='ssc' className='text-white'>Senior Secondary/ Grade 10</label>
          <div className='flex gap-2'> 
        <input id='ssc' name='ssc' type='text' required className='w-[70%]' onChange={handleChange}/>
        <input id='ssc_grade' name='ssc_grade' type='number' className='w-[20%]' placeholder='Eg 75%' onChange={handleChange}/>
           </div>
      </div>
    </form>
    </div>

      {/*Work Ex*/}

      <div>
        <form method='POST' className='flex flex-col justify-center items-center' id='work-ex'>
        <h3 className='text-center text-lg'>Work Experience</h3>
      <div className='flex flex-col gap-2'>
            <label htmlFor='title' className='text-white'>Title</label>
            <div className='flex gap-2'> 
            <input id='title' name='title' type='text' required className='w-[70%]' onChange={handleChange}/>
            </div>
      </div>
          
      <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='company_name' className='text-white'>Company Name</label>
        <input id='company_name' name='company_name' type='text' required className='w-[70%]' onChange={handleChange}/>
          <div className='flex gap-2'> 
           </div>
          </div>
          

          <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='loc_type' className='text-white'>Location Type</label>
      <input id='loc_type' name='loc_type' type='text' required className='w-[70%]' onChange={handleChange}/>

          <div className='flex gap-2'> 
            </div>
      </div>
      
      <label htmlFor='description' className='text-white'>Description</label>
      <input id='description' name='description' type='text' required className='w-[70%]' onChange={handleChange}/>
    </form>
      </div>
      


    </div>
  );
}

function ResumePreview() {
  /*
  1. General information
  2. Educational Experience
  3. Practical Experience
  */

  return (
    <div className='col-span-3'>
      <h1>Preview</h1>
    </div>
  );
}

function App() {


  return (
    <div className='grid grid-cols-5'>
      <SideBar className='' />
      <ToastContainer />
      <ResumePreview className=''/>
    </div>
  )
}

export default App
