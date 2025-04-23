import { Link } from "react-router-dom";
import logo from "../images/gfx/logo.png";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-lg z-50 fixed top-0"
    >
      <div className="container mx-auto flex justify-between items-center h-20  px-8 md:px-16">
         <div className="flex items-center gap-6 md:gap-10 font-semibold text-lg flex-row-reverse">
          <Link to="/" className="hover:text-yellow-400 transition duration-300">
            الصفحة الرئيسية
          </Link>
          <Link to="/products" className="hover:text-yellow-400 transition duration-300">
            المنتجات
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition duration-300">
            عن الشركة
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition duration-300">
            تواصل معنا
          </Link>

        </div>
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-24 object-contain rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
