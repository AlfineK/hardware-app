import {useNavigate} from "react-router-dom"


const GoodsReceived = ({ receivedItems, orderedItems }) => {
    const style = "text-slate-900 font-sans antialiased";
    const dataStyle ="px-3 "
    const navigate = useNavigate();

    function showOrderdItems(e,id){
        e.preventDefault();
        // console.log("ID being passed:", id);
        navigate(`/ReceivedVsPurchase/OrderedItems/${id}`)
    }

    return (
    <>
        {receivedItems.map((received) => (
            <tr
                onClick = {
                    (e)=>showOrderdItems(e, received.id)}
                key={received.id}
                className="hover:bg-slate-50/80 transition-colors duration-300"
            >
                <td className="py-3.5 px-3">
                    <div>
                        <p className={`${style} font-semibold`}>
                            {orderedItems.supplier}
                        </p>

                        <p className={style}>
                            {orderedItems.orderId}
                        </p>
                    </div>
                </td>
                <td className={dataStyle}>{orderedItems.quantityOrdered}</td>
                <td className={dataStyle}>{received.quantityReceived ?? 0}</td>
                <td className={dataStyle}>{orderedItems.buyingPrice}</td>
                <td className={dataStyle}>{orderedItems.totalPrice}</td>
                <td className={dataStyle}>{orderedItems.supplyStatus}</td>
            </tr>
        ))}
        
        
    </>
);
};

export default GoodsReceived;