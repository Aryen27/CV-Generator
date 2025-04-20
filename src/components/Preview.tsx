import React from 'react'
import linkedinLogo from '../assets/linkedin_logo.png'

function Preview({userInfo}) {

  return (
    <div className='col-span-3'>
      <div className='flex flex-col justify-center items-center mt-6'> 
        <h2 className='uppercase text-2xl'>{userInfo.firstName + ' ' + userInfo.lastName}</h2>
        <div className='flex justify-evenly items-center mx-auto text-md font-thin text-blue-500'> 
        <a href={ userInfo.email }> { userInfo.email } < /a> | <a href={userInfo.phone}>{userInfo.phone}</a > | <a href={ userInfo.phone }> <img src={ linkedinLogo } height = '30px' width = '30px' /> </a>
        </div>
        </div>
          
          <div className='w-[80%] flex flex-col mx-auto my-3'>
          <h3 className='text-lg font-medium border-b border-gray-400 w-full uppercase'>Summary</h3>
          {userInfo.summary}
          </div>


          <div className='w-[80%] flex flex-col mx-auto my-3'>
          <h3 className='text-lg font-medium border-b border-gray-400 w-full uppercase'>Education</h3>
          <div className = 'flex justify-between my-1' >
          <p className='font-normal'>
          { `${userInfo.graduation.degree} | ${userInfo.graduation.university}` }
          </p>
          {userInfo.graduation.grad_grade !== 0 && userInfo.graduation.grad_grade !== undefined && (
            <p>{userInfo.graduation.grad_grade}%</p>
          )}
          </div>
          <div className='flex justify-between my-1'>
            <p>
          { `HSC | ${userInfo.hsc.school}` }
          </p>
          {userInfo.hsc.hsc_grade !== 0 && userInfo.hsc.hsc_grade !== undefined && (
            <p>{userInfo.hsc.hsc_grade}%</p>
          )}
          </div>
          <div className='flex justify-between my-1'>
            <p>
            { `SSC | ${userInfo.ssc.school}` }
            </p>
            {userInfo.ssc.ssc_grade !== 0 && userInfo.ssc.ssc_grade !== undefined && (
            <p>{`${userInfo.ssc.ssc_grade}%`}</p>
          )}
          </div>
          </div>

            <div className='w-[80%] flex justify-center mx-auto'>
            <h3 className='text-lg font-medium border-b border-gray-400 w-full uppercase'>Work Experience</h3>
            <div>
            
            </div>
            </div>
            
    </div>
  );
}

export default Preview