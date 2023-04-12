import React, { useEffect, useState } from 'react'
import {FaAngleDown, FaSistrix} from 'react-icons/fa'


const Hero = () => {

    const [countries, setCountries] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [selected, setSelected] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(()=> {
        fetch('https://restcountries.com/v2/all?fields=name')
        .then(res => res.json())
        .then(data => {
            setCountries(data)
        });
    }, [])


  return (

    <div className='bg-blue-700 text-white'>

    <div className='text-center m-3 '>
    <h1 className='text-[2em] font-bold p-2'>Find The Best Job Around You</h1>
    <p className='text-20 p-2'>
    It is a long established fact that a reader will be distracted by the readable.</p>
    </div>

    <div className=' flex justify-center align-center p-2'>

    
      <div className='flex justify-center items-center w-full'>

     
 
        <div className='md:flex-row flex flex-col  gap-1'>
            <div className='w-72 font-medium text-black'>
            <div onClick={()=> setOpen(!open)}
            className= {`bg-white w-full p-4 flex items-center text-black justify-between rounded-sm ${!selected && "text-gray-700"}`} >
            {selected ? selected?.length > 25 ? selected?.substring(0,25) + "..." : selected : "Select Country"}  <FaAngleDown size={20} className= {`${open && "rotate-180"} `}/>  </div>

            <ul className= {`bg-white mt-2 overflow-y-auto px-2  ${ open ? 'max-h-60' : 'max-h-0' }`} >

            <div className='flex justify-center align-center px-2 sticky top-0 bg-white'>
            <FaSistrix size={25} className='text-gray-700 my-2'/>
            <input 
            onChange={(e)=>setInputValue(e.target.value.toLowerCase())} 
            type='text' placeholder='enter country' 
            value={inputValue}
            className='placeholder:text-gray-700 p-2 border border-none'/>
            </div>
            

            {
                countries?.map(country => (

                    <li key={country?.name} 
                    className= {`p-2 text-sm hover:bg-sky-600 hover:text-red-400
                    ${country?.name?.toLowerCase() === selected?.toLowerCase() && 'bg-sky-600 text-white'}
                    ${country?.name?.toLowerCase().startsWith(inputValue) ? 
                      "block" : 
                      "hidden"
                    }`}
                    onClick={()=> {
                      if( country?.name?.toLowerCase() !== selected.toLowerCase() ){
                        setSelected(country?.name)
                        setOpen(false)
                        setInputValue("")
                      }
                    }}
                    >
                    {country?.name}
                    </li>

                ))
            }
               
            </ul>

            </div>





            





            <div className=''>
            <div className='w-72 font-medium text-black'>
            <div             onClick={()=> setOpen(!open)}
            className= {`bg-white w-full p-4 flex items-center text-black justify-between rounded-sm ${!selected && "text-gray-700"}`} >
            {selected ? selected?.length > 25 ? selected?.substring(0,25) + "..." : selected : "Select Country"}  <FaAngleDown size={20} className= {`${open && "rotate-180"} `}/>  </div>

            <ul className= {`bg-white mt-2 overflow-y-auto px-2  ${ open ? 'max-h-60' : 'max-h-0' }`} >

            <div className='flex justify-center align-center px-2 sticky top-0 bg-white'>
            <FaSistrix size={25} className='text-gray-700 my-2'/>
            <input 
            onChange={(e)=>setInputValue(e.target.value.toLowerCase())} 
            type='text' placeholder='enter country' 
            value={inputValue}
            className='placeholder:text-gray-700 p-2 border border-none'/>
            </div>
            

            {
                countries?.map(country => (

                    <li key={country?.name} 
                    className= {`p-2 text-sm hover:bg-sky-600 hover:text-red-400
                    ${country?.name?.toLowerCase() === selected?.toLowerCase() && 'bg-sky-600 text-white'}
                    ${country?.name?.toLowerCase().startsWith(inputValue) ? 
                      "block" : 
                      "hidden"
                    }`}
                    onClick={()=> {
                      if( country?.name?.toLowerCase() !== selected.toLowerCase() ){
                        setSelected(country?.name)
                        setOpen(false)
                        setInputValue("")
                      }
                    }}
                    >
                    {country?.name}
                    </li>

                ))
            }
               
            </ul>

            </div>





            

        </div>







        </div>

      </div>
    </div>
    </div>
  )
}

export default Hero
