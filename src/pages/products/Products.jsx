import { useContext } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../../components/ProductCard";
import { ProductContext } from "../../context/ProductContext";

// Css
import "./css/Products.css";

const Products = () => {
    const products = useContext(ProductContext);
    return (
        <>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full flex flex-wrap justify-between font-semibold text-main-blue space-x-2 pt-3 pb-20 sorting-box">
                        <button type="button" className="w-full md:w-card-width-md lg:w-card-width-lg mb-3 border border-main-blue py-3 rounded-2xl hover:bg-main-blue hover:text-white duration-500 btn-sort">
                            Yeni məhsullar
                        </button>
                        <button type="button" className="w-full md:w-card-width-md lg:w-card-width-lg mb-3 border border-main-blue py-3 rounded-2xl hover:bg-main-blue hover:text-white duration-500 btn-sort">
                            Endirimli məhsullar
                        </button>
                        <button type="button" className="w-full md:w-card-width-md lg:w-card-width-lg mb-3 border border-main-blue py-3 rounded-2xl hover:bg-main-blue hover:text-white duration-500 btn-sort">
                            Əvvəlcə ucuz
                        </button>
                        <button type="button" className="w-full md:w-card-width-md lg:w-card-width-lg mb-3 border border-main-blue py-3 rounded-2xl hover:bg-main-blue hover:text-white duration-500 btn-sort">
                            Əvvəlcə baha
                        </button>
                    </div>
                    <div className="w-full lg:w-3/12 pb-8">
                        <div className="rounded-2xl p-5 mb-5 category-item">
                            <h4 className="text-main-blue font-semibold">Kateqoriya</h4>
                            <ul className="hidden mt-5">
                                <li>
                                    <Link to="pen">Qələm</Link>
                                    <span>3</span>
                                </li>
                                <li>
                                    <Link to="pen">Ev və ofis telefonları</Link>
                                    <span>3</span>
                                </li>
                                <li>
                                    <Link to="pen">Telefon qabları</Link>
                                    <span>3</span>
                                </li>
                                <li>
                                    <Link to="pen">Mobil telefonlar</Link>
                                    <span>3</span>
                                </li>
                                <li>
                                    <Link to="pen">Ekran qoruyucuları</Link>
                                    <span>3</span>
                                </li>
                                <li>
                                    <Link to="pen">Powerbank</Link>
                                    <span>3</span>
                                </li>
                                <li>
                                    <Link to="pen">Planşet və Elektron kitablar</Link>
                                    <span>3</span>
                                </li>
                                <li>
                                    <Link to="pen">Smartfon</Link>
                                    <span>3</span>
                                </li>
                                <li>
                                    <Link to="pen">İkinci əl smartfonlar</Link>
                                    <span>3</span>
                                </li>
                            </ul>

                        </div>
                        <div className="rounded-2xl p-5 mb-5 category-item">
                            <h4 className="text-main-blue font-semibold">Təklif edilən</h4>
                            <ul className="hidden mt-5">
                                <li>
                                    <label htmlFor="new">
                                        <input type="radio" name="suggestion" id="new" />
                                        <span>Ən yenilər</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="sale">
                                        <input type="radio" name="suggestion" id="sale" />
                                        <span>Endirimli məhsullar</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="desc">
                                        <input type="radio" name="suggestion" id="des" />
                                        <span>Ən aşağı qiymət</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="asc">
                                        <input type="radio" name="suggestion" id="asc" />
                                        <span>Ən yuxarı qiymət</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="bestsale">
                                        <input type="radio" name="suggestion" id="bestsale" />
                                        <span>Ən çox satılanlar</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="bestselect">
                                        <input type="radio" name="suggestion" id="bestselect" />
                                        <span>Ən çox seçilənlər</span>
                                    </label>
                                </li>
                            </ul>

                        </div>
                        <div className="rounded-2xl p-5 mb-5 category-item">
                            <h4 className="text-main-blue font-semibold">Brend</h4>
                            <ul className="hidden mt-5">
                                <li>
                                    <label htmlFor="motorola">
                                        <input type="radio" name="brend" id="motorola" />
                                        <span>Motorola</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="poco">
                                        <input type="radio" name="brend" id="poco" />
                                        <span>Poco</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="tecno">
                                        <input type="radio" name="brend" id="tecno" />
                                        <span>Tecno</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="infinix">
                                        <input type="radio" name="brend" id="infinix" />
                                        <span>Infinix</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="realme">
                                        <input type="radio" name="brend" id="realme" />
                                        <span>Realme</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="honor">
                                        <input type="radio" name="brend" id="honor" />
                                        <span>Honor</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="xiaomi">
                                        <input type="radio" name="brend" id="xiaomi" />
                                        <span>Xiaomi</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="apple">
                                        <input type="radio" name="brend" id="apple" />
                                        <span>Apple</span>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="samsung">
                                        <input type="radio" name="brend" id="samsung" />
                                        <span>Samsung</span>
                                    </label>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="w-full lg:w-9/12 flex flex-wrap">
                        {
                            products &&
                            products.map((product) => {
                                return <ProductCard key={product.id} product={product} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;