import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
//komponen @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
//@materia-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";

//komponen
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Footer from "components/Footer/Footer.jsx";

import loginPageStyle from "assets/jss/rs-kit/views/loginPageStyle.jsx";
import image from "assets/img/doc-background2.jpg";

class LoginPage extends Component {
  state = {
    cardAnimaton: "cardHidden",
    value: ""
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(() => {
      this.setState({ cardAnimaton: "" });
    }, 700);
  }

  render() {
    const { classes } = this.props;
    return (
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
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes.cardLogin}>
                <form className={classes.form} onSubmit={this.handleSubmit}>
                  <CardHeader color="success" className={classes.CardHeader}>
                    <h4 className={classes.cardTitle}>Masuk</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-google" />
                      </Button>
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.iconButtons}
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fab fa-facebook" />
                      </Button>
                    </div>
                  </CardHeader>
                  <br />
                  <p className={`${classes.description} ${classes.textCenter}`}>
                    Atau
                  </p>
                  <CardBody>
                    <CustomInput
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        placeholder: "Email...",
                        type: "email",
                        name: "email",
                        onChange: this.handleChange
                      }}
                    />
                    <CustomInput
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Icon className={classes.inputIconsColor}>
                              lock_utline
                            </Icon>
                          </InputAdornment>
                        ),
                        placeholder: "Password",
                        type: "password",
                        name: "password",
                        onChange: this.handleChange
                      }}
                    />
                  </CardBody>
                  {/* {this.renderError()} */}
                  <div
                    className={`${classes.description} ${classes.textCenter}`}
                  >
                    <Button color="success" size="lg" type="submit">
                      Masuk
                    </Button>
                    <p>
                      Belum punya akun?{" "}
                      <Link to="/daftar" style={{ color: "green" }}>
                        Daftar
                      </Link>
                    </p>
                  </div>
                </form>
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
                  Unto Clubs Team
                </a>{" "}
                for a better life.
              </div>
            </div>
          }
        />
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
