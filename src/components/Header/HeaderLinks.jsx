/* eslint-disable */
import React, { Component } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import compose from "recompose/compose";
import titleCase from "title-case";
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
  ViewDay,
  AccountBalance,
  ArtTrack,
  ViewQuilt,
  LocationOn,
  Fingerprint,
  AttachMoney
} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/rs-kit/components/headerLinksStyle.jsx";
import { renderComponent } from "recompose";

class HeaderLinks extends Component {
  easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  smoothScroll = (e, target) => {
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
  scrollGo = (element, to, duration) => {
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
    console.log(this.props.username);
  };
  // var onClickSections = {};

  render() {
    const { classes, dropdownHoverColor } = this.props;
    return (
      <List className={classes.list + " " + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            hoverColor={dropdownHoverColor}
            buttonText={titleCase(this.props.username)}
            buttonProps={{
              className: classes.navLink,
              color: "success"
            }}
            // buttonIcon={ViewCarousel}
            dropdownList={[
              <Link to="/about-us" className={classes.dropdownLink}>
                <i
                  className={classNames(
                    "far fa-calendar-check",
                    classes.dropdownIcons
                  )}
                />{" "}
                Janji Saya
              </Link>,
              <Link to="/blog-post" className={classes.dropdownLink}>
                <i
                  className={classNames(
                    "far fa-file-alt",
                    classes.dropdownIcons
                  )}
                />{" "}
                Tes Saya
              </Link>,
              <Link to="/blog-posts" className={classes.dropdownLink}>
                <i
                  className={classNames(
                    "fas fa-capsules",
                    classes.dropdownIcons
                  )}
                />{" "}
                Pesanan Obat
              </Link>,
              <Link to="/contact-us" className={classes.dropdownLink}>
                <i
                  className={classNames(
                    "fas fa-notes-medical",
                    classes.dropdownIcons
                  )}
                />{" "}
                Catatan Medis
              </Link>,
              <Link to="/landing-page" className={classes.dropdownLink}>
                <i
                  className={classNames(
                    "far fa-comments",
                    classes.dropdownIcons
                  )}
                />{" "}
                Konsultasi Online
              </Link>,
              <Link to="/login-page" className={classes.dropdownLink}>
                <i
                  className={classNames(
                    "fas fa-sliders-h",
                    classes.dropdownIcons
                  )}
                />{" "}
                Pengaturan
              </Link>,
              <Link to="/pricing" className={classes.dropdownLink}>
                <i
                  className={classNames(
                    "fas fa-sign-out-alt",
                    classes.dropdownIcons
                  )}
                />{" "}
                Keluar
              </Link>
            ]}
          />
        </ListItem>
      </List>
    );
  }
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

const mapStateToProps = state => {
  return { username: state.auth.username };
};

export default compose(
  withStyles(headerLinksStyle, {
    name: "HeaderLinks"
  }),
  connect(
    mapStateToProps,
    {}
  )
)(HeaderLinks);
