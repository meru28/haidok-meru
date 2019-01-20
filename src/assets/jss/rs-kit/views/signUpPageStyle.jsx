import { container, description, cardTitle } from "assets/jss/rs-kit.jsx";

const signupPageStyle = theme => ({
  description,
  cardTitle: {
    ...cardTitle,
    color: "#FFFFFF !important"
  },
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  pageHeader: {
    color: "#fff",
    border: "0",
    height: "100%",
    margin: "0",
    display: "flex!important",
    padding: "80px 0",
    position: "relative",
    minHeight: "100vh",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after": {
      background:
        "linear-gradient(60deg,rgba(31,89,172,.60),rgba(70,98,200,.45))"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  },
  infoArea: {
    padding: " 0px 0px 5px !important"
  },
  cardSignup: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);",
    marginBottom: "-30px",
    padding: "10px 0px"
  },
  textCenter: {
    textAlign: "center"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center"
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
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block",
    "&,& *,& *:hover,& *:focus": {
      color: "#FFFFFF !important"
    }
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    "&,& *,& *:hover,& *:focus": {
      color: "#FFFFFF !important"
    }
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  footer: {
    position: "absolute",
    width: "100%",
    background: "transparent",
    bottom: "0",
    color: "#fff",
    zIndex: "2"
  }
});

export default signupPageStyle;
