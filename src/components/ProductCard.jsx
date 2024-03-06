import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToWishlist} from "../features/wishlist";
// Icons
import {IoFilterOutline, IoBagOutline} from "react-icons/io5";
import {CiHeart} from "react-icons/ci";

// Css
import "./css/ProductCard.css"

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const addToWish = (product) => {
        dispatch(addToWishlist(product))
    }
    return (
        <div className="w-full md:w-card-width-md xl:w-card-width-lg py-5 px-3 mb-3 mx-3 product-card rounded-2xl">
            <div className="flex items-center justify-end gap-3 text-xl pb-4 product-action">
                <button
                    className="btn-compare"
                >
                    <IoFilterOutline/>
                </button>
                <button
                    className="btn-compare"
                >
                    <IoBagOutline/>
                </button>
                <button
                    onClick={() => addToWish(product)}
                    className={`btn-compare ${product.active ? 'active' : ''}`}
                >
                    <CiHeart/>
                </button>
            </div>
            <ul className="product-badge-list p-2">
                <li className="product-badge badge-blue">
                    <p className="flex flex-col items-center justify-center">
                        <span>
                            Nəğd alışda
                        </span>
                        <span>Endirim</span>
                        <span className="text-base">10 Azn</span>
                    </p>
                </li>
                <li className="product-badge badge-red">
                    <p className="flex flex-col items-center justify-center">
                        <span>18 Ay</span>
                    </p>
                </li>
                <li className="product-badge badge-green">
                    <p className="flex flex-col items-center justify-center">
                        <span>18 Ay</span>
                        <span>faizsiz kredit</span>
                    </p>
                </li>
            </ul>
            <div className="flex justify-center items-center p-5 product-img">
                <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt={product.title}/>
                </Link>
            </div>
            <h5 className="flex items-center justify-center text-sm text-center font-semibold mb-2 product-name">
                <Link to={`/products/${product.id}`}>
                    {product.title}
                </Link>
            </h5>
            <div className="flex items-center justify-evenly product-info">
                <div className="product-left">
                    <p className="bg-black rounded-2xl m-auto mb-2 product-color"></p>
                    <p className="text-sm product-price">
                        <span className="text-xl font-semibold">{product.price}</span> AZN
                    </p>
                </div>
                <div className="bg-gray rounded-xl text-center py-2 product-right">
                    <div className="text-sm months">
                        <button className="font-medium py-2 px-3 rounded-xl">6 ay</button>
                        <button className="font-medium py-2 px-3 rounded-xl active">12 ay</button>
                    </div>
                    <span className="font-semibold pt-2">6 azn</span>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-sm font-semibold py-2 buying-btns">
                <button className="bg-main-blue text-white py-2 px-10 rounded-xl">1 kliklə al</button>
                <Link to=":id"
                      className="border border-main-text text-main-blue py-2 px-12 rounded-xl mt-3">Kredit</Link>
            </div>
        </div>
    )
}

export default ProductCard;