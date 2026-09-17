import UseFetch from '../hooks/UseFetch'

const GoodsSold = ({soldItem}) => {
    
    const items = UseFetch("Items");
    console.log(items);
  return (
    <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">{soldItem.id}</td>
                </tr>

    </tbody>
  )
}

export default GoodsSold