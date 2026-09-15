import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Layout = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  function handleCreate(toolsData) {
    fetch("http://127.0.0.1:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toolsData),
    })
      .then((res) => res.json())
      .then((newTool) => setItems((prevTools) => [...prevTools, newTool]));
  }

  function handleUpdate(updatedItem) {
    fetch(`http://127.0.0.1:3000/items/${updatedItem.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setItems((prevItems) =>
          prevItems.map((item) => (item.id === data.id ? data : item)),
        );
      });
  }

  function handleDelete(id) {
    fetch(`http://127.0.0.1:3000/items/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setItems((prevItems) =>
          prevItems.filter((item) => item.id !==id),
        );
      }
    });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 max-w-6xl w-full mx-auto p-6">
        <Outlet
          context={{
            items,
            categories,
            handleCreate,
            handleUpdate,
            handleDelete,
          }}
        />
      </main>
    </div>
  );
};
export default Layout;
