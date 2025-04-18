import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bell, Moon, Sun, UserCircle } from "lucide-react";
import logo from "../images/gfx/Untitled_design[1].png";
  
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ( ) => {
 
  return (
    <div className="w-full bg-black shadow-lg z-50 text-white"  >
      <div className="container max-w-8xl  mx-auto flex justify-between items-center h-20 px-8">

         <img src={logo} alt="Logo" className="h-16 w-16 rounded-full" />

         <div className="flex items-center gap-10 font-semibold text-lg">
          <Link to="/" className="hover:text-yellow-400 transition">الصفحة الرئيسية</Link>
          <Link to="/profile" className="hover:text-yellow-400 transition">عن الشركة</Link>
          <Link to="/blog" className="hover:text-yellow-400 transition">تواصل معنا</Link>
          <Link to="/blog" className="hover:text-yellow-400 transition">المنتجات</Link>
        </div>
 
      </div>
    </div>
  );
};

export default Navbar;
