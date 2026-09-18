import GoodsSold from './GoodsSold'
import UseFetch from '../hooks/UseFetch'

const GoodsSoldList = () => {

    const soldItems = UseFetch("soldItems");
    const items = UseFetch("Items");

    console.log("Items: ",items)

    const thStyle = "py-3 px-3 text-right font-semibold";

    return (
        <div className="flex flex-col bg-white border border-slate-200 shadow-sm w-140 rounded-lg mt-6">

            <div className='flex flex-row items-center justify-between border-b bg-slate-50/60 border-slate-200 px-5 py-5'>
                <div>
                    <img src="" alt="" />
                    <div>
                        <h2 className="text-sm font-semibold text-slate-900">
                        Goods Sold &amp; Inventory Performance
                        </h2>

                        <p className="text-[11px] text-slate-500 font-mono">
                            Current sales velocity &amp; floor availability
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-slate-200/70 text-slate-700 font-semibold">Current MTD</p>
                </div>
            </div>

            <table className='w-full text-left text-xs border-collapse'>

                <thead>
                    <tr className="bg-slate-50 text-slate-600 font-mono uppercase tracking-wider text-[11px] border-b border-slate-200">
                        <th className={`py-3 px-3 text-left font-semibold`}>Item Name</th>
                        <th className={thStyle}>Units sold</th>
                        <th className={thStyle}>Sell price</th>
                        <th className={thStyle}>Total rev</th>
                        <th className={thStyle}>Remaining stock</th>
                    </tr>
                </thead>

                <tbody className='divide-y divide-slate-100 text-slate-700'>
                  {soldItems.map(soldItem => {

                    const individualItem = items.filter(
                        item => Number(item.id) === soldItem.itemId
                    );

                    const totalRevenue = soldItem.quantity * soldItem.price

                    // console.log("Sold item:", soldItem);
                    // console.log("Matching item:", individualItem);
                    console.log("totalRevenue:", totalRevenue);

                    return (
                      <GoodsSold
                        key={soldItem.id}
                        soldItem={soldItem}
                        individualItems={individualItem}
                        totalRevenue={totalRevenue}
                      />
                    );
                  })}

                </tbody>

            </table>

        </div>
    )
}

export default GoodsSoldList