import React, { Component } from "react";
import { Link } from "react-router-dom";
import compose from "recompose/compose";
import { connect } from "react-redux";
import Header from "components/Header/Header.jsx";
import Button from "components/CustomButtons/Button.jsx";

//@material ui core
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

//komponen gua
import LoginModal from "components/Modal/LoginModal.jsx";
import HeaderLinks from "components/Header/HeaderLinks";

//jss style
import headerTampilStyle from "assets/jss/rs-kit/components/headerTampilStyle";

const dasboardRoutes = [];

class HeaderTampil extends Component {
  render() {
    const { to, staticContext, classes, ...rest } = this.props;
    if (this.props.username === "") {
      return (
        <div>
          <Header
            absolute
            color="transparent"
            routes={dasboardRoutes}
            namaBrand="haidok"
            links={
              //ambil style dari classname collapse dari file headerlinks style
              <div className={classes.collapse}>
                <List className={classes.list + " " + classes.mlAuto}>
                  <ListItem className={classes.listItem}>
                    <Button
                      className={classes.navLink}
                      // onClick={e => e.preventDefault()}
                      color="transparent"
                      // onMouseOut={console.log("hover out")}
                    >
                      Info Kesehatan
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#meru"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Chat Dokter
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#meru"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Catatan Medis
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#meru"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Tanya Dukun
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button className={classes.navLink} color="success">
                      <Link to="/signup-page" style={{ color: "white" }}>
                        Daftar
                      </Link>
                    </Button>
                  </ListItem>
                </List>
                <LoginModal />
              </div>
            }
            fixed
            changeColorOnScroll={{
              height: 300,
              color: "white"
            }}
            {...rest}
          />
        </div>
      );
    }
    return (
      <div>
        <Header
          color="transparent"
          routes={dasboardRoutes}
          namaBrand="haidok"
          links={
            //ambil style dari classname collapse dari file headerlinks style
            <div className={classes.collapse}>
              <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                  <Button
                    className={classes.navLink}
                    // onClick={e => e.preventDefault()}
                    color="transparent"
                    // onMouseOut={console.log("hover out")}
                  >
                    Info Kesehatan
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#meru"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Chat Dokter
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#meru"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Catatan Medis
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    href="#meru"
                    className={classes.navLink}
                    onClick={e => e.preventDefault()}
                    color="transparent"
                  >
                    Tanya Dukun
                  </Button>
                </ListItem>
              </List>
              <HeaderLinks dropdownHoverColor="info" />
            </div>
          }
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "white"
          }}
          {...rest}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { username: state.auth.username };
};

export default compose(
  withStyles(headerTampilStyle, {
    name: "HeaderTampil"
  }),
  connect(
    mapStateToProps,
    {}
  )
)(HeaderTampil);
