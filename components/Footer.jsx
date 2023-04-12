import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-gray-800'>
      <footer>
        <div className=' lg:mx-20 font-lora grid grid-cols-1 lg:grid-cols-6 lg:gap-10'>
        <div className='col-span-1  border border-t-2 lg:border-0'>
        <div><h1 className="text-[30px] font-bold p-2">By Location</h1></div>
        <div><ul>
        <li>Cyprus</li>
        <li>Illinois</li>
        <li>Germany</li>
        <li>Spain</li>
        <li>Japan</li>
        </ul></div>
        </div>
        <div className='col-span-1  border border-t-2 lg:border-0'>
        <div><h1 className="text-[30px] font-bold p-2">By Skills</h1></div>
        <div><ul>
        <li>Phython</li>
        <li>Javascript</li>
        <li>GraphQl</li>
        <li>C++</li>
        <li>c#</li>
        </ul></div>
        </div>
        <div className='col-span-1  border border-t-2 lg:border-0'>
        <div><h1 className="text-[30px] font-bold p-2">By Designation</h1></div>
        <div><ul>
        <li>Senior Developer</li>
        <li>Junior Developer</li>
        <li>Manager</li>
        <li>Product Manger</li>
        <li>Designer</li>
        </ul></div>
        </div>
        <div className='col-span-1  border border-t-2 lg:border-0'>
        <div><h1 className="text-[30px] font-bold p-2">By Company</h1></div>
        <div><ul>
        <li>Infosys</li>
        <li>Amazon</li>
        <li>Twitter</li>
        <li>facebook</li>
        <li>Alibaba</li>
        </ul></div>
        </div>
        <div className='col-span-1  border border-t-2 lg:border-0'>
        <div><h1 className="text-[30px] font-bold p-2">By Category</h1></div>
        <div><ul>
        <li>software</li>
        <li>Hardware</li>
        </ul></div></div>
        <div className='col-span-1  border border-t-2 lg:border-0'>
        <div><h1 className="text-[30px] font-bold p-2">Quuick Links </h1></div>
        <div><ul>
        <li>Phython</li>
        <li>Javascript</li>
        <li>GraphQl</li>
        <li>C++</li>
        <li>c#</li>
        </ul></div>
        </div>
        </div>

        <div></div>
      </footer>
    </div>
  )
}

export default Footer
