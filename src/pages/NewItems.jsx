import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

const NewItems = () => {
  const { handleCreate, categories } = useOutletContext();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [SellingPrice, setSellingPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name: name,
      categoryId: categoryId,
      Quantity: quantity,
      buyingPrice: buyingPrice,
      SellingPrice: SellingPrice,
    };

    handleCreate(newItem);
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Tool name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="category">Category Name</label>
        <select
          name="category"
          id="category"
          value={categoryId}
          required
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">--Select Category--</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <label htmlFor="quantity"> Quantity</label>
        <input
          type="number"
          name="quantity"
          id="quantity"
          value={quantity}
          required
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label htmlFor="buying-price">Buying Price</label>
        <input
          type="number"
          name="buying-price"
          id="buying-price"
          value={buyingPrice}
          onChange={(e) => setBuyingPrice(e.target.value)}
        />
        <label htmlFor="selling-price">Selling Price</label>
        <input
          type="number"
          name="selling-price"
          id="selling-price"
          value={SellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
        <button type="submit">Add Tool</button>
      </form>
    </div>
  );
};
export default NewItems;
