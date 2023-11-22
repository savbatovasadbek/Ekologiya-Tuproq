import PropTypes from "prop-types";

import { useState } from "react";
import { useFullScreen } from "react-hooks-full-screen";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { RiFullscreenFill } from "react-icons/ri";

const FullScreen = ({ size }) => {
  const [showFullScreen, setShowFullScreen] = useState(false);
  useFullScreen("app", showFullScreen);
  return (
    <>
      <button onClick={() => setShowFullScreen(!showFullScreen)}>
        {!showFullScreen ? (
          <RiFullscreenFill color="white" size={size} />
        ) : (
          <AiOutlineFullscreenExit color="white" size={size} />
        )}
      </button>
    </>
  );
};

export default FullScreen;

FullScreen.propTypes = {
  size: PropTypes.string,
};
