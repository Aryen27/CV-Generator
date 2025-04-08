import { useState } from 'react'
import { Button } from "@/components/ui/button"


function SideBar() {


  return (
    <div className='bg-slate-700 col-span-2 text-white'>
      <h1 className='text-center mt-[2.5rem] uppercase text-2xl'> Resume Generator</h1>
      {/*PERSONAL DETAILS*/}
      <div className='py-[2rem]'>
            <h3 className='text-center text-lg'>Personal Details</h3>
        <form method='POST' id='personal'>
          <section>
          <div className='flex flex-col w-4/5 m-auto gap-3'>
          <label htmlFor='first-name'>First Name</label>
          <input id='first-name' name='first-name' type='text' required />

          <label htmlFor='last-name'>Last Name</label>
          <input id='last-name' name='last-name' type='text' required />

          <label htmlFor='email'>Email ID</label>
          <input id='email' name='email' type='email' required />

          <label htmlFor='phone'>Phone</label>
          <input id='phone' name='phone' type='text' minLength={9} required />
            
          <label htmlFor='linkedin-id'>Linkedin</label>
          <input id='linkedin-id' name='linkedin-id' type='url' pattern="https://.*" />
              
          <label htmlFor='summary'>Summary</label>
          <input id='summary' name='summary' type='text'/>

          </div>
          </section>
        <Button className='flex mx-auto my-4'>Button</Button>
        </form>
      </div>

    {/*EDUCATION*/}
    <div>
        <form method='POST' className='flex flex-col justify-center items-center' id='edu'>
        <h3 className='text-center text-lg'>Education Details</h3>
      <div className='flex flex-col gap-2'>
            <label htmlFor='graduation'>Graduation</label>
            <div className='flex gap-2'> 
        <input id='graduation' name='graduation' type='text' required className='w-[70%]' />
        <input id='graduation-grade' name='graduation-grade' type='number' required className='w-[20%]' placeholder='Eg 75%'/>
            </div>
      </div>
          
      <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='hsc'>Higher Secondary/ Grade 12</label>
          <div className='flex gap-2'> 
        <input id='hsc' name='hsc' type='text' required className='w-[70%]' />
        <input id='hsc-grade' name='hsc-grade' type='number' className='w-[20%]' placeholder='Eg 75%'/>
           </div>
          </div>
          

          <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='ssc'>Senior Secondary/ Grade 10</label>
          <div className='flex gap-2'> 
        <input id='ssc' name='ssc' type='text' required className='w-[70%]' />
        <input id='ssc-grade' name='ssc-grade' type='number' className='w-[20%]' placeholder='Eg 75%'/>
           </div>
      </div>
    </form>
    </div>

      {/*Work Ex*/}

      <div>
        <form method='POST' className='flex flex-col justify-center items-center' id='work-ex'>
        <h3 className='text-center text-lg'>Work Experience</h3>
      <div className='flex flex-col gap-2'>
            <label htmlFor='title'>Title</label>
            <div className='flex gap-2'> 
            <input id='title' name='title' type='text' required className='w-[70%]' />
            </div>
      </div>
          
      <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='company'>Company Name</label>
        <input id='company' name='company' type='text' required className='w-[70%]' />
          <div className='flex gap-2'> 
           </div>
          </div>
          

          <div className='flex flex-col gap-2 my-4'>
      <label htmlFor='loc-type'>Location Type</label>
      <input id='loc-type' name='loc-type' type='text' required className='w-[70%]' />

          <div className='flex gap-2'> 
            </div>
      </div>
      
      <label htmlFor='description'>Description</label>
      <input id='description' name='description' type='text' required className='w-[70%]' />
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
      <ResumePreview className=''/>
    </div>
  )
}

export default App
