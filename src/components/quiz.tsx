import React, { useState, useEffect } from 'react';
import { quizData } from './data';
import { Link } from 'react-router-dom';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: string]: string }>({});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, SetUser] = useState<any>();
  const [quizId, setQuizId] = useState<string>();
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const tg = (window as any).Telegram?.WebApp;
      if (!tg) return; 
      tg.ready();
  
      const userinfo = tg.initDataUnsafe?.user;
      console.log(userinfo);
      if (userinfo) {
          
          SetUser(userinfo);
          
      }
  }, []);


  const handleAnswerOptionClick = (option: string) => {
    const questionId = quizData[currentQuestion].id;
    if(!quizStarted){
      setQuizStarted(true);
      const timestamp = Date.now();
      const newQuizId = `${user?.id??'unknown'}_${Math.round(timestamp / 1000)}`
          setQuizId(newQuizId)
          const displayName = user?.username
          ? `@${user?.username}`
          : `${user?.first_name} ${user?.last_name || ''}`;

  const message = `Quiz Started\nQuizId: ${newQuizId}\nUser: ${displayName ?? 'Unknown'}`
  sendTgNotification({message}); 
    }
    if (userAnswers[questionId] !== option) {
      setUserAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questionId]: option,
      }));

      if (option === quizData[currentQuestion].answer) {
        if (userAnswers[questionId] !== quizData[currentQuestion].answer) {
          setScore(score + 1);
        }
      } else if (userAnswers[questionId] === quizData[currentQuestion].answer) {
        setScore(score - 1);
      }
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      const displayName = user?.username
              ? `@${user?.username}`
              : `${user?.first_name} ${user?.last_name || ''}`;

      const message = `Quiz Result\nQuizId: ${quizId}\nUser: ${displayName ?? 'Unknown'}\nScore:  ${score} out of ${quizData?.length}`
      sendTgNotification({message}); 
    }
  };

  const sendTgNotification = ({message}: {message: string}) => {
    
    const payload = { message };
   
    fetch(`${import.meta.env.VITE_BACKEND_URL}/send-notification`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.error('Error:', data.error);
        } else {
          console.log('Notification sent to Telegram successfully!');
        }
      })
      .catch((error) => console.error('Error sending notification:', error));
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers({});
    setQuizStarted(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {showScore ? (
        <div className="score-section bg-[#FFF9DB] rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-600 mb-4">
            Your score is {score} out of {quizData.length}
          </h2>
          <div className="flex flex-col gap-2">
            <button
              className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition ease-in-out duration-300 min-w-[150px]"
              onClick={handleRestartQuiz}
            >
              Restart Quiz
            </button>
            <button className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition ease-in-out duration-300 min-w-[150px]">
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="question-section bg-[#FFF9DB] rounded-lg shadow-lg p-6 text-center w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-600">
            {quizData[currentQuestion].question}
          </h2>
          <div className="options-container space-y-2">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className={`w-full rounded-lg px-4 py-2 ${
                  userAnswers[quizData[currentQuestion].id] === option
                    ? 'bg-yellow-400 border-2 border-yellow-600'
                    : 'bg-yellow-300'
                } text-gray-800 hover:bg-yellow-400`}
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
              className="bg-yellow-400 text-gray-800 rounded-lg px-4 py-2 hover:bg-yellow-500 disabled:opacity-50"
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
