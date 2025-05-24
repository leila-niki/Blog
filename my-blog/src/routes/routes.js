import HomePage from "../Pages/HomePage";
import PostPage from "../Pages/PostPage";
import AboutPage from "../Pages/aboutPage/AboutPage";
import ContactPage from "../Pages/contactPage/ContactPage";
import LoginPage from "../Pages/loginPage/LoginPage";
import SignUpPage from "../Pages/signUpPage/SignUpPage";


const appRoutes = [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/post/:id',
      element: <PostPage />
    },
    {
      path: '/sign-up',
      element: <SignUpPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/about-us',
      element: <AboutPage />
    },
    {
      path: '/contact-us',
      element: <ContactPage />
    },
    
];

export default appRoutes;