import { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Css
import "swiper/css";
import "./css/HomeSlide.css";

const HomeSlide = () => {
    const [active, setActive] = useState(false);

    const showBtn = () => {
        active ? setActive(false) : setActive(true);
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="flex flex-wrap gap-4">
                        <div className="w-full lg:w-3/12 home-left">
                            <ul className="rounded-s-xl category-menu">
                                <li>
                                    <img src="../assets/images/category/smartphones.png" alt="Smartfon və Planşetlər" />
                                    <button onClick={showBtn}>
                                        Smartfon və Planşetlər
                                    </button>
                                    <ul className={`${active ? 'flex' : 'hidden'} items-start flex-wrap category-menu-sub`}>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/products">
                                                        <h4>
                                                            Smartfonlar
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/products">Apple</Link>
                                                </li>
                                                <li>
                                                    <Link to="honor">Honor</Link>
                                                </li>
                                                <li>
                                                    <Link to="infinix">Infinix</Link>
                                                </li>
                                                <li>
                                                    <Link to="motorola">Motorola</Link>
                                                </li>
                                                <li>
                                                    <Link to="poco">Poco</Link>
                                                </li>
                                                <li>
                                                    <Link to="realme">Realme</Link>
                                                </li>
                                                <li>
                                                    <Link to="samsung">Samsung</Link>
                                                </li>
                                                <li>
                                                    <Link to="tecno">Tecno</Link>
                                                </li>
                                                <li>
                                                    <Link to="xiaomi">Xiaomi</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/smartfonlar">
                                                        <h4>
                                                            Mobil Telefonlar
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="apple">Nokia</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/smartfonlar">
                                                        <h4>
                                                            Planşet və elektron kitablar
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="apple">Apple</Link>
                                                </li>
                                                <li>
                                                    <Link to="honor">Honor</Link>
                                                </li>
                                                <li>
                                                    <Link to="infinix">Lenovo</Link>
                                                </li>
                                                <li>
                                                    <Link to="motorola">Microsoft</Link>
                                                </li>
                                                <li>
                                                    <Link to="poco">PocketBook</Link>
                                                </li>
                                                <li>
                                                    <Link to="realme">Xiaomi</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/smartfonlar">
                                                        <h4>
                                                            İkinci əl  smartfonlar
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="apple">Apple</Link>
                                                </li>
                                                <li>
                                                    <Link to="honor">Google Pixel</Link>
                                                </li>
                                                <li>
                                                    <Link to="infinix">Honor</Link>
                                                </li>
                                                <li>
                                                    <Link to="motorola">Huawei</Link>
                                                </li>
                                                <li>
                                                    <Link to="poco">Poco</Link>
                                                </li>
                                                <li>
                                                    <Link to="realme">Realme</Link>
                                                </li>
                                                <li>
                                                    <Link to="samsung">Samsung</Link>
                                                </li>
                                                <li>
                                                    <Link to="tecno">Tecno</Link>
                                                </li>
                                                <li>
                                                    <Link to="xiaomi">Xiaomi</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/smartfonlar">
                                                        <h4>
                                                            Ev və ofis telefonları
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="apple">Panasonic</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/smartfonlar">
                                                        <h4>
                                                            Powerbank
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="apple">Akekiko</Link>
                                                </li>
                                                <li>
                                                    <Link to="honor">Anker</Link>
                                                </li>
                                                <li>
                                                    <Link to="infinix">Baseus</Link>
                                                </li>
                                                <li>
                                                    <Link to="motorola">Celly</Link>
                                                </li>
                                                <li>
                                                    <Link to="poco">Gellius</Link>
                                                </li>
                                                <li>
                                                    <Link to="realme">Joyroom</Link>
                                                </li>
                                                <li>
                                                    <Link to="samsung">Remax</Link>
                                                </li>
                                                <li>
                                                    <Link to="xiaomi">Xiaomi</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/smartfonlar">
                                                        <h4>
                                                            Adapter və USB Kabel
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="apple">Adapter</Link>
                                                </li>
                                                <li>
                                                    <Link to="honor">Anker</Link>
                                                </li>
                                                <li>
                                                    <Link to="infinix">Ansty</Link>
                                                </li>
                                                <li>
                                                    <Link to="motorola">Baseus</Link>
                                                </li>
                                                <li>
                                                    <Link to="poco">Borofone</Link>
                                                </li>
                                                <li>
                                                    <Link to="realme">Celly</Link>
                                                </li>
                                                <li>
                                                    <Link to="samsung">Euroacs</Link>
                                                </li>
                                                <li>
                                                    <Link to="tecno">Gelius</Link>
                                                </li>
                                                <li>
                                                    <Link to="xiaomi">Maycandy</Link>
                                                </li>
                                                <li>
                                                    <Link to="xiaomi">Powerology</Link>
                                                </li>
                                                <li>
                                                    <Link to="xiaomi">Samsung</Link>
                                                </li>
                                                <li>
                                                    <Link to="xiaomi">USB Başlıq</Link>
                                                </li>
                                                <li>
                                                    <Link to="xiaomi">Xiaomi</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/smartfonlar">
                                                        <h4>
                                                            Telefon qabları
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="apple">Apple</Link>
                                                </li>
                                                <li>
                                                    <Link to="honor">Planşet qabları</Link>
                                                </li>
                                                <li>
                                                    <Link to="infinix">Samsung</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/smartfonlar">
                                                        <h4>
                                                            Ekran qoruyucuları
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="apple">Apple</Link>
                                                </li>
                                                <li>
                                                    <Link to="honor">Celly</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="w-1/6">
                                            <ul className="submenu">
                                                <li>
                                                    <Link to="/smartfonlar">
                                                        <h4>
                                                            Qələm
                                                        </h4>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="apple">Apple</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <img src="../assets/images/category/watches.png" alt="Saatlar" />
                                    <button onClick={showBtn}>
                                        Saatlar
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/tv.png" alt="Tv, Audio, Video" />
                                    <button>
                                        Tv, Audio, Video
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/notebooks.png" alt="Kompüter və ofis avadanlıqları" />
                                    <button>
                                        Kompüter və ofis avadanlıqları
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/boyuk-meiset.png" alt="Böyük məişət texnikası" />
                                    <button>
                                        Böyük məişət texnikası
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/kicik-meiset.png" alt="Kiçik məişət texnikası" />
                                    <button>
                                        Kiçik məişət texnikası
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/dryer.png" alt="Şəxsi qulluq və gözəllik" />
                                    <button>
                                        Şəxsi qulluq və gözəllik
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/photo.png" alt="Foto və foto aksesuarları" />
                                    <button>
                                        Foto və foto aksesuarları
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/entertainment.png" alt="Əyləncə" />
                                    <button>
                                        Əyləncə
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/velo.png" alt="Nəqliyyat" />
                                    <button>
                                        Nəqliyyat
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/mebel.png" alt="Mebel" />
                                    <button>
                                        Mebel
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/home.png" alt="Ev əşyaları" />
                                    <button>
                                        Ev əşyaları
                                    </button>
                                </li>
                                <li>
                                    <img src="../assets/images/category/sim.png" alt="Nömrələr" />
                                    <button>
                                        Nömrələr
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full lg:w-8/12 home-right">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                }}
                                modules={[Autoplay]}
                                className="home-slide"
                            >
                                <SwiperSlide>
                                    <Link to="/">
                                        <img src="../assets/images/slider/slider1.jpg" alt="Slider 1" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/">
                                        <img src="../assets/images/slider/slider2.jpg" alt="Slider 2" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/">
                                        <img src="../assets/images/slider/slider3.jpg" alt="Slider 3" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/">
                                        <img src="../assets/images/slider/slider4.jpg" alt="Slider 4" />
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/">
                                        <img src="../assets/images/slider/slider5.jpg" alt="Slider 5" />
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                            <div className="flex flex-wrap py-5">
                                <div className="w-full md:w-1/2">
                                    <Link to="">
                                        <img src="../assets/images/banners/geepas.png" alt="" />
                                    </Link>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <Link to="">
                                        <img src="../assets/images/banners/celly.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default HomeSlide;