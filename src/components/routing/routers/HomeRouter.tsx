import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "../../views/NotFound"

const HomeRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomeRouter/>} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default HomeRouter;