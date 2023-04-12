import { google } from '@/public/assets'
import React from 'react'
import {FaPython, FaBriefcase, FaUsers, FaNapster, FaRegSmileBeam} from 'react-icons/fa'
import Image from 'next/image'




const Hero = () => {
  return (
    <div className='m-4 font-extrabold text-black'>

    <div>
        <div className='w-full p-2 text-center bg-white'>
        <h1 className="text-[30px] p-2">Jobs By <span className='text-blue-500'>Category</span></h1>
        
        <p className="text-[20px] p-2">You are Special to us</p>
        </div>
        

        <div className='grid grid-cols-3 lg:grid-cols-6 bg-white'>
        <div className='col-span-1 text-center border shadow-lg p-2'>
        <div className='flex justify-center items-center'><FaPython size={100}/></div>
        <h1>Coding</h1>
        <div className='flex justify-center items-center'>        <button className='mt-5 bg-blue-500 flex rounded-sm py-2 px-10 gap-1 items-baseline'> <FaBriefcase size={10}/> <p className='text-[10px]'>0</p> </button>
        </div>
        </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 md:m-5 '>
        <div className='col-span-1 bg-white shadow-lg'>
        <div className='w-full p-2 text-center'>
        <h1 className="text-[40px] p-2">Jobs By Category</h1>
        <p className="text-[20px] p-2">You are Special to us</p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 p-2'>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        </div>
        </div>


        <div className='col-span-1 bg-white shadow-lg'>
        <div className='w-full p-2 text-center'>
        <h1 className="text-[40px] p-2">Jobs By Category</h1>
        <p className="text-[20px] p-2">You are Special to us</p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 p-2'>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        </div>
        </div>

        </div>


        <div className='grid grid-cols-1'>
        <div className='col-span-1 bg-white shandow-lg'>
        <div className='w-full p-2 text-center'>
        <h1 className="text-[40px] p-2">Jobs By Category</h1>
        <p className="text-[20px] p-2">You are Special to us</p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 p-2'>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        <div className='col-span-1'>Phython</div>
        </div>
        </div>

        <div className='w-full p-2 text-center '>
        <h1 className="text-[40px] p-2">How it Works</h1>
        <p className="text-[20px] p-2">You are Special to us</p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 p-3 bg-white'>

        <div className='col-span-1 text-center place-items-center grid'>
        <div className='rounded-full w-[10em] h-[10em] place-items-center grid p-3 bg-gray-500'> <FaPython size={100} className=''/> </div>
        <div className='w-[80%]'> <h1 className='font-extrabold text-black text-[24px] p-2 '>Register</h1> <p className='text-[16px] p-2'>Create an Account (it's free) It only takes a couple of minutes to get started        </p> </div>
        </div>


        <div className='col-span-1 text-center place-items-center grid'>
        <div className='rounded-full w-[10em] h-[10em] place-items-center grid p-3 bg-gray-500'> <FaPython size={100} className=''/> </div>
        <div className='w-[80%]'> <h1 className='font-extrabold text-black text-[24px] p-2 '>Register</h1> <p className='text-[16px] p-2'>Create an Account (it's free) It only takes a couple of minutes to get started        </p> </div>
        </div>


        <div className='col-span-1 text-center place-items-center grid'>
        <div className='rounded-full w-[10em] h-[10em] place-items-center grid p-3 bg-gray-500'> <FaPython size={100} className=''/> </div>
        <div className='w-[80%]'> <h1 className='font-extrabold text-black text-[24px] p-2 '>Register</h1> <p className='text-[16px] p-2'>Create an Account (it's free) It only takes a couple of minutes to get started        </p> </div>
        </div>


        <div className='col-span-1 text-center place-items-center grid'>
        <div className='rounded-full w-[10em] h-[10em] place-items-center grid p-3 bg-gray-500'> <FaPython size={100} className=''/> </div>
        <div className='w-[80%]'> <h1 className='font-extrabold text-black text-[24px] p-2 '>Register</h1> <p className='text-[16px] p-2'>Create an Account (it's free) It only takes a couple of minutes to get started        </p> </div>
        </div>


        <div className='col-span-1 text-center place-items-center grid'>
        <div className='rounded-full w-[10em] h-[10em] place-items-center grid p-3 bg-gray-500'> <FaPython size={100} className=''/> </div>
        <div className='w-[80%]'> <h1 className='font-extrabold text-black text-[24px] p-2 '>Register</h1> <p className='text-[16px] p-2'>Create an Account (it's free) It only takes a couple of minutes to get started        </p> </div>
        </div>


        <div className='col-span-1 text-center place-items-center grid'>
        <div className='rounded-full w-[10em] h-[10em] place-items-center grid p-3 bg-gray-500'> <FaPython size={100} className=''/> </div>
        <div className='w-[80%]'> <h1 className='font-extrabold text-black text-[24px] p-2 '>Register</h1> <p className='text-[16px] p-2'>Create an Account (it's free) It only takes a couple of minutes to get started        </p> </div>
        </div>




        </div>

        
        </div>



        
    </div>

    <div className='m-10'>
    <div className='w-full p-2 text-center'>
    <h1 className="text-[40px] p-2">Top Companies</h1>
    <p className="text-[20px] p-2">You are Special to us</p>
    </div>

    <div className='grid grid-cols-2 lg:grid-cols-5 '>
    <div className='col-span-1 g-white p-3 grid place-content-center'><Image src={google}/></div>
    <div className='col-span-1 g-white p-3 grid place-content-center'><Image src={google}/></div>
    <div className='col-span-1 g-white p-3 grid place-content-center'><Image src={google}/></div>
    <div className='col-span-1 g-white p-3 grid place-content-center'><Image src={google}/></div>
    <div className='col-span-1 g-white p-3 grid place-content-center'><Image src={google}/></div>
    </div>

    
    </div>
      

    <div className='m-10 '>
    <div className='w-full p-2 text-center'>
    <h1 className="text-[40px] p-2">Top Companies</h1>
    <p className="text-[20px] p-2">You are Special to us</p>
    </div>

    <div className='grid grid-cols-3 gap-2 bg-sky-800 p-4 m-4  '>
    <div className='col-span-1 grid place-content-center grid-cols-12 lg:mx-20 lg:gap-5'>
    <div className='col-span-3 rounded-full w-[2em] h-[2em] grid place-content-center bg-gray-400'> <FaUsers size={20}/> </div>
    <div className='col-span-9'><h1>Total Jobs</h1> <h1 className='text-[30px]'>400</h1></div>
    

    
    </div>
    <div className='col-span-1 grid place-content-center grid-cols-12 lg:mx-20 lg:gap-5'>
    <div className='col-span-3 rounded-full w-[2em] h-[2em] grid place-content-center bg-gray-400'> <FaUsers size={20}/> </div>
    <div className='col-span-9'><h1>Total Jobs</h1> <h1 className='text-[30px]'>400</h1></div>
    

    
    </div>
    <div className='col-span-1 grid place-content-center grid-cols-12 lg:mx-20 lg:gap-5'>
    <div className='col-span-3 rounded-full w-[2em] h-[2em] grid place-content-center bg-gray-400'> <FaUsers size={20}/> </div>
    <div className='col-span-9'><h1>Total Jobs</h1> <h1 className='text-[30px]'>400</h1></div>
    

    
    </div>
   
    </div>


    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-20 lg:py-5 lg:px-20 p-2 text-black'>
    <div className='col-span-1 text-center grid place-content-center bg-white shadow-lg p-3 lg:p-20'>
    <div className='flex justify-center'>    <div className='rounded-full h-20 w-20 bg-gray-500 grid place-content-center'><FaNapster size={40} color='black'/></div>
    </div>
    <div className='flex justify-center'><h1 className='text-[20px] font-extrabold w-[70%]'>We bring the world of options now it is your turn to choose</h1>
    </div>
    <div><p>A society frienly job portal</p>
    </div>
    </div>


    
    <div className='col-span-1 text-center grid place-content-center bg-white shadow-lg p-3 lg:p-20'>
    <div className='flex justify-center'>    <div className='rounded-full h-20 w-20 bg-gray-500 grid place-content-center'><FaNapster size={40} color='black'/></div>
    </div>
    <div className='flex justify-center'><h1 className='text-[20px] font-extrabold w-[70%]'>We bring the world of options now it is your turn to choose</h1>
    </div>
    <div><p>A society frienly job portal</p>
    </div>
    </div>



    </div>
    </div>


    <div className='bg-blue-600 p-5'>
    <h1 className='text-[30px] font-extrabold text-white'>Testimonials</h1>
    <div className='grid grid-cols-1 gap-5  lg:grid-cols-3 text-center p-20'>

    <div className='col-span-1 bg-white rounded-md shadow-lg'>
    <div className='flex justify-center'>    <div className=' mt-[-20px] bg-gray-500 rounded-full w-20 h-20 grid place-content-center'><FaRegSmileBeam size={30}/></div>
    </div>
    <div><h1 className='text-[20px] font-extrabold p-5'>Rihanna</h1></div>
    <div><h1 className='text-[15px]'>Software Developer</h1></div>
    <div className='flex justify-center'><p className='lg:w-[80%] text-[10px] p-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
    quia voluptas sit aspernatur aut odit aut fugit</p></div>
    </div>

    <div className='col-span-1 bg-white rounded-md shadow-lg'>
    <div className='flex justify-center'>    <div className=' mt-[-20px] bg-gray-500 rounded-full w-20 h-20 grid place-content-center'><FaRegSmileBeam size={30}/></div>
    </div>
    <div><h1 className='text-[20px] font-extrabold p-5'>Rihanna</h1></div>
    <div><h1 className='text-[15px]'>Software Developer</h1></div>
    <div className='flex justify-center'><p className='lg:w-[80%] text-[10px] p-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
    quia voluptas sit aspernatur aut odit aut fugit</p></div>
    </div>

    <div className='col-span-1 bg-white rounded-md shadow-lg'>
    <div className='flex justify-center'>    <div className=' mt-[-20px] bg-gray-500 rounded-full w-20 h-20 grid place-content-center'><FaRegSmileBeam size={30}/></div>
    </div>
    <div><h1 className='text-[20px] font-extrabold p-5'>Rihanna</h1></div>
    <div><h1 className='text-[15px]'>Software Developer</h1></div>
    <div className='flex justify-center'><p className='lg:w-[80%] text-[10px] p-5'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem 
    quia voluptas sit aspernatur aut odit aut fugit</p></div>
    </div>




    </div>
    </div>
    </div>
  )
}

export default Hero
