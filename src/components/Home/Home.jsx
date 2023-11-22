import { translationKey } from "../../translation/translationKey/translationKey";
import { useTranslation } from "react-i18next";

import BgVideo from "../../assets/video/bg.mp4";

import "./home.css";
import { NavLink } from "react-router-dom";
import FullScreen from "../constants/FullScreen/FullScreen";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="landingpage">
      <video src={BgVideo} autoPlay muted loop className="video-bg" />{" "}
      {/* muted - for voice */}
      <div className="bg-overlay"></div>
      <div className="home-text">
        <h1 className="text-[6em]">{t(translationKey["Soil"])}</h1>
        <div>
          <p>
            {t(
              translationKey["Improving land resources, use and productivity"]
            )}
          </p>
          <p>
            {t(
              translationKey["Optimization of mineral resources and their use"]
            )}
          </p>
        </div>
      </div>
      <NavLink to={`/Presentation`} className="home-btn">
        {t(translationKey["Start"])}
      </NavLink>
      <div className="absolute right-10 bottom-5 flex items-center gap-10 max-sm:hidden">
        <FullScreen size={36} />
      </div>
    </div>
  );
};

export default Home;
