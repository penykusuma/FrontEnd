function Props (props) {
    const {meja, makanan, minuman, pelanggan} = props.pesanan;
    return ( 
        <>
            {pelanggan ?
                <div>
                    <h3>Pesanan dari meja : {meja}</h3>
                    <p>Makanan : {makanan}</p>
                    <p>Minuman : {minuman}</p>
                </div>
                :
                <p>Anda Bukan Pelanggan</p>
            }
            {/*<p>{props.pesan}</p>*/}
            {/*<p>{pesan}</p>*/}
        </>
     );
}
 
export default Props ;