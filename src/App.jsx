import { useState } from 'react'


function SideBar() {
  

  return (
    <div className='bg-slate-700 col-span-2 text-white'>
      <h1 className='text-center mt-[2.5rem] uppercase text-2xl'> Resume Generator</h1>
      <div className='py-[2rem]'>
        <form>
          <section>
            <h3 className='text-center text-lg'>Personal Details</h3>
          <div className='flex flex-col w-4/5 m-auto gap-3'>
          <label for='first-name'>First Name</label>
          <input id='first-name' type='text' required />

          <label for='last-name'>Last Name</label>
          <input id='last-name' type='text' required />

          <label for='email'>Email ID</label>
          <input id='email' type='email' required />

          <label for='phone'>Phone</label>
          <input id='phone' type='text' minLength={9} required />
            
          <label for='linkedin-id'>Linkedin</label>
          <input id='linkedin-id' type='url' pattern="https://.*"/>
          </div>
          </section>
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
