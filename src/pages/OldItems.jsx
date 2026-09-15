import { useState } from "react";
import { useOutletContext } from "react-router";

const OldItems = () => {
  const { items, categories, handleUpdate, handleDelete } = useOutletContext();

  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditFormData(item);
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const parsedValue =
      type === "number" && value !== "" ? Number(value) : value;
    setEditFormData((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleSave = (id) => {
    handleUpdate({ ...editFormData, id });
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditFormData({});
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-100 border-b border-slate-700 pb-3">
        You can still buy me
      </h1>

      <div className="overflow-x-auto rounded-lg border border-slate-700 shadow-sm">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-800 text-xs uppercase text-amber-500 border-b border-slate-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Buying Price
              </th>
              <th scope="col" className="px-6 py-3 text-right">
                Selling Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/60 bg-slate-900/50">
            {items.map((item) => {
              const isEditing = editingId === item.id;
              const category = categories.find(
                (c) =>
                  String(c.id) ===
                  String(isEditing ? editFormData.categoryId : item.categoryId),
              );

              return (
                <tr
                  key={item.id}
                  className="hover:bg-slate-800/50 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-xs text-slate-400">
                    #{item.id}
                  </td>

                  {/* Name */}
                  <td className="px-6 py-4 font-medium text-slate-100">
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name || ""}
                        onChange={handleInputChange}
                        className="bg-slate-800 border border-slate-600 text-slate-100 rounded px-2 py-1 w-full focus:outline-none focus:border-amber-500"
                      />
                    ) : (
                      item.name
                    )}
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4">
                    {isEditing ? (
                      <select
                        name="categoryId"
                        value={editFormData.categoryId || ""}
                        onChange={handleInputChange}
                        className="bg-slate-800 border border-slate-600 text-slate-100 text-xs rounded px-2 py-1 w-full focus:outline-none focus:border-amber-500"
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="bg-slate-700 text-slate-300 text-xs px-2.5 py-1 rounded-full font-medium">
                        {category ? category.name : "unCategorized"}
                      </span>
                    )}
                  </td>

                  {/* Quantity */}
                  <td className="px-6 py-4 text-center font-semibold">
                    {isEditing ? (
                      <input
                        type="number"
                        name="Quantity"
                        value={editFormData.Quantity || ""}
                        onChange={handleInputChange}
                        className="bg-slate-800 border border-slate-600 text-slate-100 rounded px-2 py-1 w-20 text-center focus:outline-none focus:border-amber-500"
                      />
                    ) : (
                      item.Quantity
                    )}
                  </td>

                  {/* Buying Price */}
                  <td className="px-6 py-4 text-right font-semibold text-emerald-400">
                    {isEditing ? (
                      <input
                        type="number"
                        name="buyingPrice"
                        value={editFormData.buyingPrice || ""}
                        onChange={handleInputChange}
                        className="bg-slate-800 border border-slate-600 text-slate-100 rounded px-2 py-1 w-24 text-right focus:outline-none focus:border-amber-500"
                      />
                    ) : (
                      `KSh ${item.buyingPrice}`
                    )}
                  </td>

                  {/* Selling Price */}
                  <td className="px-6 py-4 text-right font-semibold text-amber-400">
                    {isEditing ? (
                      <input
                        type="number"
                        name="SellingPrice"
                        value={editFormData.SellingPrice || ""}
                        onChange={handleInputChange}
                        className="bg-slate-800 border border-slate-600 text-slate-100 rounded px-2 py-1 w-24 text-right focus:outline-none focus:border-amber-500"
                      />
                    ) : (
                      `KSh ${item.SellingPrice}`
                    )}
                  </td>

                  {/* Actions Column */}
                  <td className="px-6 py-4 text-center">
                    {isEditing ? (
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => handleSave(item.id)}
                          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 rounded transition-colors"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-slate-700 hover:bg-slate-600 text-slate-300 text-xs px-3 py-1.5 rounded transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <button
                          onClick={() => handleEditClick(item)}
                          className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-medium text-xs px-3 py-1.5 rounded transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs px-3 py-1.5 rounded transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OldItems;