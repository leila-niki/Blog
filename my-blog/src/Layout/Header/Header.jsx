import Button from "../../Components/button/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate  = useNavigate();
    return(
        <header className="w-4/5 py-8 flex justify-between">
            <h1 className="font-bold text-3xl">وبلاگ</h1>
            <div>
                <Button className="ml-3" onClick={() => navigate("/login")}>ورود</Button>
                <Button onClick={() => navigate("/sign-up")}>ثبت نام</Button>
            </div>
        </header>
    )
}

export default Header;