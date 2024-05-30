import { useState } from "react";
import Layout from "../Components/Layout";

function State() {
    const [bilangan1, setBilangan1] = useState(15);
    const [bilangan2, setBilangan2] = useState(2);
    const [hasil, setHasil] = useState(0)

    const penambahan = () => {
        setHasil(parseInt(bilangan1) + parseInt(bilangan2))
    }
    const pengurangan = () => {
        setHasil(bilangan1 - bilangan2)
    }
    const perkalian = () => {
        setHasil(bilangan1 * bilangan2)
    }

    return ( 
        <>
            <Layout>
                <p>
                    Bilangan 1 : <input type="text"
                    value={bilangan1}
                    onChange={(e) => setBilangan1(e.target.value)} />
                    </p>
                <p>
                    Bilangan 2 : <input type="text"
                    value={bilangan2}
                    onChange={(e) => setBilangan2  (e.target.value)} />
                    </p>
                <p>Hasil : {hasil}</p>

                <button type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={penambahan}
                >
                    Tambah
                </button>
                <button type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={pengurangan}
                >
                    kurang
                </button>
                <button type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={perkalian}
                >
                    kali
                </button>
            </Layout>
        </>
     );
}

export default State;