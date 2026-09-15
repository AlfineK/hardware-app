import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <nav className="bg-slate-800 border-b border-slate-700 px-6 py-4 flex items-center justify-between shadow-md">
      <Link to="/" className="text-xl font-bold text-amber-500 hover:text-amber-400 transition-colors">
        Handy Hardware!!!
      </Link>
      <div className="flex gap-4">
        <NavLink 
          to="/oldItems" 
          className={({ isActive }) => 
            `px-3 py-2 rounded-md font-medium text-sm transition-colors ${
              isActive ? "bg-amber-500 text-slate-900" : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          Old Tools
        </NavLink>
        <NavLink 
          to="/newItem"
          className={({ isActive }) => 
            `px-3 py-2 rounded-md font-medium text-sm transition-colors ${
              isActive ? "bg-amber-500 text-slate-900" : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          New Tools
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;