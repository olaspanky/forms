import React from 'react'
import FormWrapper from './FormWrapper'


const Accountform = ({firstname, lastname, maidenname, title, status, address, phone, email, 
  dob, pob, nationality, nin, skype, drivinglicense, securityquestion, age, updateField}) => {

  return (
    <div className='text-lora lg:p-8 bg-gradient-to-r from-rose-100 to-teal-100 object-contain overflow-hidden'>

    <div className='text-center'><h1 className='font-bold'>PERSONAL DETAILS</h1></div>
   

    <div className="p-3" >
      <div className="px-12 pb-10">

         <div className="w-full mb-2">
         

            <div className="flex justify-center">
               <input type='text' placeholder="FirstName"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={firstname}
                  onChange={e => updateField({firstname:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="lastname"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={lastname}
                  onChange={e => updateField({lastname:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Maiden name"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={maidenname}
                  onChange={e => updateField({maidenname:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="title"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={title}
                  onChange={e => updateField({title:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="status"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={status}
                  onChange={e => updateField({status:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="address"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={address}
                  onChange={e => updateField({address:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="phone"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={phone}
                  onChange={e => updateField({phone:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="email"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={email}
                  onChange={e => updateField({email:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Date of Birth"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={dob}
                  onChange={e => updateField({dob:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Place of Birth"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={pob}
                  onChange={e => updateField({pob:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Nationality"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={nationality}
                  onChange={e => updateField({nationality:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="National Identification Number"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={nin}
                  onChange={e => updateField({nin:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Skype"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={skype}
                  onChange={e => updateField({skype:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Driving Liscence"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={drivinglicense}
                  onChange={e => updateField({drivinglicense:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Security Question"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={securityquestion}
                  onChange={e => updateField({securityquestion:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Driving Liscence"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={drivinglicense}
                  onChange={e => updateField({drivinglicense:e.target.value})} />
            </div>
         </div>


         
         <div className="w-full mb-2">
            <div className="flex justify-center">
               <input type='text' placeholder="Age"
                  className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                  autoFocus required value={age}
                  onChange={e => updateField({age:e.target.value})} />
            </div>
         </div>


         
        

      </div>
      
   </div>


    </div>
  )
}

export default Accountform
