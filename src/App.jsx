import IndukBuku from "./induk-buku";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/IndukBuku" element={<IndukBuku/>} />
        </Routes>
     );
}

export default App;