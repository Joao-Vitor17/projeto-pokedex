import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home"
import DescricaoPokemon from "../pages/DescricaoPokemon";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:pokemon" element={<DescricaoPokemon />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesApp;