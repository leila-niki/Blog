import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import NavBar from "./NavBar";
import "./style.css"

const Layout = ({children}) => {
    return(
        <>
            <Header />
            <div className="app-content">
                <Main>
                    {children}
                </Main>
                <NavBar />
            </div>
            <Footer />
        </>
    )
}

export default Layout;