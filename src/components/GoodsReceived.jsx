import {useNavigate} from "react-router-dom"


const GoodsReceived = ({ receivedItems, orderedItems }) => {
    const style = "text-slate-900 font-sans antialiased";
    const dataStyle ="px-3 "
    const navigate = useNavigate();
    

    function showOrderdItems(e,id){
        e.preventDefault();
        navigate(`/ReceivedVsPurchase/OrderedItems/${id}`)
    }

    return (
    <>
        {receivedItems.map((received) => {
            let status;
            
            if(received.quantityReceived < orderedItems.quantityOrdered){
                status = "Shortage";
            } 
            
            if (received.quantityReceived === 0 ){
                status = "In Transit";
            }

            if(received.quantityReceived === orderedItems.quantityOrdered){
                status = "Complete"
            }
            
            return ( 
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
                <td className={dataStyle}>
                    <div className={`rounded-full py-1 px-1 flex items-center justify-center ${
                        status === "In Transit"
                        ? "text-blue-600 bg-blue-100 border border-blue-300"
                        : status === "Shortage"
                        ? "text-red-600 bg-red-100 border border-red-300"
                        : status === "Complete"
                        ? "text-green-600 bg-green-100 border border-green-300"
                        : "text-slate-600"

                        }`}>
                        {status}
                    </div>
                </td>
            </tr>
           )
        })}
    </>
);
};

export default GoodsReceived;