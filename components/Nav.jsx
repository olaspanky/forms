import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { close, logo, menu } from '../public/assets';
import{ navLinks, navLinks2 } from '../constants';
import Link from 'next/link';
import signup from '@/pages/signup';
import { FaLaravel, FaUserFriends } from 'react-icons/fa';




const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);

  return (
    <div className='bg-white'>
    <nav className=' w-full font-abc font-semibold px-2 flex py-5 justify-around items-center bg-[#FFFFFF]'>

    <Link href="/">      <FaLaravel size={50} color='blue' className='w-[4em] object-contain' />
    </Link>

      <ul className='list-none lg:flex hidden justify-between gap-10'>
          {navLinks.map((nav, index)=> (
            <li key={nav.id} className={`font-poppins font-400 cursor-pointer text-{18px} text-black `}>
              <Link href={nav.id}>
                {nav.title}

              </Link>

            </li>
          ))}
      </ul>

      <div className=' text-white gap-10  lg:flex hidden'>
        
       
        <button className=' text-[18px] p-1 rounded bg-blue-600'>
        <Link href="signup">Job seeker signup</Link>     
        </button>
        <button className=' text-[18px] p-1 rounded bg-red-600'>
        <Link href="login"> login</Link>
        </button>
      </div>

      <div className=' lg:hidden flex flex-1 justify-end items-center '>
            <Image src={toggle ? close : menu} alt="menu" 
            className='w-[28px] h-[28px] object-contain' 
            onClick={()=> setToggle((prev) => !prev)} />

            </div>

            
    </nav>

    <div className={`${toggle ? 'flex' : 'hidden' } 
    p-6 align-center justify-center lg:hidden`}>

    
        <div className='w-full'>
   

    <div className='flex justify-center align-center p-2  '>
    <div className=' flex w-[60%] gap-2'>
        <button className='bg-blue-800 px-5 py-1'><Link href='signup'>Job seeker SignUp</Link></button>
        <button className='bg-blue-300 px-5 py-1'><Link href="login">Login</Link></button>
    
    </div>
        
    </div>

    <div className='text-center bg-blue-300 w-full mt-2'>
        <h1 className='display-block text-black py-1 font-bold'>Login & SignUp</h1>
        </div>


        <div className='flex flex-1 justify-between '>

        <div className='flex flex-col justify-center align-item'>
        <div className='flex justify-center align-center p-4'><FaUserFriends size={50} color='blue'/></div>
        <h2 className='text-black'>Job Seeker Login</h2>
        </div>

        <div className='flex flex-col justify-center align-item'>
        <div className='flex justify-center align-center p-4'><FaUserFriends size={50} color='blue'/></div>
        <h2 className='text-black'>Job Seeker Login</h2>
        </div>

        </div>


        <div className='text-center bg-blue-300 w-full mt-2'>
        <h1 className='display-block text-black py-1 font-bold'>Find Jobs</h1>
        </div>


        <div className='grid grid-cols-3 gap-3 justify-between '>

        <div className='col-span-1 text-center justify-center align-item'>
        <div className='flex justify-center align-center p-4'><FaUserFriends size={50} color='blue'/></div>
        <h2 className='text-black'>Job Seeker Login</h2>
        </div>

        <div className='col-span-1 text-center justify-center align-item'>
        <div className='flex justify-center align-center p-4'><FaUserFriends size={50} color='blue'/></div>
        <h2 className='text-black'>Job Seeker Login</h2>
        </div>


        
        <div className='col-span-1 text-center justify-center align-item'>
        <div className='flex justify-center align-center p-4'><FaUserFriends size={50} color='blue'/></div>
        <h2 className='text-black'>Job Seeker Login</h2>
        </div>

        <div className='col-span-1 text-center justify-center align-item'>
        <div className='flex justify-center align-center p-4'><FaUserFriends size={50} color='blue'/></div>
        <h2 className='text-black'>Job Seeker Login</h2>
        </div>


        <div className='col-span-1 text-center justify-center align-item'>
        <div className='flex justify-center align-center p-4'>
        <FaUserFriends size={50} color='blue'/></div>
        <h2 className='text-black'>Job Seeker Login</h2>
        </div>

        <div className='col-span-1 text-center justify-center align-item'>
        <div className='flex justify-center align-center p-4'><FaUserFriends size={50} color='blue'/></div>
        <h2 className='text-black'>Job Seeker Login</h2>
        </div>



        </div>

        <div className=' flex items-center justify-center bg-blue-300 w-full mt-2'>
        <div className='flex gap-2'><button onClick={()=> setToggle2((prev) => !prev)}> <Image src={menu}/> </button> <h2 className='display-block text-black text-xl font-bold'>Main Menu</h2></div>
        </div>

        <div  className={`${toggle2 ? 'flex' : 'hidden' } w-full`} >
        
        <div className='w-full border border-b-black'>

        {navLinks2.map((nav2, index)=> (
          <div key={nav2.id} className={`p-2 font-poppins w-full font-400 cursor-pointer text-{18px} text-black border border--black `}>
            <a href={'#${nav.id}'}>
              {nav2.title}

            </a>

          </div>
        ))}
        
        </div>


        </div>

        <div className=' flex items-center justify-center bg-blue-300 w-full mt-2'>
        <div className='flex gap-2'><h2 className='display-block text-black text-xl font-bold'>Social Links</h2></div>
        </div>


        </div>

        

    </div>
    </div>
  )
}

export default Navbar
