import React from 'react'
import { useState } from 'react'

const login = () => {

  const [click, setClick] = useState(false)
  return (
    <div className='lg:px-72 p-10 lg:py-24 h-screen grid place-content-center font-lora bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-blue-500'>
    <div className={` ${click ? 'hidden' : 'flex' }  bg-white opacity-80 m-3 grid place-content-center p-2 text-center rounded-lg `}>
    <div className=' py-10'>
        <h1 className='text-[40px] font-bold'>New Job seekers form</h1>
       </div>

       <div>
       <form>
        <h1>New Job Seeker</h1>
        <div className='py-10'>
        <input 
        type="text"
        className='bg-white rounded lg:w-96'
        id="exampleFormControlInput1"
        placeholder="Username" 
        ></input>
        </div>

        
        <div className='py-10'>
        <input 
        type="text"
        className='bg-white rounded lg:w-96'
        id="exampleFormControlInput1"
        placeholder="Password" 
        ></input>
        </div>


        <button className='py-2 px-4 text-blue-900 bg-white rounded shadow-lg'> Sign In</button>
        

        <div className='py-10'></div>

     
       </form>
               <button  onClick={()=> setClick((prev) => !prev)} className='py-2 px-4 text-blue-900 bg-white rounded shadow-lg'> Existing user </button>

       </div>
      </div>



      <div className={` ${click ? 'flex' : 'hidden' }  bg-white opacity-80 m-3 grid place-content-center p-2 text-center rounded-lg `}>
      <div className=' py-10'>
       <h1 className='text-[40px] font-bold'>Existing Employees</h1>
      </div>

      <div>
      <form>
       <h1>Welcome back</h1>
       <div className='py-10'>
       <input 
       type="text"
       className='bg-white rounded lg:w-96'
       id="exampleFormControlInput1"
       placeholder="Username" 
       ></input>
       </div>

       
       <div className='py-10'>
       <input 
       type="text"
       className='bg-white rounded lg:w-96'
       id="exampleFormControlInput1"
       placeholder="Password" 
       ></input>
       </div>


       <button className='py-2 px-4 text-blue-900 bg-white rounded shadow-lg'> Sign In</button>
       

       <div className='py-10'></div>

    
      </form>
      <button  onClick={()=> setClick((prev) => !prev)} className='py-2 px-4 text-blue-900 bg-white rounded shadow-lg'> New user </button>

      </div>
     </div>

    </div>
  )
}

export default login
