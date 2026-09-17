import React from 'react';

const GoodsReceived = ({ receivedItems, orderedItems }) => {
    const style = "text-slate-900 font-sans antialiased";

    // console.log("ordered items: ", orderdItems);
    // console.log("received items: ", receivedItems);

    return (
    <>
        {receivedItems.map((received) => (
            <tr
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