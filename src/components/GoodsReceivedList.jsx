import GoodsReceived from './GoodsReceived';
import UseFetch from '../hooks/UseFetch';

const GoodsReceivedList = () => {
    const goodsReceived = UseFetch("receivedItems");
    const orderedGoods = UseFetch("orderedItems");

    if (!goodsReceived || !orderedGoods) return null; // still loading

    return (
        <>
            {orderedGoods.map((orderedItem) => {
                const receivedItem = goodsReceived.filter(
                    (received) =>
                        received.orderId === orderedItem.orderId &&
                        received.itemId === orderedItem.itemId
                );

                return (
                    <GoodsReceived
                        key={orderedItem.id}
                        receivedItems={receivedItem}
                        orderedItems={orderedItem}
                    />
                );
            })}
        </>
    );
};

export default GoodsReceivedList;