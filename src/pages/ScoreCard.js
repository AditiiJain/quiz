import quizData from "../data/quizData.json";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { QuestionContext } from "../context/quizContext";
import { useContext } from "react";
const ScoreCard = () => {
  const { inputAnswers } = useContext(QuestionContext);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main
        className="flex justify-center flex-col items-center py-12 "
        style={{ height: "auto" }}
      >
        <h1 className="text-3xl font-bold mb-3">Assessment Summary</h1>
        <div className="p-4">
          {inputAnswers.map((answer, index) => {
            return (
              <>
                <div className="mb-2">
                  <h3 className="font-semibold">
                    {index + 1}. {quizData.questions[index].question}
                  </h3>
                  <p className="font-medium">
                    Correct Answer:{" "}
                    <span className="font-normal">
                      {quizData.questions[index].correct_answer}
                    </span>
                  </p>
                  <p className="font-medium">
                    Your Answer:{" "}
                    <span
                      className={`${
                        quizData.questions[index].correct_answer === answer
                          ? "text-green-600 font-semibold"
                          : "text-red-600 font-semibold"
                      }`}
                    >
                      {answer === "" ? "NULL" : answer}
                    </span>
                  </p>
                </div>
              </>
            );
          })}
        </div>

        <Link to="/">
          <button
            className={`bg-[#e9246c] px-4 py-2  cursor-pointer text-white rounded-[32px]  transition-colors`}
          >
            Go To Home
          </button>
        </Link>
      </main>
    </>
  );
};

export default ScoreCard;
