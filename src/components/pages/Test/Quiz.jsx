import { useState } from "react";
import { QuizData } from "./QuizData";
import Start from "./Start/Start";
import ShowQuiz from "./ShowQuiz/ShowQuiz";

const Quiz = () => {
  console.log(QuizData);
  const [start, setStart] = useState(false);
  return (
    <div className="pt-[80px] bg-cyan-950 h-[100vh] w-[100%] flex items-center justify-center">
      <div className="container text-white text-center">
        {!start && <Start setStart={setStart} />}
        {start && <ShowQuiz />}
      </div>
    </div>
  );
};

export default Quiz;
