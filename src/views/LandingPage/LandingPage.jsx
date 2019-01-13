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
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import HeaderLinks from "components/Header/HeaderLinks";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

// bagian dalam halaman ini
import BagianDeskripsi from "./Bagian/BagianDeskripsi.jsx";
import BagianFitur from "./Bagian/BagianFitur.jsx";

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
    showFeatures: false,
    hover: false
  };

  showFeatures = () => {
    this.setState({ showFeatures: true });
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  };

  componentWillUnmount = () => {
    // document.removeEventListener("mouseover", this.mouseOut);
  };

  mouseOver = () => {
    this.setState({ hover: !this.state.hover });
    // document.body.style.display = "none";
    // const ganti = document.getElementsByClassName(
    //   "classes.navbar_inner_overlay_active"[0]
    // );
    console.log("hover true");
  };

  mouseOut = () => {
    this.setState({ hover: false });
    document.body.style.backgroundColor = "#F3F3F3";
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
            namaBrand="haidok"
            links={
              //ambil style dari classname collapse dari file headerlinks style
              <div className={classes.collapse}>
                <List className={classes.list + " " + classes.mlAuto}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="javascript:void(0)"
                      className={classes.navLink}
                      // onClick={e => e.preventDefault()}
                      color="transparent"
                      onClick={this.mouseOver}
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
                    <Button
                      href="#meru"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="success"
                    >
                      Masuk / Daftar
                    </Button>
                  </ListItem>
                </List>
                {/* <HeaderLinks dropdownHoverColor="info" /> */}
              </div>
            }
            fixed
            changeColorOnScroll={{
              height: 300,
              color: "white"
            }}
            {...rest}
          />
          <div
            className={classNames({
              navbar_inner_overlay_active: this.state.hover,
              navbar_inner_overlay: false
            })}
            // style={{
            //   display: this.state.hover
            //     ? { display: "navbar_inner_overlay_active" }
            //     : { display: "navbar_inner_overlay" }
            // }}
          >
            <Parallax image={require("assets/img/bg-header.jpg")} filter="no">
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={12}
                    md={12}
                    className={classNames(
                      classes.mlAuto,
                      classes.mrAuto,
                      classes.textCenter
                    )}
                  >
                    <div>
                      <Typing
                        speed={50}
                        startDelay={1000}
                        className={classes.title}
                        onFinishedTyping={this.showFeatures}
                        onStartedTyping={() => console.log("started typing")}
                        // onBeforeType={text => console.log("onBeforeType", text)}
                        // onAfterType={text => console.log("onAfterType", text)}
                      >
                        <Delay ms={1000} />
                        <h1 className={classes.title}>
                          Kesehatan Anda prioritas kami
                          <Backspace count={14} delay={750} />
                          {"uang buat kami"}
                        </h1>
                      </Typing>
                      {/* {this.state.showFeatures && (
                        <Typing loop speed={3}>
                          <Delay ms={300} /> */}
                      <h4>
                        <span>
                          Cari, buat janji dengan dokter, tes diagnostik, dan
                          layanan medis dari layar Anda
                          {/* <Reset count={1} delay={750} />
                          atau Ingin pesan obat dan panggil ambulans?
                          <Reset delay={2000} /> */}
                        </span>
                      </h4>
                      {/* </Typing>
                      )} */}
                    </div>

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
                                  placeholder:
                                    "Cari dokter, klinik, rumah sakit"
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
                <BagianDeskripsi />
              </div>
            </div>

            {/* <Footer
            content={
              <div>
                <div className={classes.left}>
                  <List className={classes.list}>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.tokopedia.com/people/9552568?nref=acchead"
                        className={classes.block}
                      >
                        Meru Rendy Wirawan
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.tokopedia.com/semeru-second"
                        className={classes.block}
                      >
                        About us
                      </a>
                    </ListItem>
                    <ListItem className={classes.inlineBlock}>
                      <a
                        href="https://www.creative-tim.com/license"
                        className={classes.block}
                      >
                        Licenses
                      </a>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.right}>
                  &copy; {1900 + new Date().getYear()} , made with{" "}
                  <Favorite className={classes.icon} /> by{" "}
                  <a href="https://www.creative-tim.com">Creative Tim</a> for a
                  better web.
                </div>
              </div>
            }
          /> */}
            <Footer
              theme="white"
              content={
                <div
                  className={classNames(classes.pullCenter, classes.copyRight)}
                >
                  Copyright &copy; {1900 + new Date().getYear()}{" "}
                  <a href="https://www.tokopedia.com/people/9552568?nref=acchead">
                    Meru RW
                  </a>{" "}
                  All Rights Reserved.
                </div>
              }
            >
              <div className={classes.footer}>
                <GridContainer>
                  <GridItem xs={12} sm={2} md={2}>
                    <h5>Tentang Kami</h5>
                    <ul className={classes.linksVertical}>
                      <li>
                        <a href="https://www.tokopedia.com/people/9552568?nref=acchead">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tokopedia.com/people/9552568?nref=acchead">
                          Tentang
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tokopedia.com/people/9552568?nref=acchead">
                          Karir
                        </a>
                      </li>
                      <li>
                        <a href="https://www.tokopedia.com/people/9552568?nref=acchead">
                          Hubungi Kami
                        </a>
                      </li>
                    </ul>
                  </GridItem>
                  <GridItem xs={12} sm={2} md={2}>
                    <h5>Untuk Pasien</h5>
                    <ul className={classes.linksVertical}>
                      <li>
                        <a href="#meru">Cara Mendaftar</a>
                      </li>
                      <li>
                        <a href="#meru">Info Kesehatan</a>
                      </li>
                      <li>
                        <a href="#meru">Buat Janji</a>
                      </li>
                      <li>
                        <a href="#meru">Tanya Dokter</a>
                      </li>
                      <li>
                        <a href="#meru">Catatan Medis</a>
                      </li>
                      <li>
                        <a href="#meru">Riwayat Transaksi</a>
                      </li>
                    </ul>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <h5>Sosial Media</h5>
                    <div className={classes.socialFeed}>
                      <div>
                        <i className="fab fa-twitter" />
                        <p>Bagaimana cara efisien untuk menghubungi dokter.</p>
                      </div>
                      <div>
                        <i className="fab fa-twitter" />
                        <p>haidok adalah aplikasi terbaik masa kini.</p>
                      </div>
                      <div>
                        <i className="fab fa-facebook-square" />
                        <p>
                          25 juta orang telah menggunakan haidok di seluruh
                          dunia.
                        </p>
                      </div>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <h5>Ikuti kami di</h5>
                    <ul className={classes.socialButtons}>
                      <li>
                        <Button
                          justIcon
                          simple
                          href="https://github.com/meru28"
                          target="_blank"
                          color="github"
                        >
                          <i className="fab fa-github" />
                        </Button>
                      </li>
                      <li>
                        <Button
                          justIcon
                          simple
                          href="https://www.facebook.com/meruw.ruw"
                          color="facebook"
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                      </li>
                      <li>
                        <Button justIcon simple href="#meru" color="dribbble">
                          <i className="fab fa-dribbble" />
                        </Button>
                      </li>
                      <li>
                        <Button justIcon simple href="#meru" color="google">
                          <i className="fab fa-google-plus-g" />
                        </Button>
                      </li>
                      <li>
                        <Button
                          justIcon
                          simple
                          href="https://www.instagram.com/meru_rendy/"
                          target="_blank"
                          color="instagram"
                        >
                          <i className="fab fa-instagram" />
                        </Button>
                      </li>
                    </ul>
                    <h5>Jumlah pengguna</h5>
                    <h4>
                      14.521 <small>Pasien</small>
                    </h4>
                    <h4>
                      1.423.183 <small>Transaksi</small>
                    </h4>
                  </GridItem>
                </GridContainer>
              </div>
            </Footer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
