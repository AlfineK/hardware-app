import GoodsSold from './GoodsSold'
import UseFetch from '../hooks/UseFetch'

const GoodsSoldList = () => {
  const soldItems = UseFetch("soldItems");
  const thStyle = "py-3 px-3 text-right font-semibold";

  return (
    <div  className='flex flex-col bg-white border border-slate-200 w-140 rounded-lg mt-6 '>
      <div className='px-5 py-4 border-b border-slate-200'>
        <h2  className='text-sm font-semibold text-slate-900'>Goods Sold &amp; Inventory Performance</h2>
        <p className="text-[11px] text-slate-500 font-mono">Current sales velocity &amp; floor availability</p>
      </div>
      <table>
        <thead>
          <tr className="bg-slate-50 text-slate-600 font-mono uppercase tracking-wider text-[11px] border-b border-slate-200">
            <th className={thStyle}>Item Name</th>
            <th className={thStyle}>Units sold</th>
            <th className={thStyle}>sell price</th>
            <th className={thStyle}>Total rev</th>
            <th className={thStyle}>Remaining stock</th>
          </tr>
        </thead>
        {
          soldItems.map(soldItem => {
            return <GoodsSold soldItem={soldItem}/>
          })
        }
        
      </table>
    </div>
  )
}

export default GoodsSoldList