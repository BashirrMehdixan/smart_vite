import { Link } from "react-router-dom";

// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// CSS
import "./css/Footer.css";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-main-blue footer-section py-10">
                    <div className="container">
                        <ul className="hidden lg:flex items-center justify-center flex-wrap gap-8 text-3xl text-main-blue social-menu">
                            <li>
                                <Link to="/">
                                    <FaFacebook />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FaInstagram />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FaTwitter />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FaYoutube />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FaLinkedin />
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <FaWhatsapp />
                                </Link>
                            </li>
                        </ul>
                        <div className="flex justify-center flex-wrap my-5 text-white site-map">
                            <div className="w-full md:w-1/2 lg:w-1/5 my-5 map-block">
                                <h6 className="pb-5 font-semibold head-sm">
                                    Məlumat
                                </h6>
                                <ul className="hidden text-sm md:block">
                                    <li>
                                        <Link to="/about">Haqqımızda</Link>
                                    </li>
                                    <li>
                                        <Link to="/branches">Filiallar</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">Əlaqə</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/5 my-5 map-block">
                                <h6 className="pb-5 font-semibold head-sm">
                                    Fəaliyyət
                                </h6>
                                <ul className="hidden sm:text-sm md:block">
                                    <li>
                                        <Link to="/about">Kompaniyalar</Link>
                                    </li>
                                    <li>
                                        <Link to="/branches">Çatdırılma</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">Zəmanət</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/5 my-5 map-block">
                                <h6 className="pb-5 font-semibold head-sm">
                                    Dəstək
                                </h6>
                                <ul className="hidden sm:text-sm md:block">
                                    <li>
                                        <Link to="/about">Vakansiya</Link>
                                    </li>
                                    <li>
                                        <Link to="/branches">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact-us">Servis</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/5 my-5 map-block">
                                <h6 className="pb-5 font-semibold head-sm">
                                    Sosial şəbəkələr
                                </h6>
                                <ul className="hidden sm:text-sm md:block">
                                    <li>
                                        <Link to="/">Facebook</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Instagram</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Twitter</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Youtube</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Linkedin</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Whatsapp</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap bottom-footer py-5 px-3">
                            <div className="w-full lg:w-1/3 logo">
                                <Link to="/">
                                    <img src={"../assets/images/logo-white.png"} alt="" />
                                </Link>
                            </div>
                            <form className="w-full lg:w-2/3">
                                <div className="relative form-group">
                                    <input
                                        type="text"
                                        placeholder="E-poçt"
                                        className="w-full border border-white bg-transparent text-white rounded-2xl text-right py-4 px-8 placeholder-white focus:outline-none"
                                    />
                                    <button type="submit" className="absolute bg-white text-main-text rounded-2xl py-4 px-8 font-semibold">Abonə ol</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;