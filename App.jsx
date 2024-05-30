import IndukBuku from "./induk-buku";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import State from "./Pages/state";


function App() {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/" element={<IndukBuku/>} />
            <Route path="/state" element={<State/>} />
            
        </Routes>
     );
}

export default App;