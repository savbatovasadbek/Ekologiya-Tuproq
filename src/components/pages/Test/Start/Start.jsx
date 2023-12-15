import PropTypes from "prop-types";

const Start = ({ setStart }) => {
  const onClickBtnHandler = () => {
    setStart((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-3 text-center">
      <div className="">
        <h1 className="text-[60px] max-sm:text-[40px]">
          Tuproq mazusidan test yechishga <br /> hush kelibsiz!
        </h1>
      </div>
      <div className="">
        <button
          onClick={onClickBtnHandler}
          className="p-[16px_30px] bg-green-600 hover:bg-green-800 transition-all"
        >
          Testni boshlash
        </button>
      </div>
    </div>
  );
};

export default Start;

Start.propTypes = {
  setStart: PropTypes.func,
};
