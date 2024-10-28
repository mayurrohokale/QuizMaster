import {Outlet,  } from "react-router-dom"




export default function Home() {
    return (
        <div className="flex flex-col gap-4">
            <button className="bg-blue-500 rounded-sm p-4 font-semibold text-base ">Start Quiz</button>
            {/* <button>Leaderboard</button> */}
            <button className="bg-blue-500 rounded-sm p-4 font-semibold text-base">Quit</button>
        </div>
    )
}