import { Link } from "react-router-dom";


// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoPersonOutline, IoFilterOutline, IoBagOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

// css
import "./css/Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
    const wishCount = useSelector(state => state.wishlist.count)
    return (
        <>
            <header className="bg-main-blue">
                <div className="container">
                    <div className="flex text-xs md:text-sm top-header">
                        <div className="w-full flex items-center left-menu">
                            <ul className="flex">
                                <li>
                                    <Link to="/">Filiallar</Link>
                                </li>
                                <li>
                                    <Link to="/">Kompaniyalar</Link>
                                </li>
                                <li>
                                    <Link to="/">Əlaqə</Link>
                                </li>
                                <li>
                                    <Link to="/">Outlet</Link>
                                </li>
                            </ul>
                            <ul className="hidden lg:flex relative top-social">
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
                        </div>
                        <ul className="relative text-white uppercase">
                            <li className="cursor-pointer flex items-center">
                                <span className="active-lang">Az</span>
                                <IoIosArrowDown />
                            </li>
                            <ul className="absolute text-black bg-white z-10 lang-box hidden">
                                <li>
                                    <Link to="/">Azərbaycanca</Link>
                                </li>
                                <li>
                                    <Link to="/">English</Link>
                                </li>
                                <li>
                                    <Link to="/">Pусский</Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </header>
            <nav>
                <div className="container">
                    <ul className="flex items-center py-5 text-2xl font-semibold navbar">
                        <li>
                            <Link to='/'>
                                <img src={"../assets/images/logo.svg"} alt="" />
                            </Link>
                        </li>
                        <li className="hidden lg:block flex-1">
                            <form>
                                <input type="search" className="w-full font-thin border text-sm border-border-color rounded-2xl shadow-dark-custom text-main-text py-2 px-5 focus:outline-none nav-search" placeholder="Axtarış" />
                            </form>
                        </li>
                        <li className="hidden lg:block">
                            <Link to="tel:*2999" className="flex flex-col justify-center items-center text-main-blue">
                                <MdLocalPhone className="rotate-133" />
                                <span>*2999</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <IoPersonOutline />
                            </Link>
                        </li>
                        <li>
                            <Link to="/compare">
                                <IoFilterOutline />
                            </Link>
                            <span className="count">0</span>
                        </li>
                        <li>
                            <Link to="/wishlist">
                                <CiHeart />
                            </Link>
                            <span className="count">{wishCount}</span>
                        </li>
                        <li>
                            <Link to="/cart">
                                <IoBagOutline />
                            </Link>
                            <span className="count">0</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;