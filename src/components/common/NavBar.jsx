import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center shadow-slate-200 shadow-md'>
      <div className='flex flex-row items-center gap-8'>
        <img src="../../src/assets/IronCladLogo.png" alt="IronCladLogo" className='w-50'/>
        <div className='flex flex-row items-center gap-8'>
          <div>Shop keeper <br/> view</div>
          <div>Business owner <br/> view</div>
        </div>
        
      </div>
      <div className='flex flex-row items-center gap-8'>
        <div>Circle</div>
        <div>
          <p>Jane Doe</p>
          <p>Store owner</p>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar