import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Tabs, Button } from '@radix-ui/themes';


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
    <div className='bg-slate-200 col-span-2 h-screen'>
      <h1 className='text-center mt-[2rem] uppercase text-2xl mb-4'> Resume Generator</h1>
      
      <Tabs.Root defaultValue='personal'>
      <Tabs.List justify={'center'}>
		    <Tabs.Trigger value="personal">Personal</Tabs.Trigger>
		    <Tabs.Trigger value="education">Education</Tabs.Trigger>
		    <Tabs.Trigger value="work">Work</Tabs.Trigger>
	    </Tabs.List>
      
        {/*PERSONAL DETAILS*/}
      <Tabs.Content value="personal">
      <div className='py-[2rem]'>
        <form method='POST' id='personal' className='flex flex-col gap-3  justify-center'>
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
              {/* className='flex mx-auto my-4' onClick={handleSubmit} */}
          </section>
              <div className='w-2 mx-auto my-3'>
              <Button size="2" color='cyan' onClick={handleSubmit}>Submit</Button>
              </div>
        </form>
      </div>
        </Tabs.Content>
        
        {/*EDUCATION*/}
        <Tabs.Content value="education">
    <div>
        <form method='POST' className='flex flex-col justify-center items-center mt-4' id='edu'>
      <div className='flex flex-col gap-2'>
            <label htmlFor='graduation' className='text-white'>Graduation</label>
            <div className='flex gap-2'> 
        <input id='graduation' name='graduation' type='text' required className='w-[70%]' onChange={handleChange}/>
        <input id='grad_grade' name='grad_grade' type='number' required className='w-[20%]' placeholder='75%' onChange={handleChange}/>
            </div>
      </div>
          
      <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='hsc' className='text-white'>Higher Secondary/ Grade 12</label>
          <div className='flex gap-2'> 
        <input id='hsc' name='hsc' type='text' required className='w-[70%]' onChange={handleChange}/>
        <input id='hsc_grade' name='hsc_grade' type='number' className='w-[20%]' placeholder='75%' onChange={handleChange}/>
           </div>
          </div>
          

          <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='ssc' className='text-white'>Senior Secondary/ Grade 10</label>
          <div className='flex gap-2'> 
        <input id='ssc' name='ssc' type='text' required className='w-[70%]' onChange={handleChange}/>
        <input id='ssc_grade' name='ssc_grade' type='number' className='w-[20%]' placeholder='75%' onChange={handleChange}/>
           </div>
              </div>
              
              <div className='w-2 mx-auto my-3'>
              <Button size="2" color='cyan'>Submit</Button>
              </div>
    </form>
    </div>
    </Tabs.Content>
        
        {/*Work Ex*/}
      <Tabs.Content value="work">
      <div className='flex justify-center '>
      <form method='POST' className='flex flex-col justify-center items-center mx-auto mt-4 w-[80%]' id='work-ex'>
      <div className='flex flex-col gap-2'>
            <label htmlFor='title' className='text-white'>Title</label>
            <input id='title' name='title' type='text' required className='w-[70%] flex gap-2' onChange={handleChange}/>
      </div>
          
      <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='company_name' className='text-white'>Company Name</label>
      <input id='company_name' name='company_name' type='text' required className='w-[70%]' onChange={handleChange}/>
      </div>
          

      <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='loc_type' className='text-white'>Location Type</label>
      <input id='loc_type' name='loc_type' type='text' required className='w-[70%]' onChange={handleChange}/>
      </div>
      
          <div className='flex flex-col items-start gap-2'> 
          <label htmlFor='description' className='text-white'>Description</label>
          <textarea name='description' id='description' onChange={handleChange}/>
          </div>
              
      <div className='w-2 mx-auto my-3 flex justify-between items-center mx-auto'>
      <Button size="2" color='cyan' onClick={handleSubmit}>Submit</Button>
      <Button size="2" color='teal'>Add</Button>
      </div>
    </form>
      </div>
        </Tabs.Content>
        
      </Tabs.Root>
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
    <div className='h-dvh grid grid-cols-5'>
      <SideBar className='' />
      <ResumePreview className=''/>
      <ToastContainer />
    </div>
  )
}

export default App
