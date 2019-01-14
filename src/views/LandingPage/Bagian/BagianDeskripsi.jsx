import React, { Component } from "react";
//HOC @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import ChatBubble from "@material-ui/icons/ChatBubble";
import Healing from "@material-ui/icons/Healing";
import NearMe from "@material-ui/icons/NearMe";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/rs-kit/views/bagianLandingPage/productStyle.jsx";

class BagianDeskripsi extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>haidok menjamin kesehatan Anda</h2>
            <h5 className={classes.description}>
              Temukan dokter, rumah sakit, klinik, apotek terdekat dan buat
              janji dalam hitungan detik, kamipun dapat membantu menemukan
              pengobatan alternatif.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Gratis Chat Dokter"
                description="Chat kapanpun, dimanapun, semau Anda secara gratis, meskipun kadang-kadang tidak gratis juga."
                icon={ChatBubble}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Dokter Terverifikasi"
                description="Dokter-dokter kami adalah dokter yang hebat, jago merawat pasien dengan senang hati."
                icon={Healing}
                iconColor="primary"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Navigasi"
                description="Haidok membantu Anda untuk menemukan dokter, rumah sakit, klinik, dan apotek terdekat di sekeliling Anda."
                icon={NearMe}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(BagianDeskripsi);
