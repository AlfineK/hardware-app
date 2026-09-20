import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center shadow-slate-200 shadow-md'>
      <div className='flex flex-row items-center gap-8'>
        <img src="../../src/assets/IronCladLogo.png" alt="IronCladLogo" className='w-50'/>
        <div className='flex flex-row items-center gap-8 bg-slate-100 py-1 px-3 rounded-lg'>
          <div className='text-xs font-medium rounded-md text-slate-600 hover:text-slate-900 transition-colors'>Shop keeper <br/> view</div>
          <div className=' py-1 px-3 text-xs font-semibold rounded-lg bg-white  text-orange-500 shadow-sm transition-all'>Business owner <br/> view</div>
        </div>
        
      </div>
      <div className='flex flex-row items-center gap-8 px-4 border-l border-slate-200'>
        <div className='w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-serif border border-orange-200'>JD</div>
        <div className='font-serif text-xs'>
          <p>Jane Doe</p>
          <p className='text-slate-500'>Store owner</p>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar