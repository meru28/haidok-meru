import React, { Component } from "react";
//@material ui komponen
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Footer from "components/Footer/Footer.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

//material ui icon
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Favorite from "@material-ui/icons/Favorite";

import signUpPageStyle from "assets/jss/rs-kit/views/signUpPageStyle.jsx";
import image from "assets/img/doc-background.jpg";

class SignUpPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <Card className={classes.cardSignup}>
                  <CardHeader
                    color="success"
                    signup
                    className={classes.cardHeader}
                  >
                    <h3 className={classes.cardTitle}>Daftar</h3>
                    <p>
                      Dapatkan layanan maksimal dari haidok dengan mendaftar
                      sebagai dokter maupun pasien.
                    </p>
                  </CardHeader>
                  <CardBody signup>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={4} md={11}>
                        <InfoArea
                          className={classes.infoArea}
                          title="Pasien"
                          description="Buat akun sebagai pasien untuk buat janji dan ajukan pertanyaan terkait kesehatan."
                          icon={Group}
                          iconColor="rose"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Dokter"
                          description="Haidok memungkinkan Anda beriklan dan mengelola praktik medis Anda."
                          icon={Code}
                          iconColor="primary"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Klinik"
                          description="Haidok dapat membantu menemukan klinik Anda supaya ramai dikunjungi."
                          icon={Timeline}
                          iconColor="info"
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer
            className={classes.footer}
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
                        Tentang
                      </a>
                    </ListItem>
                  </List>
                </div>
                <div className={classes.right}>
                  &copy; {1900 + new Date().getYear()} , made with{" "}
                  <Favorite className={classes.icon} /> by{" "}
                  <a href="https://web.facebook.com/meruw.ruw" target="blank">
                    Unto Clubs
                  </a>{" "}
                  for a better life.
                </div>
              </div>
            }
          />
        </div>
      </div>
    );
  }
}

export default withStyles(signUpPageStyle)(SignUpPage);
