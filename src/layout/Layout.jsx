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

  useEffect(()=>{
    fetch("http://127.0.0.1:3000/category")
    .then(res=>res.json())
    .then(data=>setCategories(data))
  },[])

  function handleCreate(toolsData) {
    fetch("http://127.0.0.1:3000/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toolsData),
    }).then((res) => res.json())
    .then((newTool)=>setItems((prevTools)=>[...prevTools,newTool]))
  }



  return (
    <div>
      <NavBar />
      <Outlet context={{ items, categories, handleCreate }} />
    </div>
  );
};
export default Layout;
