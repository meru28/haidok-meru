import LandingPage from "views/LandingPage/LandingPage.jsx";
import SignUpPage from "views/SignUpPage/SignUpPage.jsx";

var indexRoutes = [
  { path: "/signup-page", name: "SignUpPage", component: SignUpPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
