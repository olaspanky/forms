import React from 'react'
import FormWrapper from './FormWrapper'


const Education = ({ primaryeducationyear, prevocationalyear, primaryeducationpassed, primaryeducationfailed, prevocationalpassed, 
    prevocationalfailed,schoolcert, highschoolcert, formone, formtwo, formthree, formfour, secondareducationyear,
    subject1, subject2, subject3, subject4, subject5, subject6, subject7, subject8, subject9, subject10, grade1, grade2, grade3,
    grade4, grade5, grade6, grade7, grade8, grade9, grade10, updateField, technicalqualification
}) => {
  return (
    <div className='text-lora p-8 bg-gradient-to-r from-rose-100 to-teal-100'>
    <FormWrapper title="Education">
    <div className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
    <div className='col-span-6'>
    <div><h1>CPE</h1></div>
    <div className='flex gap-10'>
    <label> Year</label>
    <input autoFocus  type="date" value={prevocationalyear} onChange={e => updateField({prevocationalyear:e.target.value})}/>
    </div>
    <div className='grid grid-cols-2'>


    <div className='col-span-1 '>
    <label className=''>Passed</label>
    <input autoFocus type='checkbox' value={primaryeducationpassed} onChange={e => updateField({primaryeducationpassed:e.target.value})} ></input>
    </div>
    <div className='col-span-1'>
    <label>Failed</label>
    <input autoFocus type='checkbox' value={primaryeducationfailed} onChange={e => updateField({primaryeducationfailed:e.target.value})} ></input>
    </div>
    </div>
    </div>



    <div className='col-span-6'>
    <div><h1>Pre Vocational</h1></div>
    <label> Year</label>
    <input className='rounded-md border border-none outline-none' autoFocus  type="date" value={prevocationalyear} onChange={e => updateField({prevocationalyear:e.target.value})}/>
    <div className='grid grid-cols-2'>
    <div className='col-span-1'>
    <label>Passed</label>
    <input className='rounded-md border border-none outline-none' autoFocus type='checkbox' value={prevocationalpassed} onChange={e => updateField({prevocationalpassed:e.target.value})} ></input>
    </div>
    <div className='col-span-1'>
    <label>Failed</label>
    <input className='rounded-md border border-none outline-none' autoFocus type='checkbox' value={prevocationalfailed} onChange={e => updateField({prevocationalfailed:e.target.value})} ></input>
    </div>
    </div>
    </div>
    </div>
    </FormWrapper>

    <FormWrapper>
    <div className='text-center'><h1>Secondary Education</h1></div>   
    <div className='flex'>
    <label>form 1</label>
    <input className='rounded-md border border-none outline-none' type='checkbox' value={formone}  onChange={e => updateField({formone:e.target.value})} />
    <label>form 2</label>
      <input className='rounded-md border border-none outline-none' type='checkbox' value={formtwo}  onChange={e => updateField({formtwo:e.target.value})} />
      <label>form 3</label>
      <input className='rounded-md border border-none outline-none' type='checkbox' value={formthree}  onChange={e => updateField({formthree:e.target.value})} />
      <label>form 4</label>
      <input className='rounded-md border border-none outline-none' type='checkbox' value={formfour}  onChange={e => updateField({formfour:e.target.value})} />
    </div> 
    </FormWrapper>

    
    <div className='grid grid-cols-1 lg:grid-cols-2'>
    <div className='w-full col-span-1 '>
    <div className='  '>
        {/* subject */}
<h1>Subjects</h1>
    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    

    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    

    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    

    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    

    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    

    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    

    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    

    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    

    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    

    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    <div>
    <label>Grade</label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>    </div>
    </div>
    


    </div>
   
  </div>

    {/**s ubjects 2  */}
    <div className=' w-full col-span-1 '>
    <div className='  '>
    <div className='flex gap-10 p-3'>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[90%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>   </div>
    <div>
    <label></label>
    <input  className='rounded-md border border-none outline-none w-[30%]' autoFocus required type="text" value={technicalqualification}
    onChange={e => updateField({technicalqualification:e.target.value})}/>     </div>
    
    </div>
    </div>
   
  </div>




  </div>
    

  
  

    </div>
  )
}

export default Education
