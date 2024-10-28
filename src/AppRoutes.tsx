import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./components/quiz";
import Home from "./components/Home";




export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz" element={<Quiz/>}/>
            </Routes>

        </BrowserRouter>
    )
}