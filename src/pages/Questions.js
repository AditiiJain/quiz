import { useState } from "react";
import Navbar from "../components/navbar";
import quizData from "../data/quizData.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { QuestionContext } from "../context/quizContext";

const Questions = () => {
  const [counter, setCounter] = useState(0);

  const { isAnswered, setIsAnswered, inputAnswers, setInputAnswers } =
    useContext(QuestionContext);

  function updateIsAnswered(e) {
    let tempArray = isAnswered;
    let tempInputArray = inputAnswers;

    tempInputArray[counter] = e.target.innerHTML;
    let flag = 0;

    for (let i = 0; i < quizData.questions.length; i++) {
      if (e.target.innerHTML === quizData.questions[counter].correct_answer) {
        flag = 1;
        tempArray[counter] = true;
      }
    }
    if (flag === 0) {
      console.log(counter, "check");
      tempArray[counter] = false;
    }
    setIsAnswered(tempArray);
    setInputAnswers(tempInputArray);
    console.log(isAnswered, "isans");
  }

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="flex justify-center pt-4 bg-container relative">
        <div className="w-3/4 lg:w-1/2 justify-center">
          <div className=" p-3 rounded-md text-center ">
            <div className="text-gray-400">
              {counter + 1}/{quizData.questions.length}
            </div>
            <div className="font-medium text-lg mt-2">
              {quizData.questions[counter].question}
            </div>
          </div>

          <div className="cursor-pointer mt-10">
            {quizData.questions[counter].options.map((option) => {
              return (
                <div
                  className={`  
                  w-full bg-[#f3f3f3] mb-3 py-3 px-6 rounded-3xl hover:bg-[#f7e4e8] border border-transparent hover:border-dashed hover:border-[#e9246c] text-gray-600 transition-colors`}
                  onClick={(e) => {
                    updateIsAnswered(e);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex flex-col lg:flex-row gap-6 w-full">
            <button
              className={`bg-[#e9246c] px-4 py-2 cursor-pointer text-white rounded-[32px]  transition-colors ${
                counter === 0
                  ? "cursor-not-allowed opacity-50"
                  : " hover:bg-[#fa5390]"
              }`}
              onClick={() => {
                counter !== 0 ? setCounter(counter - 1) : setCounter(0);
              }}
            >
              Previous Question
            </button>
            <button
              className={`bg-[#e9246c] px-4 py-2 cursor-pointer text-white rounded-[32px]  transition-colors ${
                counter === quizData.questions.length - 1
                  ? "cursor-not-allowed opacity-50"
                  : " hover:bg-[#fa5390]"
              }`}
              onClick={() => {
                counter !== quizData.questions.length - 1
                  ? setCounter(counter + 1)
                  : setCounter(quizData.questions.length - 1);
              }}
            >
              Next Question
            </button>
            {counter === quizData.questions.length - 1 && (
              <Link to="/assessment/score">
                <button
                  className={`bg-[#037B0B] px-4 py-2  cursor-pointer text-white rounded-[32px]  transition-colors w-full lg:w-auto`}
                >
                  Submit
                </button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export default Questions;
