import { Link } from "react-router-dom"




export default function Home() {

    const quitApp = () => {
        const tg = window.Telegram.WebApp;
        if (tg) {
            tg.close();
        } else {
            console.log("Telegram Web App is not available.");
        }
    };

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen ">
            <button className="bg-blue-500 rounded-xl p-4 font-semibold text-base  min-w-[200px]  "><Link to="/quiz">Start Quiz</Link></button>
            {/* <button>Leaderboard</button> */}
            <button
            onClick={quitApp}
            className="bg-blue-500 rounded-xl p-4 font-semibold text-base min-w-[200px]">Quit</button>
        </div>
    )
}