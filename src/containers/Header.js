import { NavLink } from "react-router-dom";

const Header = () => {
    return (<header className="mb-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <NavLink
                            to="/"
                            className="nav-link"
                        >Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/products"
                            className="nav-link"
                        >Products
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>);
}

export default Header;