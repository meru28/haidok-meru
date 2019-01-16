/* eslint-disable */
import React, { Component } from "react";
//nodejs library utk validasi props atau setting tipe properti komponen
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {
  Apps,
  ShoppingCart,
  ViewDay,
  Dns,
  Build,
  People,
  Assignment,
  MonetizationOn,
  Chat,
  Call,
  ViewCarousel,
  AccountBalance,
  ArtTrack,
  ViewQuilt,
  LocationOn,
  Fingerprint,
  AttachMoney,
  Store,
  AccountCircle,
  PersonAdd,
  Layers,
  ShoppingBasket,
  LineStyle
} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/rs-kit/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    animateScroll = () => {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { classes, dropdownHoverColor } = props;
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        {/* <Modal /> */}
        {/* <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Janji Temu"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              <LineStyle className={classes.dropdownIcons} /> Presentation Page
            </Link>,
            <Link to="/components" className={classes.dropdownLink}>
              <Layers className={classes.dropdownIcons} />
              All components
            </Link>,
            <a
              href="https://demos.creative-tim.com/material-kit-pro-react/#/documentation/tutorial"
              target="_blank"
              className={classes.dropdownLink}
            >
              <Icon className={classes.dropdownIcons}>content_paste</Icon>
              Documentation
            </a>
          ]}
        /> */}
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Chat dokter"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link
              to="/sections#headers"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "headers")}
            >
              <Dns className={classes.dropdownIcons} /> Headers
            </Link>,
            <Link
              to="/sections#features"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "features")}
            >
              <Build className={classes.dropdownIcons} /> Features
            </Link>,
            <Link
              to="/sections#blogs"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "blogs")}
            >
              <ListIcon className={classes.dropdownIcons} /> Blogs
            </Link>,
            <Link
              to="/sections#teams"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "teams")}
            >
              <People className={classes.dropdownIcons} /> Teams
            </Link>,
            <Link
              to="/sections#projects"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "projects")}
            >
              <Assignment className={classes.dropdownIcons} /> Projects
            </Link>,
            <Link
              to="/sections#pricing"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "pricing")}
            >
              <MonetizationOn className={classes.dropdownIcons} /> Pricing
            </Link>,
            <Link
              to="/sections#testimonials"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "testimonials")}
            >
              <Chat className={classes.dropdownIcons} /> Testimonials
            </Link>,
            <Link
              to="/sections#contacts"
              className={classes.dropdownLink}
              onClick={e => smoothScroll(e, "contacts")}
            >
              <Call className={classes.dropdownIcons} /> Contacts
            </Link>
          ]}
        />
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Masuk / Daftar"
          buttonProps={{
            className: classes.navLink,
            color: "success"
          }}
          // buttonIcon={ViewCarousel}
          dropdownList={[
            <Link to="/about-us" className={classes.dropdownLink}>
              <AccountBalance className={classes.dropdownIcons} /> About Us
            </Link>,
            <Link to="/blog-post" className={classes.dropdownLink}>
              <ArtTrack className={classes.dropdownIcons} /> Blog Post
            </Link>,
            <Link to="/blog-posts" className={classes.dropdownLink}>
              <ViewQuilt className={classes.dropdownIcons} /> Blog Posts
            </Link>,
            <Link to="/contact-us" className={classes.dropdownLink}>
              <LocationOn className={classes.dropdownIcons} /> Contact Us
            </Link>,
            <Link to="/landing-page" className={classes.dropdownLink}>
              <ViewDay className={classes.dropdownIcons} /> Landing Page
            </Link>,
            <Link to="/login-page" className={classes.dropdownLink}>
              <Fingerprint className={classes.dropdownIcons} /> Login Page
            </Link>,
            <Link to="/pricing" className={classes.dropdownLink}>
              <AttachMoney className={classes.dropdownIcons} /> Pricing Page
            </Link>,
            <Link to="/shopping-cart-page" className={classes.dropdownLink}>
              <ShoppingBasket className={classes.dropdownIcons} /> Shopping Cart
            </Link>,
            <Link to="/ecommerce-page" className={classes.dropdownLink}>
              <Store className={classes.dropdownIcons} /> Ecommerce Page
            </Link>,
            <Link to="/product-page" className={classes.dropdownLink}>
              <ShoppingCart className={classes.dropdownIcons} /> Product Page
            </Link>,
            <Link to="/profile-page" className={classes.dropdownLink}>
              <AccountCircle className={classes.dropdownIcons} /> Profile Page
            </Link>,
            <Link to="/signup-page" className={classes.dropdownLink}>
              <PersonAdd className={classes.dropdownIcons} /> Signup Page
            </Link>
          ]}
        />
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
          <Button
            href="https://www.creative-tim.com/product/material-kit-pro-react"
            color={window.innerWidth < 960 ? "info" : "white"}
            target="_blank"
            className={classes.navButton}
            round
          >
            <ShoppingCart className={classes.icons} /> buy now
          </Button>
        </ListItem> */}
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
