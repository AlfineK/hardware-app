import React from 'react';

const GoodsReceived = ({ receivedItems, orderdItems }) => {
    const style = "text-slate-900 font-sans antialiased";

    return (
        <tr className="hover:bg-slate-50/80 transition-colors duration-300">
            <td>
                <div>
                    <p className={`${style} font-semibold`}>
                        {orderdItems.supplier}
                    </p>

                    <p className={style}>
                        {orderdItems.orderId}
                    </p>
                </div>
            </td>

            <td>{orderdItems.quantityOrdered}</td>

            <td>
                {receivedItems?.quantityReceived ?? 0}
            </td>

            <td>{orderdItems.buyingPrice}</td>

            <td>{orderdItems.totalPrice}</td>

            <td>{orderdItems.supplyStatus}</td>
        </tr>
    );
};

export default GoodsReceived;