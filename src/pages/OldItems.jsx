import { useOutletContext } from "react-router";

const OldItems = () => {
    const {items,categories}=useOutletContext();
  return (
    <div>
      <h1>You can still buy me</h1>
      <div>
        {items.map((item) => {
          const category = categories.find((c) => String(c.id) === String(item.categoryId));
          return (
            <div key={item.id}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{category? category.name:"unCategorized"}</p>
              <p>{item.Quantity}</p>
              <p>{item.buyingPrice}</p>
              <p>{item.SellingPrice}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default OldItems;
