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
    <FormWrapper title="OTHER SECONDARY EDUCATION">

    <h1>DIPLOMA</h1>


    <div className='flex gap-5'>
    <div>
    <label>Diploma</label>
    <input autoFocus type="checkbox" value={diploma}
    onChange={e => updateField({diploma:e.target.value})}/>
    </div>
   
    <div>
    <label>Diploma</label>
    <input autoFocus type="checkbox" value={diploma}
    onChange={e => updateField({diploma:e.target.value})}/>
    </div>
   
    <div>
    <label>Advanced/Graduate Diploma</label>
    <input autoFocus type="checkbox" value={graduatediploma}
    onChange={e => updateField({graduatediploma:e.target.value})}/>
    </div>
   
    <div>
    <label>Advanced Diploma</label>
    <input autoFocus type="checkbox" value={advanceddiploma}
    onChange={e => updateField({advanceddiploma:e.target.value})}/>
    </div>
   
    <div>
    <label>Post Graduate Diploma</label>
    <input autoFocus type="checkbox" value={pgdiploma}
    onChange={e => updateField({pgdiploma:e.target.value})}/>
    </div>
   
    <div>
    <label>Post Graduate Diploma</label>
    <input autoFocus type="checkbox" value={pgdiploma}
    onChange={e => updateField({pgdiploma:e.target.value})}/>
    </div>
   
    <div>
    <label>Others</label>
    <input autoFocus type="checkbox" value={other}
    onChange={e => updateField({other:e.target.value})}/>
    </div>
   
    </div>
    <label>University/ Awarding body</label>
    <input autoFocus required type="text" value={diplomauni}
    onChange={e => updateField({diplomauni:e.target.value})}/>
    <label>Qualification Obatained</label>
    <input autoFocus required type="text" value={diplomaqualification}
    onChange={e => updateField({diplomaqualification:e.target.value})}/>
    <label>Duration</label>
    <input autoFocus required type="date" value={diplomaduration}
    onChange={e => updateField({diplomaduration:e.target.value})}/>
    <label>Class/Level/Duration</label>
    <input autoFocus required type="text" value={diplomalevel}
    onChange={e => updateField({diplomalevel:e.target.value})}/>
   

    <br/>
    <h1>TETIARY QUALIFICATIONS</h1>

    <label>University/ Awarding Body</label>
    <input autoFocus required type="text" value={tetiaryuni}
    onChange={e => updateField({tetiaryuni:e.target.value})}/>
    <label>Qualification Obtained</label>
    <input autoFocus required type="text" value={tetiaryqualification}
    onChange={e => updateField({tetiaryqualification:e.target.value})}/>
    <label>Duration</label>
    <input autoFocus required type="date" value={tetiaryduration}
    onChange={e => updateField({tetiaryduration:e.target.value})}/>
    <label>CLASS/LEVEL</label>
    <input autoFocus required type="date" value={tetiarylevel}
    onChange={e => updateField({tetiarylevel:e.target.value})}/>
    
   


   
    </FormWrapper>
  )
}

export default Diploma