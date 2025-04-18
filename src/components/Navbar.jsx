import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bell, Moon, Sun, UserCircle } from "lucide-react";
import logo from "../images/gfx/Untitled_design[1].png";
import { useI18nContext } from "../context/i18n-context";
import { Translate } from "@phosphor-icons/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ toggleDark, dark, onLogOut, themeDark }) => {
  const { t, language, changeLanguage } = useI18nContext();

  return (
    <div className="w-full bg-black shadow-lg z-50 text-white" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto flex justify-between items-center h-20 px-4">

         <img src={logo} alt="Logo" className="h-16 w-16 rounded-full" />

         <div className="flex items-center gap-10 font-semibold text-lg">
          <Link to="/" className="hover:text-yellow-400 transition">{t("navbar.Home")}</Link>
          <Link to="/profile" className="hover:text-yellow-400 transition">{t("navbar.About")}</Link>
          <Link to="/blog" className="hover:text-yellow-400 transition">{t("navbar.products")}</Link>
          <Link to="/blog" className="hover:text-yellow-400 transition">{t("navbar.contactUs")}</Link>
        </div>

         <div className="flex items-center gap-5">
           <button className="relative p-1 hover:text-yellow-400 transition">
            <Bell className="h-6 w-6" />
          </button>

           <Menu as="div" className="relative">
            <Menu.Button className="p-1 hover:text-yellow-400 transition">
              <UserCircle className="h-6 w-6" />
            </Menu.Button>
            <Transition
              enter="transition duration-150 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 ease-in"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/profile" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm")}>
                      {t("navbar.Profile")}
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link to="/settings" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm")}>
                      {t("navbar.Settings")}
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <span onClick={onLogOut} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm cursor-pointer")}>
                      {t("navbar.SignOut")}
                    </span>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

           {!themeDark && (
            <button
              onClick={toggleDark}
              className="p-1 hover:text-yellow-400 transition"
            >
              {dark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </button>
          )}

           <button
            onClick={() => changeLanguage(language === "en" ? "ar" : "en")}
            className="p-1 hover:text-yellow-400 transition"
          >
            <Translate className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
