import { useContext } from "react";
import HomeSlide from "./HomeSlide";
import HomeProducts from "./HomeProducts";
import { ProductContext } from "../../context/ProductContext";


const Home = () => {
    const products = useContext(ProductContext);
    if (products) {
        return (

            <>
                <HomeSlide />
                <HomeProducts />
            </>
        )
    } else {
        return (
            <div className="container">
                Yüklənir...
            </div>
        )
    }
}

export default Home;