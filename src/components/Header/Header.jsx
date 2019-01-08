import React, { Component } from "react";
import { Link } from "react-router-dom";
//nodejs library buat gabungin objek classes
import classNames from "classnames";
//nodejs library utk validasi props atau setting tipe properti komponen
import PropTypes from "prop-types";
//@material-ui/core komponen
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
//@material-ui/icons
import { Menu, Close } from "@material-ui/icons";
//core komponen headerStyle
import headerStyle from "assets/jss/rs-kit/components/headerStyle.jsx";

class Header extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  componentDidMount = () => {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.rubahWarnaHeader);
    }
  };

  rubahWarnaHeader = () => {
    const { classes, color, changeColorOnScroll } = this.props;

    if (window.pageYOffset >= changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
      console.log("scroll mencapai 300:");
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
      console.log("scroll titik 0:");
    }
  };

  componentWillUnmount = () => {
    if (this.props.changeColorOnScroll) {
      window.removeEventListener("scroll", this.rubahWarnaHeader);
    }
  };

  render() {
    const { classes, color, links, namaBrand, fixed, absolute } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed
    });
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          <Button className={classes.title}>
            <Link to="/">{namaBrand}</Link>
          </Button>
          <Hidden smDown implementation="css" className={classes.hidden}>
            <div className={classes.collapse}>{links}</div>
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.closeButtonDrawer}
            >
              <Close />
            </IconButton>
            <div className={classes.appResponsive}>{links}</div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "ungu",
    "tosca",
    "hijau",
    "oranye",
    "danger",
    "transparent",
    "white",
    "rose",
    "hitam"
  ]),
  links: PropTypes.node,
  namaBrand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  //function rubahWarnaHeader akan menyebabkan header berubah warna dari
  //this.props.color ke changeColorOnScroll.color
  //ketika window.pageYOffset lebih tinggi atau sama dengan
  //changeColorOnScroll.height dan ketika lebih kecil dari
  //changeColorOnScroll.height maka akan kembali this.props.color (transparent)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "ungu",
      "tosca",
      "hijau",
      "oranye",
      "danger",
      "transparent",
      "white",
      "rose",
      "hitam"
    ]).isRequired
  })
};

export default withStyles(headerStyle)(Header);
