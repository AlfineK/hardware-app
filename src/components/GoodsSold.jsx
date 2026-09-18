const GoodsSold = ({ soldItem, individualItems, totalRevenue }) => {
  return (
    <>
      {individualItems.map((individualItem) => (
        <tr
          key={individualItem.id}
          className="hover:bg-slate-50/80 transition-colors duration-300"
        >
          <td className="py-3.5 px-4 font-semibold text-slate-900 text-xs">
            <p>{individualItem.name}</p>
           
          </td>
          <td className="py-3.5 px-4">{soldItem.quantity}</td>
          <td className="py-3.5 px-4">{soldItem.price}</td>
          <td className="py-3.5 px-4">{totalRevenue}</td>
          <td className="py-3.5 px-4"></td>
        </tr>
      ))}
    </>
  );
};

export default GoodsSold;