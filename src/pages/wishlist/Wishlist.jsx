// import wishlist from "features/wishlist";
import ProductCard from "../../components/ProductCard";
import { useSelector } from "react-redux";

const Wishlist = () => {
    const wishlistItems = useSelector(state => state.wishlist.items);

    return (
        wishlistItems.length ?
            <>
                <div className="container">
                    <div className="flex flex-wrap items-center">
                        {wishlistItems.map((item, index) => {
                            return (
                                <ProductCard key={index} product={item} />
                            )
                        })}
                    </div>
                </div>
            </>
            : <h1 className="text-3xl font-semibold text-center">No items in wishlist</h1>
    )
}

export default Wishlist;