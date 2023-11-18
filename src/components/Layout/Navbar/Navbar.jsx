import { useContext } from "react";
import { Context } from "../../../store/store";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { translationKey } from "../../../translation/translationKey/translationKey";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { orderList } = useContext(Context);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className=" bg-transparent text-white border-b-2 border-white absolute top-0 left-0 w-full opacity-100 z-10">
      <div className="container  flex items-center justify-between">
        <div className="flex items-center gap-5 py-4 ">
          {orderList?.map((_, idx) => {
            return (
              <div key={idx}>
                <Link to={_}>{_}</Link>
              </div>
            );
          })}
        </div>
        <div>
          <div>
            <h1>{t(translationKey["Welcome to React"])}</h1>
          </div>
          <Button onClick={() => changeLanguage("en")}>En</Button>
          <Button onClick={() => changeLanguage("ru")}>ru</Button>
          <Button onClick={() => changeLanguage("uz")}>UZ</Button>
          <div className="">
            <Link to="/order">Order</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
