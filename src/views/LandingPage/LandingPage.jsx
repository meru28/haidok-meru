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
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import Typing, {
  Backspace,
  Delay,
  Reset
} from "components/TypingAnimation/Mode";

//jsx styling
import landingPageStyle from "assets/jss/rs-kit/views/landingPageStyle.jsx";

const dasboardRoutes = [];

class LandingPage extends Component {
  state = {
    showFeatures: false
  };

  showFeatures = () => {
    this.setState({ showFeatures: true });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  };
  render() {
    //deklarasi props classes dan ditampung di rest
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        <div className={classes.sectionBlank} id="blanksection" />
        <div>
          <Header
            color="transparent"
            routes={dasboardRoutes}
            namaBrand="dentCare"
            links={
              <div className={classes.collapse}>
                <List className={classes.list + " " + classes.mlAuto}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Info Kesehatan
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Chat Dokter
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Catatan Medis
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Tanya Dokter
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
          <Parallax image={require("assets/img/bg-header.jpg")} filter="">
            <div className={classes.container}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={6}
                  md={6}
                  className={classNames(
                    classes.mlAuto,
                    classes.mrAuto,
                    classes.textCenter
                  )}
                >
                  <Typing
                    speed={50}
                    startDelay={1000}
                    className={classes.title}
                    onFinishedTyping={this.showFeatures}
                    onStartedTyping={() => console.log("started typing")}
                    onBeforeType={text => console.log("onBeforeType", text)}
                    onAfterType={text => console.log("onAfterType", text)}
                  >
                    <Delay ms={1000} />
                    <h1 className={classes.title}>
                      <span />
                      Lagi nggak enak body?
                      <Backspace count={10} delay={750} />
                      {"enak badan?"}
                    </h1>
                  </Typing>
                  {this.state.showFeatures && (
                    <Typing loop speed={6}>
                      <Delay ms={1000} />
                      <h4>
                        <span>
                          Cari, buat janji dengan dokter, tes diagnostik, dan
                          layanan medis dari komputer Anda
                          <Reset count={1} delay={750} />
                          Atau Ingin pesan obat dan panggil ambulans?
                          <Reset delay={1000} />
                        </span>
                      </h4>
                    </Typing>
                  )}
                  {/* <h4>
                    Cari dan buat janji dengan dokter, tes diagnostik, dan
                    layanan medis dapat diraih dengan mudah
                  </h4> */}
                  {/* <Button
                    color="danger"
                    size="lg"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-play" />
                    Watch video
                  </Button> */}
                  <Card raised className={classes.card}>
                    <CardBody formHorizontal>
                      <form>
                        <GridContainer>
                          <GridItem xs={12} sm={3} md={3}>
                            <CustomInput
                              id="name"
                              inputProps={{
                                placeholder: "Cari dokter"
                              }}
                              formControlProps={{
                                fullWidth: true,
                                className: classes.formControl
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={3} md={3}>
                            <CustomInput
                              id="email"
                              inputProps={{
                                placeholder: "Klinik"
                              }}
                              formControlProps={{
                                fullWidth: true,
                                className: classes.formControl
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={3} md={3}>
                            <CustomInput
                              id="password"
                              inputProps={{
                                placeholder: "Rumah sakit"
                                // type: "password"
                              }}
                              formControlProps={{
                                fullWidth: true,
                                className: classes.formControl
                              }}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={3} md={3}>
                            <Button
                              block
                              color="twitter"
                              className={classes.button}
                            >
                              Cari
                            </Button>
                          </GridItem>
                        </GridContainer>
                      </form>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
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
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
