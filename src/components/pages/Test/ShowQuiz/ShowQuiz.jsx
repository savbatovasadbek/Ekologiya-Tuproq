import { useState } from "react";

const ShowQuiz = () => {
  const [chooseAnswer, setChooseAnswer] = useState(false);
  const [answerNumber, setAnswerNumber] = useState(0);

  const onChooseHandler = (num) => {
    setChooseAnswer(true);
    setAnswerNumber(num);
  };
  return (
    <div className="flex flex-col">
      <div className="mb-[30px] text-[30px] text-white max-sm:text-[24px]">
        <h1>Ekologiya fanidan Tuproq mavzusida testlar</h1>
      </div>
      <div className="bg-white flex flex-col gap-3 p-[30px_20px] w-[600px] m-[0_auto] text-black max-sm:w-full">
        <div className="text-left border-b-2 p-[5px_0] text-[20px]">
          <h1>1/10 How are you?</h1>
        </div>
        <div className="w-full flex flex-col gap-2">
          {/* ======================================== */}

          <div
            onClick={() => onChooseHandler(1)}
            className={`w-full text-left cursor-pointer p-[5px] relative ${
              chooseAnswer && true ? "bg-[#84f384]" : "hover:bg-slate-300"
            } ${
              answerNumber == 1 ? (true ? "bg-[#84f384]" : "bg-red-400") : ""
            }`}
          >
            <p>Ok</p>
            {chooseAnswer ? (
              true ? (
                <p className="absolute top-[50%] right-4 translate-y-[-50%] ">
                  ✅
                </p>
              ) : (
                <p className="absolute top-[50%] right-4 translate-y-[-50%]">
                  ❌
                </p>
              )
            ) : (
              ""
            )}
          </div>

          <div
            onClick={() => onChooseHandler(2)}
            className={`w-full text-left cursor-pointer p-[5px] relative ${
              chooseAnswer ? "" : "hover:bg-slate-300"
            } ${
              answerNumber == 2 ? (false ? "bg-[#84f384]" : "bg-red-400") : ""
            }`}
          >
            <p>Well</p>
            {chooseAnswer && answerNumber == 2 ? (
              false ? (
                <p className="absolute top-[50%] right-4 translate-y-[-50%] ">
                  ✅
                </p>
              ) : (
                <p className="absolute top-[50%] right-4 translate-y-[-50%]">
                  ❌
                </p>
              )
            ) : (
              ""
            )}
          </div>

          <div
            onClick={() => onChooseHandler(3)}
            className={`w-full text-left cursor-pointer p-[5px] relative ${
              chooseAnswer ? "" : "hover:bg-slate-300"
            } ${
              answerNumber == 3 ? (false ? "bg-[#84f384]" : "bg-red-400") : ""
            }`}
          >
            <p>Nice</p>
            {chooseAnswer && answerNumber == 3 ? (
              false ? (
                <p className="absolute top-[50%] right-4 translate-y-[-50%] ">
                  ✅
                </p>
              ) : (
                <p className="absolute top-[50%] right-4 translate-y-[-50%]">
                  ❌
                </p>
              )
            ) : (
              ""
            )}
          </div>

          <div
            onClick={() => onChooseHandler(4)}
            className={`w-full text-left cursor-pointer p-[5px] relative ${
              chooseAnswer ? "" : "hover:bg-slate-300"
            } ${
              answerNumber == 4 ? (false ? "bg-[#84f384]" : "bg-red-400") : ""
            }`}
          >
            <p>Good</p>
            {chooseAnswer && answerNumber == 4 ? (
              false ? (
                <p className="absolute top-[50%] right-4 translate-y-[-50%] ">
                  ✅
                </p>
              ) : (
                <p className="absolute top-[50%] right-4 translate-y-[-50%]">
                  ❌
                </p>
              )
            ) : (
              ""
            )}
          </div>

          {/* ==================================== */}
        </div>
      </div>
      {chooseAnswer && (
        <div className="bg-[#84f384] p-[10px_20px] text-left indent-5 text-[#069906] w-[600px] m-[0_auto] max-sm:w-full">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
            excepturi facere, incidunt exercitationem nisi harum, iste quibusdam
            dignissimos molestiae deserunt quas, ab vel commodi tempore itaque
            sint deleniti! Id, ab.
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowQuiz;
