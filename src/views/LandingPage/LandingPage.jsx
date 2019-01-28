import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import compose from "recompose/compose";
import titleCase from "title-case";
//nodejs Libraty utk gabungin objek classes
import classNames from "classnames";
// @material-ui/core komponen
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
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
import HeaderTampil from "components/Header/HeaderTampil.jsx";
const API_KEY = "AIzaSyCWpybRRncq5SBB1g0KbgtOZxCHQEc63Kw";

class LandingPage extends Component {
  state = {
    showFeatures: false,
    nama: null,
    place: null
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

  render() {
    //deklarasi props classes dan ditampung di rest
    const { to, staticContext, classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        <div className={classes.sectionBlank} id="blanksection" />
        {/* HEADER MULAI */}
        <div>
          <HeaderTampil />
          <div className={classes.main}>
            <div className={classes.pageHeader}>
              <Parallax image={require("assets/img/bg-header.jpg")} filter="no">
                <div className={classes.conatinerHeader2}>
                  <GridContainer>
                    <GridItem
                      xs={12}
                      sm={10}
                      md={10}
                      className={classNames(
                        classes.mlAuto,
                        classes.mrAuto,
                        classes.textCenter
                      )}
                    >
                      {/* <Typing
                        speed={50}
                        startDelay={1000}
                        className={classes.title}
                        onFinishedTyping={this.showFeatures}
                        onStartedTyping={() => console.log("started typing")}
                      >
                        <Delay ms={1000} /> */}
                      <h1 className={classes.title}>
                        Selamat datang di haidok,{" "}
                        {titleCase(this.props.username)}
                        {/* <Backspace count={30} delay={750} />
                        {"Semoga Anda sehat selalu"} */}
                      </h1>
                      {/* </Typing> */}
                      <h4>
                        Cari, buat janji dengan dokter, tes diagnostik, dan
                        layanan medis dari layar Anda
                      </h4>
                    </GridItem>
                    <GridItem
                      xs={12}
                      sm={10}
                      md={10}
                      className={classNames(classes.mlAuto, classes.mrAuto)}
                    >
                      <Card raised className={classes.card}>
                        <CardBody formHorizontal>
                          <form>
                            <GridContainer>
                              <GridItem xs={10} sm={4} md={4}>
                                <CustomInput
                                  id="name"
                                  inputProps={{
                                    placeholder: "Cari lokasi"
                                  }}
                                  formControlProps={{
                                    fullWidth: true,
                                    className: classes.formControl
                                  }}
                                />
                              </GridItem>
                              <GridItem xs={12} sm={5} md={5}>
                                <CustomInput
                                  id="email"
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
            </div>
          </div>
          {/* HEADER BERAKHIR */}

          {/* CONTENT MULAI COY */}
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <BagianDeskripsi />
              {/* <BagianFitur /> */}
            </div>
          </div>
          {/* CONTENT BERAKHIR */}
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

          {/* FOOTER MULAI COY */}
          <div>
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
          {/* FOOTER BERAKHIR */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { username: state.auth.username };
};

export default compose(
  withStyles(landingPageStyle, {
    name: "LandingPage"
  }),
  connect(
    mapStateToProps,
    {}
  )
)(LandingPage);
