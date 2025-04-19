import React from 'react'
import linkedinLogo from '../assets/linkedin_logo.png'

function Preview({userInfo}) {
  /*
  1. General information
  2. Educational Experience
  3. Practical Experience
  */
  console.log(userInfo);
  return (
    <div className='col-span-3'>
      <div className='flex flex-col justify-center items-center mt-6'> 
        <h2 className='uppercase text-2xl'>{userInfo.firstName + ' ' + userInfo.lastName}</h2>
        <div className='flex justify-evenly items-center mx-auto text-md font-thin text-blue-500'> 
        <a href={ userInfo.email }> { userInfo.email } < /a> | <a href={userInfo.phone}>{userInfo.phone}</a > | <a href={ userInfo.phone }> <img src={ linkedinLogo } height = '30px' width = '30px' /> </a>
        </div>
          </div>
          
          <div className='w-[80%] flex flex-col mx-auto mt-2'>
          <h3 className='text-lg font-medium border-b border-gray-400 w-full'>Summary</h3>
          {userInfo.summary}
          </div>


    </div>
  );
}

export default Preview