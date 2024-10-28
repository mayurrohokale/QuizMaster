// src/Quiz.tsx
import React, { useState } from 'react';
import { quizData } from './data';
import { Link } from 'react-router-dom';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleAnswerOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      {showScore ? (
        <div className="score-section bg-black rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            Your score is {score} out of {quizData.length}
          </h2>
          <div className='flex flex-col gap-2'>
          <button 
            className="mt-4  bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setShowScore(false);
              setSelectedOption(null);
            }}
          >
            Restart Quiz
          </button>
          <button className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
            <Link to="/">Home</Link>
          </button>
          </div>
          
        </div>
      ) : (
        <div className="question-section bg-black rounded-lg shadow-lg p-6 text-center w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-white">
            {quizData[currentQuestion].question}
          </h2>
          <div className="options-container space-y-2">
            {quizData[currentQuestion].options.map((option, index) => (
              <button 
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className={`w-full rounded-lg px-4 py-2 ${
                  selectedOption === option ? 'bg-blue-600' : 'bg-blue-500'
                } text-white hover:bg-blue-600`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex space-x-4 mt-6 justify-center">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="bg-gray-500 text-white rounded-lg px-4 py-2 hover:bg-gray-600 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedOption}
              className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
