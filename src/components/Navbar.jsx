import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/gfx/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../images/gfx/download.jpeg";
import image2 from "../images/gfx/download (1).jpeg";
import image3 from "../images/gfx/download (2).jpeg";
import image4 from "../images/gfx/download (3).jpg";
import {
  ArrowDownCircle,
  Eye,
  GalleryVertical,
  FileText,
  Menu,
  X,
} from "lucide-react";

const products = [
  {
    title: "اكشاك حراسة فيبر جلاس",
    slug: "security-cabins",
    image: image1,
    links: [
      { label: "تفاصيل", icon: <Eye size={16} />, path: "" },
      { label: "معرض الصور", icon: <GalleryVertical size={16} />, path: "/gallery" },
      { label: "طلب عرض سعر", icon: <FileText size={16} />, path: "/quote" },
    ],
  },
  {
    title: "المباني سابقة التجهيز",
    slug: "prefabricated-buildings",
    image: image2,
    links: [
      { label: "تفاصيل", icon: <Eye size={16} />, path: "" },
      { label: "معرض الصور", icon: <GalleryVertical size={16} />, path: "/gallery" },
      { label: "طلب عرض سعر", icon: <FileText size={16} />, path: "/quote" },
    ],
  },
  {
    title: "حمامات سباحة",
    slug: "swimming-pools",
    image: image3,
    links: [
      { label: "تفاصيل", icon: <Eye size={16} />, path: "" },
      { label: "معرض الصور", icon: <GalleryVertical size={16} />, path: "/gallery" },
      { label: "طلب عرض سعر", icon: <FileText size={16} />, path: "/quote" },
    ],
  },
  {
    title: "خزانات فيبر جلاس",
    slug: "fiberglass-tanks",
    image: image4,
    links: [
      { label: "تفاصيل", icon: <Eye size={16} />, path: "" },
      { label: "معرض الصور", icon: <GalleryVertical size={16} />, path: "/gallery" },
      { label: "طلب عرض سعر", icon: <FileText size={16} />, path: "/quote" },
    ],
  },
];

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.div
      dir="rtl"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-white shadow-lg z-50 fixed top-0"
      >
        <div className="container mx-auto flex justify-between items-center h-20 px-6 md:px-16">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-6 font-semibold text-lg flex-row-reverse">
            <Link to="/" className="hover:text-yellow-500 transition">الرئيسية</Link>
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center gap-2">
                <ArrowDownCircle size={20} className="hover:text-yellow-500 transition" />
                <Link to="/products" className="hover:text-yellow-500 transition">المنتجات</Link>
              </div>
            </div>
            <Link to="/about" className="hover:text-yellow-500 transition">عن الشركة</Link>
            <Link to="/contact" className="hover:text-yellow-500 transition">تواصل معنا</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white px-6 py-4 space-y-4 shadow"
            >
              <Link to="/" className="block text-right hover:text-yellow-500">الرئيسية</Link>
              <Link to="/products" className="block text-right hover:text-yellow-500">المنتجات</Link>
              <Link to="/about" className="block text-right hover:text-yellow-500">عن الشركة</Link>
              <Link to="/contact" className="block text-right hover:text-yellow-500">تواصل معنا</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="hidden md:block fixed top-20 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
          >
            <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-right">
              {products.map((product, index) => (
                <div key={index} className="text-center space-y-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-yellow-400 shadow"
                  />
                  <p className="font-bold text-red-800">{product.title}</p>
                  <div className="space-y-1 text-sm text-gray-700">
                    {product.links.map((link, i) => (
                      <Link
                        key={i}
                        to={`/products/${product.slug}${link.path}`}
                        className="flex items-center justify-center gap-2 hover:text-red-600 transition"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
