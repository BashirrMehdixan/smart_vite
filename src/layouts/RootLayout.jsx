import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Partners from "../layouts/Partners";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
                <Partners />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout;