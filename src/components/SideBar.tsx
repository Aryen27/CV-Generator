import React, { useState } from 'react'
import { Tabs, Button } from '@radix-ui/themes';

function SideBar({ userInfo, setUserInfo }) {
  const [graduation, setGraduation] = useState({});
  const [hsc, setHsc] = useState({});
  const [ssc, setSsc] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ ...userInfo, graduation, hsc, ssc });
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

  const handleGraduationChange = (e) => {
    const { id, value } = e.target;
    setGraduation({ ...graduation, [id]: value });
    console.log(graduation);
  }

  const handleHscChange = (e) => {
    const { id, value } = e.target;
    setHsc({ ...hsc, [id]: value });
    console.log(hsc);
  }

  const handleSscChange = (e) => {
    const { id, value } = e.target;
    setSsc({ ...hsc, [id]: value });
    console.log(ssc);
  }

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
      <div className='py-[1rem]'>
        <form method='POST' id='personal' className='flex flex-col gap-3  justify-center' onSubmit={handleSubmit}>
          <section>
          <div className='flex flex-col w-4/5 m-auto gap-3'>
          <label htmlFor='firstName' className='text-white'>First Name</label>
          <input id='firstName' name='firstName' type='text' className='w-full rounded' onChange={handleChange} required onBlur={handleBlur}/>

          <label htmlFor='lastName' className='text-white'>Last Name</label>
          <input id='lastName' name='lastName' type='text' className='w-full rounded' onChange={handleChange} required onBlur={handleBlur}/>

          <label htmlFor='email' className='text-white'>Email ID</label>
          <input id='email' name='email' type='email' className='w-full rounded' onChange={handleChange} required onBlur={handleBlur}/>

          <label htmlFor='phone' className='text-white'>Phone</label>
          <input id='phone' name='phone' type='text' className='w-full rounded' minLength={9} onChange={handleChange} required onBlur={handleBlur}/>
            
          <label htmlFor='linkedin' className='text-white'>Linkedin</label>
          <input id='linkedin' name='linkedin' type='url' className='w-full rounded' pattern="https://.*" onChange={handleChange} />
              
          <label htmlFor='summary' className='text-white'>Summary</label>
          <textarea name='summary' id='summary' value={userInfo.summary} onChange={handleChange} className="w-full h-[90px] border rounded resize-none" placeholder="Enter professional summary" />

          </div>
          </section>
              <div className='w-2 mx-auto my-3'>
              <Button size="2" color='cyan' type='submit'>Submit</Button>
              </div>
        </form>
      </div>
        </Tabs.Content>
        
        {/*EDUCATION*/ }
    <Tabs.Content value="education">
    <div>
        <form method='POST' className='flex flex-col justify-center items-center mt-4' id='edu' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
            <label htmlFor='graduation' className='text-white'>Graduation</label>
            <div className='flex gap-2'> 
            <input id='degree' name='graduation' type='text' required className='w-[80%] rounded' onChange={handleGraduationChange} placeholder='Degree'/>
            <input id='grad_grade' name='grad_grade' type='number' className='w-[20%] rounded' onChange={handleGraduationChange} placeholder='75%' />
            </div>
            <input id='university' name='graduation' type='text' required className='w-full rounded' onChange={handleGraduationChange} placeholder='University'/>
        </div>
          
      <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='hsc' className='text-white'>Higher Secondary/ Grade 12</label>
          <div className='flex gap-2'> 
        <input id='board' name='hsc' type='text' required className='w-[80%] rounded' onChange={handleHscChange} placeholder='Board'/>
        <input id='hsc_grade' name='hsc_grade' type='number' className='w-[20%] rounded' placeholder='75%' onChange={handleHscChange}/>
        </div>
        <input id='school' name='hsc' type='text' required className='w-full rounded' onChange={handleHscChange} placeholder='School'/>
        </div>
        
        
        <div className='flex flex-col gap-2 my-4'>
        <label htmlFor='ssc' className='text-white'>Senior Secondary/ Grade 10</label>
        <div className='flex gap-2'> 
        <input id='board' name='ssc' type='text' required className='w-[80%] rounded' onChange={handleSscChange} placeholder='Board'/>
        <input id='ssc_grade' name='ssc_grade' type='number' className='w-[20%] rounded' placeholder='75%' onChange={handleSscChange}/>
        </div>
        <input id='school' name='ssc' type='text' required className='w-full rounded' onChange={handleSscChange} placeholder='School'/>
        </div>
              
              <div className='w-2 mx-auto my-3'>
              <Button size="2" color='cyan' type='submit'>Submit</Button>
              </div>
    </form>
    </div>
    </Tabs.Content>
        
        {/*Work Ex*/}
        <Tabs.Content value="work">
        <div className="flex justify-center">
          <form
            method="POST"
            className="flex flex-col items-center w-full max-w-lg mt-4"
            id = "work-ex"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-2 w-[80%]">
              <label htmlFor="title" className="text-white">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                required
                className="w-full rounded"
                onChange={handleChange}
              />
            </div>
      
            <div className="flex flex-col gap-2 my-4 w-[80%]">
              <label htmlFor="company_name" className="text-white">Company Name</label>
              <input
                id="company_name"
                name="company_name"
                type="text"
                required
                className="w-full rounded"
                onChange={handleChange}
              />
            </div>
      
            <div className="flex flex-col gap-2 my-4 w-[80%]">
              <label htmlFor="loc_type" className="text-white">Location Type</label>
              <input
                id="loc_type"
                name="loc_type"
                type="text"
                required
                className="w-full rounded"
                onChange={handleChange}
              />
            </div>
      
            <div className="flex flex-col gap-2 my-4 w-[80%]">
              <label htmlFor="description" className="text-white">Description</label>
              <textarea name="description" value={userInfo.work_ex[0].description} onChange={handleChange} className="w-full h-40 border rounded resize-none" placeholder="Enter description" />
            </div>
      
            <div className="flex gap-4 mt-4">
              <Button size="2" color="cyan" type='submit'>Submit</Button>
              <Button size="2" color="teal">Add</Button>
            </div>
          </form>
        </div>
      </Tabs.Content>
        
      </Tabs.Root>
    </div>
  );
}

export default SideBar