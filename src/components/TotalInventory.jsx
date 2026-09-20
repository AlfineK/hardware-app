import UseFetch from '../hooks/UseFetch'

const TotalInventory = () => {
  const items = UseFetch("Items");
  let totalInvetoryValuation = 0;
  for (const item of items){
    const prod = item.Quantity * item.SellingPrice;
    totalInvetoryValuation +=prod;
  }

  return (
    <div className='flex flex-col border-slate-200 border min-w-90 px-4 py-8 rounded-lg mt-6 bg-white'>
      <div className='flex flex-row items-center justify-between'>
        <p className='text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono'>Total Inventory Valuation</p>
        <img src="./src/assets/inventoryLogo.png" alt="Inventory Logo" className='w-7'/>
      </div>
      <div>
        <p className='mt-3 text-2xl font-bold font-mono text-slate-900 tracking-tight'>Ksh. {totalInvetoryValuation}</p>
      </div>
      
    </div>
  )
}

export default TotalInventory