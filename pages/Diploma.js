import React from 'react'
import FormWrapper from './FormWrapper'


const Diploma = ({diploma,advanceddiploma,graduatediploma,pgdiploma,
    other,
diplomauni,
diplomaqualification,
diplomaduration,
diplomalevel,
tetiaryuni,
tetiaryqualification,
tetiaryduration,
tetiarylevel,
updateField,
}) => {

  return (
    <div className='text-lora p-3 lg:p-8 bg-gradient-to-r from-rose-100 to-teal-100 object-contain overflow-hidden'>


    <h1>DIPLOMA</h1>


    <div className='lg:flex gap-5'>

    <div className='flex gap-2'>
    <label>Diploma</label>
    <input autoFocus type="checkbox" value={diploma}
    onChange={e => updateField({diploma:e.target.value})}/>
    </div>
   
    <div className='flex gap-2'>
    <label>Diploma</label>
    <input autoFocus type="checkbox" value={diploma}
    onChange={e => updateField({diploma:e.target.value})}/>
    </div>
   
    <div className='flex gap-2'>
    <label>Advanced/Graduate Diploma</label>
    <input autoFocus type="checkbox" value={graduatediploma}
    onChange={e => updateField({graduatediploma:e.target.value})}/>
    </div>
   
    <div className='flex gap-2'>
    <label>Advanced Diploma</label>
    <input autoFocus type="checkbox" value={advanceddiploma}
    onChange={e => updateField({advanceddiploma:e.target.value})}/>
    </div>
   
    <div className='flex gap-2'>
    <label>Post Graduate Diploma</label>
    <input className='rounded-md border border-none outline-none' autoFocus type="checkbox" value={pgdiploma}
    onChange={e => updateField({pgdiploma:e.target.value})}/>
    </div>
   
    <div className='flex gap-2'>
    <label>Post Graduate Diploma</label>
    <input className='rounded-md border border-none outline-none' autoFocus type="checkbox" value={pgdiploma}
    onChange={e => updateField({pgdiploma:e.target.value})}/>
    </div>
   
    <div className='flex gap-2'>
    <label>Others</label>
    <input className='rounded-md border border-none outline-none' autoFocus type="checkbox" value={other}
    onChange={e => updateField({other:e.target.value})}/>
    </div>
   
    </div>
   

    <div className='text-lora lg:p-8 bg-gradient-to-r from-rose-100 to-teal-100 object-contain overflow-hidden'>

    <div className='text-center'><h1 className='font-bold'>DIPLOMA</h1></div>
   

    <div className="p-3" >
      <div className="px-12 pb-10">

         <div className="w-full mb-2">
         

            <div className="flex justify-center">
               <input type='text' placeholder="NAME OF UNIVERSITY"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={diplomauni}
                  onChange={e => updateField({diplomauni:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="QUALIFICATION"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={diplomaqualification}
                  onChange={e => updateField({diplomaqualification:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="DURATION"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={diplomaduration}
                  onChange={e => updateField({diplomaduration:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="LEVEL"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={diplomalevel}
                  onChange={e => updateField({diplomalevel:e.target.value})} />
            </div>
         </div>
      </div>
      
   </div>


    </div>
    

    <br/>
    

    <div className='text-lora lg:p-8 bg-gradient-to-r from-rose-100 to-teal-100 object-contain overflow-hidden'>

    <div className='text-center'><h1 className='font-bold'>TETIARY QUALIFICATIONS</h1></div>
   

    <div className="p-3" >
      <div className="px-12 pb-10">

         <div className="w-full mb-2">
         

            <div className="flex justify-center">
               <input type='text' placeholder="TETIARY UNIVERSITY"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={tetiaryuni}
                  onChange={e => updateField({tetiaryuni:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="QUALIFICATION"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={tetiaryqualification}
                  onChange={e => updateField({tetiaryqualification:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="DURATION"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={tetiaryduration}
                  onChange={e => updateField({tetiaryduration:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="LEVEL"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={tetiarylevel}
                  onChange={e => updateField({tetiarylevel:e.target.value})} />
            </div>
         </div>


         
         

         
        

      </div>
      
   </div>


    </div>
    </div>
   


   
    
  )
}

export default Diploma
