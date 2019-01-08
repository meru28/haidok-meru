import React, { Component } from "react";
//nodejs Libraty utk gabungin objek classes
import classNames from "classnames";
// @material-ui/core komponen
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
// import Footer from "components/Footer/Footer.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
// import Parallax from "components/Parallax/Parallax.jsx";

//jsx styling
import landingPageStyle from "assets/jss/rs-kit/views/landingPageStyle.jsx";
import HeaderLinks from "components/Header/HeaderLinks";

const dasboardRoutes = [];

class LandingPage extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  };
  render() {
    //deklarasi props classes dan ditampung di rest
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="rose"
          routes={dasboardRoutes}
          namaBrand="dentCare"
          links={<HeaderLinks dropdownHoverColor="info" />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "oranye"
          }}
          {...rest}
        />
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing page gaul</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
        <h1>Ini Landing Page Coy</h1>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
