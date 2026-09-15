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
    <div className="max-w-md mx-auto bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <h2 className="text-xl font-bold text-amber-500 mb-2">Add New Tool</h2>
        
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">Tool name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="category" className="text-sm font-medium text-slate-300">Category Name</label>
          <select
            name="category"
            id="category"
            value={categoryId}
            required
            onChange={(e) => setCategoryId(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="">--Select Category--</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="quantity" className="text-sm font-medium text-slate-300">Quantity</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            required
            onChange={(e) => setQuantity(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="buying-price" className="text-sm font-medium text-slate-300">Buying Price</label>
          <input
            type="number"
            name="buying-price"
            id="buying-price"
            value={buyingPrice}
            onChange={(e) => setBuyingPrice(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="selling-price" className="text-sm font-medium text-slate-300">Selling Price</label>
          <input
            type="number"
            name="selling-price"
            id="selling-price"
            value={SellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <button 
          type="submit"
          className="mt-4 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-2 px-4 rounded-md transition-colors shadow-md cursor-pointer"
        >
          Add Tool
        </button>
      </form>
    </div>
  );
};
export default NewItems;