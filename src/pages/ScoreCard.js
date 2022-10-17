import quizData from "../data/quizData.json";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { QuestionContext } from "../context/quizContext";
import { useContext, useEffect } from "react";
const ScoreCard = () => {
    const {inputAnswers} = useContext(QuestionContext)
    useEffect(()=>{
console.log(inputAnswers)
    },[])
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center flex-col items-center">
        <h1 className="text-center text-4xl font-bold mb-8">
          hi
        </h1>

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
