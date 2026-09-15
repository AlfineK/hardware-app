import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import OldItems from "./pages/OldItems";
import NewItems from "./pages/NewItems";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/oldItems" element={<OldItems />} />
            <Route path="/newItem" element={<NewItems />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;