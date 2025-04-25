import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import "./App.scss";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/index";
import Error404Modern from "./pages/error/404-modern";
import { Outlet } from "react-router-dom";
import OurProducts from "./pages/home/products/OurProducts";
import Store from "./pages/home/store/Store";
import ContactUs from "./pages/home/contact/ContactUs";
import Footer from "./components/Footer";
import OurStory from "./pages/home/store/OurStory";
import CategoryProducts from "./pages/home/products/CategoryProducts";
function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-0">
        <Outlet />
      </div>
      <Footer />

    </>
  );
}

function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true" || false
  );
  const [reloadPage, setReloadPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  useEffect(() => {
    if (reloadPage) {
      window.location.reload();
      setReloadPage(false);
    }
  }, [reloadPage]);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-14 h-screen w-full fixed z-50 dark:bg-gray-900 bg-white">
        <p className="text-lg font-medium dark:text-white">
          Loading .... Be patient
        </p>
      </div>
    );
  }

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}  >
      <div className="flex">
        <div className="w-full">
          <Routes>
            <Route
              element={<Layout toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />}
            >
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<OurProducts />} />
              <Route path="/about" element={
                <>
                  <OurStory />
                  <Store />
                </>
              } />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/products/:slug" element={<CategoryProducts />} />
            </Route>
            <Route path="*" element={<Error404Modern />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
