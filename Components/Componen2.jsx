import React, {useContext} from "react";
import { MyContext } from "../Pages/React Context";

const ContextComp2 = () => {
    const [data, setData] = useContext(MyContext)
    const harga = 1000

    return ( 
        <div>
            <div>
                {harga} x 2
                <p>
                    <button
                        className="bg-blue-700 hover:bg-blue-900 text-white font-bold
                        py-2 px-4 rounded-lg text 3xl"
                        onClick={() => setData(data + (harga * 5))}
                    >
                        +
                    </button>
                </p>
            </div>
        </div>
     );
}
 
export default ContextComp2;
