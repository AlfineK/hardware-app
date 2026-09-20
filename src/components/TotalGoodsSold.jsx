import React from 'react'
import UseFetch from '../hooks/UseFetch'

const Totalgoodssold = () => {
  const soldItems = UseFetch("soldItems")
  let totalSold = 0;
  for (const item of soldItems){
    const sold = item.quantity * item.price
    totalSold = totalSold + sold
  }
  
  return (
    <div className='flex flex-col border-slate-200 border min-w-90 px-4 py-8 rounded-lg mt-6  bg-white'>
      <div className='flex flex-row items-center justify-between'>
        <p className='text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono'>Goods sold</p>
        <img src="../src/assets/goodsSoldIcon.png" alt="" className='w-7' />
      </div>
      <p className='mt-3 text-2xl font-bold font-mono text-slate-900 tracking-tight'>Ksh. {totalSold}</p>
    </div>
  )
}

export default Totalgoodssold