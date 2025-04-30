import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/gfx/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Menu, X } from "lucide-react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Autoplay } from 'swiper/modules';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("/public/products.json")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

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

          <div className="hidden md:flex items-center gap-6 font-semibold text-lg flex-row">
            <Link to="/" className="hover:text-yellow-500 transition">الرئيسية</Link>
            <div
              className="relative group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex items-center gap-2">
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
            className="hidden md:block fixed top-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
          >
            <div className="max-w-8xl mx-auto px-6 py-2">
              <Swiper
                dir="rtl"
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 4 },
                  1024: { slidesPerView: 7 },
                }}
                pagination={{ clickable: true, renderBullet: (index, className) => {
                  return `<span class="${className} w-2 h-2 bg-red-500 rounded-full inline-block mx-1"></span>`;
                }}}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                loop={true}
                className="mySwiper py-6"
              >
                {categories.map((category, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-center space-y-3">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-yellow-400 shadow"
                      />
                      <p className="font-bold text-red-800">{category.name}</p>
                      <div className="space-y-1 text-sm text-gray-700">
                        <Link
                          to={`/products/${category.slug}`}
                          className="flex items-center justify-center gap-2 hover:text-red-600 transition"
                        >
                          <Eye size={16} />
                          <span>عرض المنتجات</span>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
