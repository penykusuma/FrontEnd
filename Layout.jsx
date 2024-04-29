import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({children}) {
    return ( 
        <>
            <Navbar/>
            <Sidebar>
                {children}
                <h1>SELAMAT DATANG DI WEBSITE INI</h1>
            </Sidebar>
        </>
     );
}

export default Layout;