import Props from "../Props";
import Menu from "../Menu";
const IndukProps = () => {
    const meja = 1;
    const makanan = "Nasi Goreng"
    const minuman = "Teh Panas"
    const pesanan ={"meja" : "1",
                    "makanan" : "Mie Ayam",
                    "minuman": "Es Jeruk",
                    "pelanggan": true};
    const pesanan2 ={"meja" : "2",
                     "makanan" : "Mie Ayam",
                     "minuman": "Es Jeruk",
                     "pelanggan": false};
    const pesanan3 ={"meja" : "3",
                     "makanan" : "Lalapan Ayam",
                     "minuman": "Es Teh",
                     "pelanggan": true};
    const menuMakanan = [ "Nasi Goreng",
                          "Mie Ayam",
                          " Lalapan Ayam" ]
    const menuMinuman= [ "Es Teh",
                         "Es Jeruk" ]
    return ( 
        <>
            <Menu menuMakanan={menuMakanan} menuMinuman={menuMinuman} />
            <hr />

            <Props pesanan={pesanan} />
            <hr/>
            <Props pesanan={pesanan2} />
            <hr />
            <Props pesanan={pesanan3} />
          {/*<Props 
            meja={meja}
            makanan={makanan}
            minuman={minuman}
            pelanggan={true}
            />
            <hr />
            <Props
            meja="2"
            makanan="Soto Ayam"
            minuman="Kopi"
            pelanggan={false}
            />
            <hr />}
            {/*<Props pesan="Pesan dari induk ke-1"/>
            <Props pesan="Pesan dari induk ke-2"/>
    <Props pesan="Pesan dari induk ke-3"/>*/}
        </> 
     );
}
 
export default IndukProps;