import { useState, useEffect } from "react";

function UseEffect() {
    const [harga, setHarga] = useState()
    const [qty, setQty] = useState()
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        setSubTotal(subTotal => harga * qty)
    }, [qty, harga]);

    return ( 
        <>
            <div className="container" style={{ marginLeft: '2rem' }}>
                <div className="mt-8">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Harga:
                    </label>
                    <input type="text" id="name" className="shadow appearance-none border rounded w-1/2 py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Masukan nominal harga"
                            value={harga}
                            onChange={(e) => {setHarga(e.target.value)}}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        qty:
                    </label>
                    <input type="text" id="name" className="shadow appearance-none border rounded w-1/2 py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Masukan jumlah"
                            value={qty}
                            onChange={(e) => {setQty(e.target.value)}}
                    />
                </div>
                    <p className="text-gray-600 text-sm italic mt-2">Sub Total: {subTotal}</p>
            </div>
        </>
     );
}

export default UseEffect;