import the_internal_structure from "../../../assets/images/Yerning_tuzilishi/the_internal_structure.jpg";

const Yerning_tuzilishi = () => {
  return (
    <div className="bg-black w-full h-[100vh] pt-[100px] text-white">
      <div className="container bg-slate-700">
        <div className="flex items-center flex-col justify-center gap-5">
          <div className="">
            <img
              className="w-[500px]"
              src={the_internal_structure}
              alt="the_internal_structure"
              loading="lazy"
            />
          </div>
          <div className="">
            <h1 className="text-[80px]" style={{ letterSpacing: "10px" }}>
              Yerning tuzilishi
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yerning_tuzilishi;
