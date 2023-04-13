import React from 'react'
import FormWrapper from './FormWrapper'


const Secondaryedu = ({updateField
,secondaryexambody,secondarycertificate,secondaryeducountry,
secondaryeducationfailed,secondaryeducationpassed,secondaryeducationyear,
technicaluniversity,technicalqualification,technicalduration,technicallevel}) => {

  return (
    <div className='text-lora lg:p-8 bg-gradient-to-r from-rose-100 to-teal-100 object-contain overflow-hidden'>

    <div className='text-center'><h1 className='font-bold'>OTHER EDUCATIONAL DETAILS</h1></div>


    <div className="p-3" >
    <div className="px-12 pb-10">

       <div className="w-full mb-2">
       

          <div className="flex justify-center">
             <input type='text' placeholder="CERTIFICATE"
                className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                autoFocus required value={secondarycertificate}
                onChange={e => updateField({secondarycertificate:e.target.value})} />
          </div>
       </div>


       
       <div className="w-full mb-2">
          <div className="flex justify-center">
             <input type='text' placeholder="EXAMINING BODY"
                className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                autoFocus required value={secondaryexambody}
                onChange={e => updateField({secondaryexambody:e.target.value})} />
          </div>
       </div>


       
       <div className="w-full mb-2">
          <div className="flex justify-center">
             <input type='text' placeholder="COUNTRY"
                className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                autoFocus required value={secondaryeducountry}
                onChange={e => updateField({secondaryeducountry:e.target.value})} />
          </div>
       </div>


       
       <div className="w-full mb-2">
          <div className="flex justify-center">
             <input type='text' placeholder="YEAR"
                className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                autoFocus required value={secondaryeducationyear}
                onChange={e => updateField({secondaryeducationyear:e.target.value})} />
          </div>
       </div>
    </div>
    
 </div>

    </div>
  )
}

export default Secondaryedu
