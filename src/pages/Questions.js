import { useState } from "react";
import Navbar from "../components/navbar";
import quizData from "../data/quizData.json";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { QuestionContext } from "../context/quizContext";

const Questions = () => {
  const [counter, setCounter] = useState(0);
  // const [active, setActive] = useState(() =>
  //   new Array(quizData.questions.length).fill("")
  // );
  const { isAnswered, setIsAnswered, inputAnswers, setInputAnswers } =
    useContext(QuestionContext);

  function updateIsAnswered(e, index) {
    console.log("key index: ", index);
    let tempArray = isAnswered;
    let tempInputArray = inputAnswers;
    // let
    tempInputArray[counter] = e.target.innerHTML;
    let flag = 0;
    // setActive(index);
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
        <div className=" w-1/2 justify-center">
          <div className=" p-3 rounded-md text-center ">
            <div className="text-gray-400">
              {counter + 1}/{quizData.questions.length}
            </div>
            <div className="font-medium text-lg mt-2">
              {quizData.questions[counter].question}
            </div>
          </div>

          <div className="cursor-pointer mt-10">
            {quizData.questions[counter].options.map((option, index) => {
              return (
                // ${
                //   index === active && "bg-red-500"
                // } 
                <div
                  key={index}
                  className={`
                 
                  w-full bg-[#f3f3f3] mb-3 py-3 px-6 rounded-3xl hover:bg-[#f7e4e8] text-gray-600 transition-colors`}
                  onClick={(e) => {
                    // setActive(true);
                    updateIsAnswered(e, index);
                  }}
                >
                  {option}
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex gap-6">
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
                  className={`bg-[#037B0B] px-4 py-2  cursor-pointer text-white rounded-[32px]  transition-colors `}
                >
                  Submit
                </button>
              </Link>
            )}
          </div>
          {/*  */}
        </div>
      </main>
      {/* <style jsx>
        {`
          main {
            height: calc(100vh - 60px);
          }
          .bg-container {
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1441%26quot%3b)' fill='none'%3e%3crect width='324' height='324' clip-path='url(%26quot%3b%23SvgjsClipPath1442%26quot%3b)' x='111.82' y='267.78' fill='url(%23SvgjsPattern1443)' transform='rotate(111.44%2c 273.82%2c 429.78)'%3e%3c/rect%3e%3crect width='336' height='336' clip-path='url(%26quot%3b%23SvgjsClipPath1444%26quot%3b)' x='389.87' y='185' fill='url(%23SvgjsPattern1445)' transform='rotate(130.4%2c 557.87%2c 353)'%3e%3c/rect%3e%3ccircle r='46.666666666666664' cx='773.63' cy='27.07' fill='rgba(236%2c 170%2c 170%2c 1)'%3e%3c/circle%3e%3crect width='324' height='324' clip-path='url(%26quot%3b%23SvgjsClipPath1446%26quot%3b)' x='639.93' y='88.08' fill='url(%23SvgjsPattern1447)' transform='rotate(324.02%2c 801.93%2c 250.08)'%3e%3c/rect%3e%3crect width='198.08' height='198.08' clip-path='url(%26quot%3b%23SvgjsClipPath1448%26quot%3b)' x='51.29' y='14.15' fill='url(%23SvgjsPattern1449)' transform='rotate(33.25%2c 150.33%2c 113.19)'%3e%3c/rect%3e%3crect width='140' height='140' clip-path='url(%26quot%3b%23SvgjsClipPath1450%26quot%3b)' x='961.21' y='402.47' fill='url(%23SvgjsPattern1451)' transform='rotate(314.89%2c 1031.21%2c 472.47)'%3e%3c/rect%3e%3crect width='324' height='324' clip-path='url(%26quot%3b%23SvgjsClipPath1452%26quot%3b)' x='290.88' y='353.1' fill='url(%23SvgjsPattern1453)' transform='rotate(150.3%2c 452.88%2c 515.1)'%3e%3c/rect%3e%3cpath d='M1535.22 395.87 L1456.78 274.63L1575.9594567548218 255.2905432451782z' stroke='rgba(236%2c 170%2c 170%2c 1)' stroke-width='1' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3crect width='288' height='288' clip-path='url(%26quot%3b%23SvgjsClipPath1454%26quot%3b)' x='977.61' y='277.75' fill='url(%23SvgjsPattern1455)' transform='rotate(270.45%2c 1121.61%2c 421.75)'%3e%3c/rect%3e%3crect width='178.36' height='178.36' clip-path='url(%26quot%3b%23SvgjsClipPath1456%26quot%3b)' x='758.82' y='-19.77' fill='url(%23SvgjsPattern1457)' transform='rotate(111.25%2c 848%2c 69.41)'%3e%3c/rect%3e%3crect width='156' height='156' clip-path='url(%26quot%3b%23SvgjsClipPath1458%26quot%3b)' x='381.17' y='133' fill='url(%23SvgjsPattern1459)' transform='rotate(116.86%2c 459.17%2c 211)'%3e%3c/rect%3e%3cpath d='M1305.48 177.73000000000002 L1253.37 185.25L1242.5271941840438 144.59219418404376z' fill='rgba(235%2c 168%2c 168%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1441'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1443'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(236%2c 170%2c 170%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1442'%3e%3ccircle r='81' cx='273.82' cy='429.78'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='336' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1445'%3e%3crect width='336' height='3' x='0' y='0' fill='rgba(237%2c 212%2c 212%2c 1)'%3e%3c/rect%3e%3crect width='336' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1444'%3e%3ccircle r='84' cx='557.87' cy='353'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1447'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(237%2c 212%2c 212%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1446'%3e%3ccircle r='81' cx='801.93' cy='250.08'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='12.38' height='12.38' patternUnits='userSpaceOnUse' id='SvgjsPattern1449'%3e%3cpath d='M0 12.38L6.19 0L12.38 12.38' stroke='rgba(236%2c 170%2c 170%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1448'%3e%3ccircle r='49.52' cx='150.33' cy='113.19'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='14' height='14' patternUnits='userSpaceOnUse' id='SvgjsPattern1451'%3e%3cpath d='M0 14L7 0L14 14' stroke='rgba(236%2c 170%2c 170%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1450'%3e%3ccircle r='35' cx='1031.21' cy='472.47'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1453'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(235%2c 168%2c 168%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1452'%3e%3ccircle r='81' cx='452.88' cy='515.1'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1455'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(237%2c 212%2c 212%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1454'%3e%3ccircle r='72' cx='1121.61' cy='421.75'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6.86' height='6.86' patternUnits='userSpaceOnUse' id='SvgjsPattern1457'%3e%3cpath d='M3.43 1L3.43 5.86M1 3.43L5.86 3.43' stroke='rgba(236%2c 170%2c 170%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1456'%3e%3ccircle r='44.59' cx='848' cy='69.41'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1459'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(235%2c 168%2c 168%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1458'%3e%3ccircle r='39' cx='459.17' cy='211'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
          }
        `}
      </style> */}
    </>
  );
};
export default Questions;
