import LandingPage from "views/LandingPage/LandingPage.jsx";
import SignUpPage from "views/SignUpPage/SignUpPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";

var indexRoutes = [
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/signup-page", name: "SignUpPage", component: SignUpPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
