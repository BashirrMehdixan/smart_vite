
import { NavLink } from "react-router-dom";
const Breadcrumb = () => {
    return (
        <div className="hidden md:flex text-base space-x-2 p-2 breadcrumb-box">
            <NavLink to="/">Smart Electronics</NavLink>
            <NavLink to="smartfon-ve-plansetler">Smartfon və Planşetlər</NavLink>
            <NavLink to="/products">Smartfonlar</NavLink>
        </div>
    )
}

export default Breadcrumb;