import { translationKey } from "../../translation/translationKey/translationKey";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useFullScreen } from "react-hooks-full-screen";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { RiFullscreenFill } from "react-icons/ri";

import BgVideo from "../../assets/video/bg.mp4";

import "./home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const [showFullScreen, setShowFullScreen] = useState(false);
  useFullScreen("app", showFullScreen);

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
      <NavLink
        to={`/${t(translationKey["Presentation"])}`}
        className="home-btn"
      >
        {t(translationKey["Start"])}
      </NavLink>
      <div className="absolute right-10 bottom-5 flex items-center gap-10">
        <button onClick={() => setShowFullScreen(!showFullScreen)}>
          {!showFullScreen ? (
            <RiFullscreenFill size="36" />
          ) : (
            <AiOutlineFullscreenExit size="36" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;
