import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "../../views/NotFound"
import Home from "../../views/Home.tsx";

const HomeRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default HomeRouter;