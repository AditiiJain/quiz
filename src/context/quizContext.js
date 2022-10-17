import React, { useState } from "react";
import quizData from "../data/quizData.json";
export const QuestionContext = React.createContext();

const QuestionProvider = ({ children }) => {
  const [isAnswered, setIsAnswered] = useState(() =>
    new Array(quizData.questions.length).fill(false)
  );
  const [inputAnswers, setInputAnswers] = useState(() =>
    new Array(quizData.questions.length).fill("")
  );
  return (
    <QuestionContext.Provider
      value={{ isAnswered, setIsAnswered, inputAnswers, setInputAnswers }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
