import { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../context/quizContext";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Score = () => {
  const { isAnswered } = useContext(QuestionContext);
  const [score, setScore] = useState(0);

  useEffect(() => {
    isAnswered.forEach((answered) => {
      if (answered) setScore((prev) => prev + 1);
    });
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-bold ">Congratulations!</h2>
        <h3 className="text-3xl font-semibold my-6">
          You have completed the assessment.
        </h3>
        <div className="text-3xl">
          Total Score:{" "}
          <span className="text-[#e9246c] font-bold">
            {score / 2}/{isAnswered.length}
          </span>
        </div>
        <div className="flex gap-6 mt-6">
          <Link to="/">
            <button
              className={`bg-[#e9246c] px-4 py-2  cursor-pointer text-white rounded-[32px]  transition-colors`}
            >
              Go to Home
            </button>
          </Link>
          <Link to="/assessment/scorecard">
            <button
              className={`bg-[#e9246c] px-4 py-2  cursor-pointer text-white rounded-[32px]  transition-colors`}
            >
              Review Answers
            </button>
          </Link>
        </div>
      </main>
      <style jsx>
        {`
          main {
            height: calc(100vh - 60px);
          }
        `}
      </style>
    </>
  );
};
export default Score;
