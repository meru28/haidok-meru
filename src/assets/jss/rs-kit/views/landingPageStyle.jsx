import headerLinksStyle from "assets/jss/rs-kit/components/headerLinksStyle.jsx";
import footeerStyle from "assets/jss/rs-kit/views/bagianKomponen/footeerStyle.jsx";
import headerStyle from "assets/jss/rs-kit/views/bagianBagian/headerStyle.jsx";
import {
  container,
  title,
  main,
  mainRaised,
  mrAuto,
  mlAuto
} from "assets/jss/rs-kit.jsx";
import { list } from "postcss";

const landingPageStyle = theme => ({
  ...headerLinksStyle(theme),
  ...footeerStyle(theme),

  container: {
    color: "#FFFFFF",
    ...container,
    zIndex: "2"
  },

  navbar_inner_overlay: {
    left: "0",
    height: "100%",
    width: "100%",
    zIndex: "200",
    display: "block"
  },
  navbar_inner_overlay_active: {
    display: "block",
    opacity: ".3",
    zIndex: "200"
  },

  overlay: {
    height: "100%",
    width: "100%",
    zIndex: "200",
    top: "0",
    left: "0",
    display: "none",
    transition: "0.5s"
  },
  ovactive: {
    display: "block",
    visibility: "visible"
  },
  title: {
    ...title,
    display: "inline",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list2: {
    ...list,
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  textCenter: {
    textAlign: "center"
  },
  mlAuto,
  mrAuto
});

export default landingPageStyle;
