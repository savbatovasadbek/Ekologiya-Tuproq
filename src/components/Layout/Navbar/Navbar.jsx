import { useContext } from "react";
import { Context } from "../../../store/store";
import { Link, NavLink } from "react-router-dom";
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

const Navbar = () => {
  const { orderList } = useContext(Context);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className="py-2 text-white border-b-2 bg-black border-white fixed top-0 left-0 w-full opacity-100 z-10">
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
        <div className="flex items-center gap-3 max-sm:hidden">
          <Button onClick={() => changeLanguage("en")}>EN</Button>
          <Button onClick={() => changeLanguage("ru")}>RU</Button>
          <Button onClick={() => changeLanguage("uz")}>UZ</Button>
        </div>
        <div className="hidden max-sm:inline-block">
          <Sheet>
            <SheetTrigger>
              <CiMenuFries size={20} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <NavLink to="/">Are you sure absolutely sure?</NavLink>
                </SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
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
