import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/ProductContext";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// Swiper Css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Custom Css
import "./css/ProductDetail.css"

const ProductDetail = () => {
    const products = useContext(ProductContext);
    const params = useParams();
    const product = products && products.find(product => product.id.toString() === params.productId);
    return (
        <>
            {product &&
                <section className="product-detail">
                    <div className="container">
                        <div className="flex items-center shadow-dark-custom rounded-2xl mb-8 propduct-info-box">
                            <div className="w-full md:w-1/2">
                                <div className="product-title">
                                    <div className="left-block text-2xl text-main-text font-bold px-5">
                                        <h3 className="product-category py-3">Apple</h3>
                                        <h3 className="product-name pb-3">{product.title}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="detail-card-swiper py-3"
                                >
                                    <SwiperSlide>
                                        <div className="flex items-center debit-block py-5">
                                            <div className="card-img">
                                                <img src="../assets/images/card-icon/1card.png" alt="" />
                                            </div>
                                            <div className="text-center px-2 font-bold text-xl card-info">
                                                <p className="card-top">
                                                    12 ay x {(product.price / 12).toFixed(2)}
                                                </p>
                                                <p className="font-semibold card-text">Birkartla 12 ay faizsiz</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center debit-block py-5">
                                            <div className="card-img">
                                                <img src={"../assets/images/card-icon/tamkart.png"} alt="" />
                                            </div>
                                            <div className="text-center px-2 font-bold text-xl card-info">
                                                <p className="card-top">
                                                    12 ay x {(product.price / 12).toFixed(2)}
                                                </p>
                                                <p className="font-semibold card-text">Tamkartla 12 ay faizsiz</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center debit-block py-5">
                                            <div className="card-img">
                                                <img src="../assets/images/card-icon/ucard-logo.png" alt="" />
                                            </div>
                                            <div className="text-center px-2 font-bold text-xl card-info">
                                                <p className="card-top">
                                                    12 ay x {(product.price / 12).toFixed(2)}
                                                </p>
                                                <p className="font-semibold card-text">Ucard ilə 12 ay faizsiz</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="flex items-center debit-block py-5">
                                            <div className="card-img">
                                                <img src="../assets/images/card-icon/bolkart-logo.png" alt="" />
                                            </div>
                                            <div className="text-center px-2 font-bold text-xl card-info">
                                                <p className="card-top">
                                                    12 ay x {(product.price / 12).toFixed(2)}
                                                </p>
                                                <p className="font-semibold card-text">Bolkart ilə 12 ay faizsiz</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="product-description">

                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default ProductDetail;