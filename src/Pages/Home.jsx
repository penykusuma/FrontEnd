import Layout from "../Components/Layout";
import Utama from "../Components/Utama";
import BUtton from "../Components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/IndukBuku");
    }

    return (
        <>
            <Layout>
                <BUtton text="Kanban" onClick={handleClick} color="blue" />
                <Utama />
            </Layout>
        </>
    );
}

export default Home;