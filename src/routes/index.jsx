import LandingPage from "views/LandingPage/LandingPage.jsx";
import SignUpPage from "views/SignUpPage/SignUpPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import VerifyPage from "views/VerifyPage/VerifyPage.jsx";

var indexRoutes = [
  { path: "/verifikasi", name: "VerifyPage", component: VerifyPage },
  { path: "/masuk", name: "LoginPage", component: LoginPage },
  { path: "/daftar", name: "SignUpPage", component: SignUpPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
