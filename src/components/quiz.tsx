// src/Quiz.tsx
import React, { useState } from 'react';
import { quizData } from './data';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option: string) => {
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      {showScore ? (
        <div className="score-section bg-black rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Your score is {score} out of {quizData.length}</h2>
          <button 
            className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
            }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-section bg-black rounded-lg shadow-lg ">
          <h2 className="text-xl font-semibold mb-4">{quizData[currentQuestion].question}</h2>
          <div className="options-container space-y-2">
            {quizData[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                onClick={() => handleAnswerOptionClick(option)}
                className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 "
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
