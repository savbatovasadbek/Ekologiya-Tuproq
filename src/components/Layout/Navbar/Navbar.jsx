import { useContext } from "react";
import { Context } from "../../../store/store";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../../ui/button";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/images/logo.png";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const { orderList } = useContext(Context);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className=" bg-transparent py-2 text-white border-b-2 border-white fixed top-0 left-0 w-full opacity-100 z-10">
      <div className="container  flex items-center justify-between">
        <div className="">
          <NavLink to="/" className="w-[32px] h-[32px]">
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              className="w-[64px] h-[64px]"
            />
          </NavLink>
        </div>
        <div className="flex items-center gap-7 py-4  max-sm:hidden">
          {orderList?.map((link, idx) => {
            return (
              <div key={idx}>
                <Link className="text-lg" to={`/${t(link)}`}>
                  {t(link)}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-3 max-sm:hidden">
          <Button onClick={() => changeLanguage("en")}>EN</Button>
          <Button onClick={() => changeLanguage("ru")}>RU</Button>
          <Button onClick={() => changeLanguage("uz")}>UZ</Button>
        </div>
        <div className="hidden max-sm:inline-block">
          <a href="#1">
            <CiMenuFries size="36px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
