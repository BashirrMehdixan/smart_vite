import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { ProductContext } from "../../context/ProductContext"

// Css
import "./css/HomeProducts.css";

const HomeProducts = () => {
    const products = useContext(ProductContext);
    return (
        products &&
        <section>
            <div className="container">
                <div className="flex flex-wrap items-center justify-evenly main-category py-8">
                    <div className="w-full md:w-1/2 lg:w-1/5 py-5 mx-2 rounded-lg category-block active">
                        <Link to="/" className="flex flex-col items-center justify-center py-5 hover:text-main-blue">
                            <img src="../assets/images/icons/new-blue.png" alt="" />
                            <span className="font-semibold text-xl py-2">Yeni məhsullar</span>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 py-5 mx-2 rounded-lg category-block">
                        <Link to="/" className="flex flex-col items-center justify-center py-5 hover:text-main-blue">
                            <img src="../assets/images/icons/badge.png" alt="" />
                            <span className="font-semibold text-xl py-2">Ən çox baxılanlar</span>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 py-5 mx-2 rounded-lg category-block">
                        <Link to="/" className="flex flex-col items-center justify-center py-5 hover:text-main-blue">
                            <img src="../assets/images/icons/discount.png" alt="" />
                            <span className="font-semibold text-xl py-2">Endirimli məhsullar</span>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/5 py-5 mx-2 rounded-lg category-block">
                        <Link to="/" className="flex flex-col items-center justify-center py-5 hover:text-main-blue">
                            <img src="../assets/images/icons/bulb.png" alt="" />
                            <span className="font-semibold text-xl py-2">Kompaniyalar</span>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap py-8 px-5">
                    {products && products.map((product, index) => {
                        return <ProductCard key={index} product={product} />
                    })}
                </div>
                <div className="banner px-2 py-4">
                    <img src="../assets/images/banners/smart.gif" className="w-full rounded-xl" alt="" />
                </div>
            </div>
        </section>
    )
}

export default HomeProducts;