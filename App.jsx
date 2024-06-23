import IndukBuku from "./induk-buku";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import State from "./Pages/state";
import EventHandling from "./Pages/eventhandling";
import UseEffect from "./Pages/UseEffect";
import Animasi from "./Pages/Timer";
import FetchApi from "./Pages/Fetch";
import ReactContext from "./Pages/React Context";



function App() {
    return ( 
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/" element={<IndukBuku/>} />
            <Route path="/state" element={<State/>} />
            <Route path="/eventhandling" element={<EventHandling/>} />
            <Route path="/UseEffect" element={<UseEffect/>} />
            <Route path="/Timer" element={<Animasi/>} />
            <Route path="/Fetch" element={<FetchApi/>} />
            <Route path="/ReactContext" element={<ReactContext/>} />
            

        </Routes>
     );
}

export default App;