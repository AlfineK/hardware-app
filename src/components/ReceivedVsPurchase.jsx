import GoodsReceivedList from "./GoodsReceivedList"

const ReceivedVsPurchase = () => {
  const style = "py-3 px-3 text-left font-semibold"
  return (
    <div className='flex flex-col bg-white border border-slate-200/90 shadow-sm w-140 rounded-lg mt-6 '>

      <div className='flex flex-row items-center justify-between border-b bg-slate-50/60 border-slate-200 px-5 py-5'>
        <div>
          <img src="" alt="" />
          <div>
            <p className="text-sm font-semibold text-slate-900">Goods Received vs Purchase Orders</p>
            <p className="text-[11px] text-slate-500 font-mono">Intake &amp; supplier delivery match</p>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-slate-200/70 text-slate-700 font-semibold">Number Active</p>
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 font-mono uppercase tracking-wider text-[11px] border-b border-slate-200">
              <th className={`py-3 px-3 font-semibold`}>Supplier</th>
              <th className={style}>Ordered</th>
              <th className={style}>Received</th>
              <th className={style}>Buying Price</th>
              <th className={style}>Total</th>
              <th className={style}>Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            <GoodsReceivedList/>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ReceivedVsPurchase