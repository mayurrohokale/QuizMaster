import { Link } from "react-router-dom"




export default function Home() {

    const quitApp = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const tg = (window as any).Telegram?.WebApp;
        if (tg) {
            tg.close();
        } else {
            console.log("Telegram Web App is not available.");
        }
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen ">

            <h1 className="font-bold text-2xl pb-4 text-yellow-400 bg-[#4A4A4A] rounded-lg p-4">Welcome to Quiz Bot!</h1>

            <button className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition ease-in-out duration-300  min-w-[150px]  "><Link to="/quiz">Start Quiz</Link></button>
            {/* <button>Leaderboard</button> */}
            <button
                onClick={quitApp}
                className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 hover:from-yellow-300 hover:to-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg shadow-md transform hover:scale-105 transition ease-in-out duration-300  min-w-[150px]  ">Quit</button>
             
           



        </div>
    )
}