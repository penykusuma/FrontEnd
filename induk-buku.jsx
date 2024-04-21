import Buku from "./Components/Buku";
import Button from "./Components/Buku";
// const IndukBuku = () => {
//     return ( 
//         <div>
//             <Buku nomorISBN="Nomor ISBN-13"/>
//         </div>
//      );
// }
 
// export default IndukBuku;

//string+number
// const IndukBuku = () => {
//     const judul= "3600 detik";
//     const kodebk="001";
//     const pengarang="andrea hirata"
//     return ( 
//         <div>
//             <Buku judul={judul}
//             kodebk={kodebk}
//             pengarang={pengarang}/>
//         </div>
//      );
// }
 
// export default IndukBuku;

//bolean
// const IndukBuku = () => {
//     const judul="3600 detik";
//     const kodebk="001";
//     const pengarang="andrea hirata"
//     return ( 
//         <div>
//             <Buku judul={judul}
//             kodebk={kodebk}
//             pengarang={pengarang}
//             nomorISBN={false}
//             />
//             <Buku judul="Laskar pelangi"
//             kodebk="002"
//             pengarang="andrea hirata"
//             nomorISBN={true}
//             />
//             <hr/>
//         </div>
//      );
// }
 
// export default IndukBuku;

//array
// const IndukBuku = () => {
//     const tersedia = {
//         "judul" : "LASKAR PELANGI",
//         "kodebk" : "002",
//         "penerbit" : "Media Pustaka",
//         "pengarang" : "Andrea Hirata",
//         "nomerISBN" : true
//     };
//     const tersedia1 = {
//         "judul" : "3600 detik",
//         "kodebk" : "001",
//         "penerbit" : "Media Pustaka",
//         "pengarang" : "Andrea Hirata",
//         "nomerISBN" : false
//     };
//     const kodebk = ["002", "001"];
//     const penerbit = ["Media Pustaka"];

//     return ( 
//         <div>
//             <Buku kodebk={kodebk} penerbit={penerbit} tersedia={tersedia}/>
//             <Buku kodebk={kodebk} penerbit={penerbit} tersedia={tersedia1}/>
//         </div>
//      );
// }
 
// export default IndukBuku;

//Object
// function IndukBuku() {
//     const bukuData = {genre:"Fiksi", rating:"Bintang 5"};
//     return ( 
//         <Buku data={bukuData}/>
//      );
// }

// export default IndukBuku;

//function button
function App() {
    function heandleClick(){
        alert('Tombol diclick');
    }
    return <Button onClick={heandleClick} /> ;
}

export default App;
