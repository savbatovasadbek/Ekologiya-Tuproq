import { useContext } from "react";
import { Context } from "../../../store/store";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../../ui/button";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/images/logo.png";
import { CiMenuFries } from "react-icons/ci";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import FullScreen from "../../constants/FullScreen/FullScreen";
import soil_media from "../../../assets/images/soil_media.jpg";
import { translationKey } from "../../../translation/translationKey/translationKey";

const Navbar = () => {
  const location = useLocation();
  const { orderList } = useContext(Context);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div
      className={`py-2 text-white border-b-2 border-white fixed top-0 left-0 w-full opacity-100 z-10 ${
        location.pathname === "/" ? "bg-transparent" : "bg-black"
      }`}
    >
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
        <div className="flex items-center gap-7 py-4 max-sm:hidden">
          {orderList?.map((link, idx) => {
            return (
              <div key={idx}>
                <Link className="text-lg" to={`/${link}`}>
                  {t(link)}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="hidden max-sm:flex">
          <NavLink
            to="/"
            className="drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)] text-[30px]"
          >
            {t(translationKey["Soil"])}
          </NavLink>
        </div>
        <div className="flex items-center gap-3 max-sm:hidden">
          <Button
            className={`${
              localStorage.getItem("lang") == "en"
                ? "bg-lime-600 hover:bg-lime-600"
                : ""
            }`}
            onClick={() => changeLanguage("en")}
          >
            EN
          </Button>
          <Button
            className={`${
              localStorage.getItem("lang") == "ru"
                ? "bg-lime-600 hover:bg-lime-600"
                : ""
            }`}
            onClick={() => changeLanguage("ru")}
          >
            RU
          </Button>
          <Button
            className={`${
              localStorage.getItem("lang") == "uz"
                ? "bg-lime-600 hover:bg-lime-600"
                : ""
            }`}
            onClick={() => changeLanguage("uz")}
          >
            UZ
          </Button>
        </div>
        <div className="hidden max-sm:inline-block">
          <Sheet>
            <SheetTrigger>
              <CiMenuFries size={20} />
            </SheetTrigger>
            <SheetContent className="bg-[#0F172A] text-white">
              <SheetHeader>
                <SheetTitle>
                  <NavLink
                    to="/"
                    className="flex items-center justify-center gap-3 flex-col"
                  >
                    <img
                      src={logo}
                      alt="logo"
                      loading="lazy"
                      className="w-[64px] h-[64px]"
                    />
                    <h1 className="drop-shadow-[1px_1px_1px_rgba(255,255,255,0.8)] tracking-[10px] text-[28px] text-white">
                      {t(translationKey["Soil"])}
                    </h1>
                  </NavLink>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex items-center gap-6 py-4 flex-col">
                    {orderList?.map((link, idx) => {
                      return (
                        <div key={idx}>
                          <Link className="text-lg" to={`/${link}`}>
                            {t(link)}
                          </Link>
                        </div>
                      );
                    })}
                    <div className="flex items-center gap-3">
                      <Button
                        className={`bg-[#121453] ${
                          localStorage.getItem("lang") == "en"
                            ? "bg-lime-600 hover:bg-lime-600"
                            : ""
                        }`}
                        onClick={() => changeLanguage("en")}
                      >
                        EN
                      </Button>
                      <Button
                        className={`bg-[#121453] ${
                          localStorage.getItem("lang") == "ru"
                            ? "bg-lime-600 hover:bg-lime-600"
                            : ""
                        }`}
                        onClick={() => changeLanguage("ru")}
                      >
                        RU
                      </Button>
                      <Button
                        className={`bg-[#121453] ${
                          localStorage.getItem("lang") == "uz"
                            ? "bg-lime-600 hover:bg-lime-600"
                            : ""
                        }`}
                        onClick={() => changeLanguage("uz")}
                      >
                        UZ
                      </Button>
                    </div>
                    <div className="">
                      <FullScreen size={28} />
                    </div>
                    <div className="h-[100vh]">
                      <img
                        src={soil_media}
                        alt="Soil"
                        loading="lazy"
                        className="w-full h-[25%] rounded-[20px]"
                      />
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
