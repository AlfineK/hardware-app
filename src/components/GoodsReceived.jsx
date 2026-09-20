import {useNavigate} from "react-router-dom"


const GoodsReceived = ({ receivedItems, orderedItems }) => {
    const style = "text-slate-900 font-sans antialiased";
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
                <td className="py-3.5 px-4">
                    <div>
                        <p className={`${style} font-semibold`}>
                            {orderedItems.supplier}
                        </p>

                        <p className={style}>
                            {orderedItems.orderId}
                        </p>
                    </div>
                </td>
                <td>{orderedItems.quantityOrdered}</td>
                <td>{received.quantityReceived ?? 0}</td>
                <td>{orderedItems.buyingPrice}</td>
                <td>{orderedItems.totalPrice}</td>
                <td>{orderedItems.supplyStatus}</td>
            </tr>
        ))}
        
        
    </>
);
};

export default GoodsReceived;