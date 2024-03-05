const Menu = ({menuMakanan, menuMinuman}) => {
    return ( 
        <>
           <h2>Menu Makanan</h2>
           <ol>
           {menuMakanan.map((makanan, index) => (
            <li key={index}>
                <p>{makanan}</p>
            </li>
           ))}
           </ol>
           <hr />
            <h2>Menu Minuman</h2>
            <ul>
            {menuMinuman.map((minuman, index) => (
                <li key={index}>
                    <p>{minuman}</p>
                </li>
            ))}
            </ul>

        </>
     );
}
 
export default Menu;