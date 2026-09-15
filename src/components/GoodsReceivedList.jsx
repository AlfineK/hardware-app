import GoodsReceived from './GoodsReceived';
import UseFetch from '../hooks/UseFetch';

const GoodsReceivedList = () => {
    const goodsReceived = UseFetch("receivedItems");
    const orderedGoods = UseFetch("orderedItems");

    return (
        <>
            {orderedGoods.map((orderedItem) => {

                const receivedItem = goodsReceived.find(
                    (received) => received.orderId === orderedItem.orderId
                );

                return (
                    <GoodsReceived
                        key={orderedItem.id}
                        receivedItems={receivedItem}
                        orderdItems={orderedItem}
                    />
                );
            })}
        </>
    );
};

export default GoodsReceivedList;