import { Link } from "react-router";
import QueryInput from "../../Components/queryInput/QueryInput";
import RecentSearch from "../../Components/recentSearch/RecentSearch";

const NavBar = () => {
    return(
        <nav className="w-1/4 bg-white py-3 px-6 h-full">
            <QueryInput />
            <header className="font-medium text-lg py-3">
                <h3>لینک های بلاگ</h3>
            </header>
            <ul className="text-base text-blue-600">
                <li className="pb-1">
                    <Link to="/">صفحه نخست</Link>
                </li>
                <li className="pb-1">
                    <Link to="/about-us">درباره من</Link>
                </li>
                <li className="pb-1">
                    <Link to="/contact-us">تماس با من</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar