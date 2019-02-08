import React, { Component } from "react";
import ReactCodeInput from "react-code-input";

//komponen
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import verifyPageStyle from "assets/jss/rs-kit/views/verifyPageStyle.jsx";

class VerifyPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header absolute color="hijau" judulCenter="Verifikasi" />
        <div className={classes.pageHeader}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <Card className={classes.cardVerify}>
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <div className={classes.socialLine}>
                      <Button justIcon simple size="lg" color="success">
                        <i class="fas fa-mobile-alt" />
                      </Button>
                    </div>
                    <h4 className={classes.cardTitle}>
                      Masukkan Kode Verifikasi
                    </h4>
                    <GridContainer justify="center">
                      <GridItem xs={10} sm={10} md={10}>
                        <p
                          className={`${classes.description} ${
                            classes.textCenter
                          }`}
                        >
                          Kode verifikasi telah dikirimkan melalui SMS ke
                        </p>
                      </GridItem>
                    </GridContainer>
                    <CardBody>
                      <GridContainer justify="center">
                        <ReactCodeInput
                          type="number"
                          fields={6}
                          onComplete={this.handleComplete}
                        />
                      </GridContainer>
                    </CardBody>

                    <div
                      className={`${classes.description} ${classes.textCenter}`}
                    >
                      <Button color="success" size="md" type="submit">
                        Verifikasi
                      </Button>
                      <p
                        className={`${classes.description} ${
                          classes.textCenter
                        }`}
                      >
                        Kirim ulang kode verifikasi
                      </p>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(verifyPageStyle)(VerifyPage);
