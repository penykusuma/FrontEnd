// function Buku({nomorISBN}) {
//     return ( 
//         <div>
//             <h3>Daftar Buku</h3>
//             {/* <p>{buku.nomorISBN}</p> */}
//             <p>{nomorISBN}</p>
//         </div>
//      );
// }

// export default Buku;

//STRING+NUMBER
// function Buku({judul, kodebk, pengarang}) {
//     return ( 
//         <div>
//             <h3>Buku berjudul: {judul}</h3>
//             <p>Buku dengan kodebk: {kodebk}</p>
//             <p>Nama Pengarang: {pengarang}</p>
//         </div>
//      );
// }

// export default Buku;

//Bolean
// function Buku(buku) {
//     const{judul, kodebk, pengarang, nomorISBN} = buku;
//     return ( 
//         <>
//             {nomorISBN?
//                 <div>
//                     <h3>Buku berjudul: {judul}</h3>
//                     <p>buku dengan kodebk: {kodebk}</p>
//                     <p>nama pengarang: {pengarang}</p>
//                 </div>
//                 :
//                 <p>buku yang tidak tersedia</p>
//             }
//         </>
//      );
// }

// export default Buku;

//Array
function Buku(buku) {
    const{judul, kodebk, stock, pengarang, nomerISBN} = buku.tersedia;
    return ( 
        <>
            {nomerISBN?
                <div>
                    <h3>Judul buku: {judul}</h3>
                    <p>Kode buku: {kodebk}</p>
                    <p>stock buku: {stock}</p>
                    <p>Pengarang buku: {pengarang}</p>
                </div>
                :
                <p>Buku tidak tersedia</p>
            }
        </>
     );
}

export default Buku;

//object
// function Buku(buku) {
//     return ( 
//         <div>
//             <p>Genre : {buku.data.genre}</p>
//             <p>Rating: {buku.data.rating}</p>
//         </div>
        
//      );
// }

// export default Buku;

//function button
// function Button(buku) {
//     return <button onClick={buku.onClick}>Klik Tautan Ini</button> 
// }

// export default Button;