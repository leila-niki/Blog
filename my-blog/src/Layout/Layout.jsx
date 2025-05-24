import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import NavBar from "./NavBar";

const Layout = ({children}) => {
    return(
        <>
            <Header />
            <div className="w-4/5 flex justify-between h-[calc(100vh-275px)] mb-6">
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