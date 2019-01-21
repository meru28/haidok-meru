import React, { Component } from "react";
import { Link } from "react-router-dom";
//@material ui komponen
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

//komponen gua
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Footer from "components/Footer/Footer.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomInput from "components/CustomInput/CustomInput.jsx";

//material ui icon
import Home from "@material-ui/icons/Home";
import LocalHospital from "@material-ui/icons/LocalHospital";
import Group from "@material-ui/icons/Group";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Icon from "@material-ui/core/Icon";
import Check from "@material-ui/icons/Check";

import signUpPageStyle from "assets/jss/rs-kit/views/signUpPageStyle.jsx";
import image from "assets/img/doc-background.jpg";

class SignUpPage extends Component {
  state = {
    checked: [1]
  };

  handleToggle = value => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    this.setState({
      checked: newChecked
    });
  };

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
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>Daftar</h2>
                  <p className={classes.textCenter}>
                    Apakah Anda seorang dokter?{" "}
                    <a href="#blm-slese" style={{ color: "green" }}>
                      Daftar disini
                    </a>
                  </p>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={5} md={5}>
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
                          icon={LocalHospital}
                          iconColor="success"
                        />
                        <InfoArea
                          className={classes.infoArea}
                          title="Klinik"
                          description="Haidok dapat membantu menemukan klinik Anda supaya ramai dikunjungi."
                          icon={Home}
                          iconColor="info"
                        />
                      </GridItem>
                      <GridItem xs={12} sm={5} md={5}>
                        <div className={classes.textCenter}>
                          <Button justIcon round color="google">
                            <i className={classes.socials + " fab fa-google"} />
                          </Button>
                          {` `}
                          <Button justIcon round color="facebook">
                            <i
                              className={classes.socials + " fab fa-facebook-f"}
                            />
                          </Button>
                          {` `}
                          <p className={classes.socialTitle}>
                            atau daftar dibawah ini
                          </p>
                        </div>
                        <form className={classes.form}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Nama lengkap..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Email
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Email..."
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Icon className={classes.inputAdornmentIcon}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              ),
                              placeholder: "Password...",
                              type: "password"
                            }}
                          />
                          <FormControlLabel
                            classes={{
                              label: classes.label
                            }}
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => this.handleToggle(1)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={
                                  <Check className={classes.uncheckedIcon} />
                                }
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                                checked={
                                  this.state.checked.indexOf(1) !== -1
                                    ? false
                                    : true
                                }
                              />
                            }
                            label={
                              <span>
                                Saya setuju dengan{" "}
                                <a href="#blm-slese" style={{ color: "green" }}>
                                  Syarat & Ketentuan
                                </a>
                                .
                              </span>
                            }
                          />
                          <div className={classes.textCenter}>
                            <Button round color="success">
                              Daftar
                            </Button>
                          </div>
                          <br />
                          <p className={classes.textCenter}>
                            Sudah punya akun?{" "}
                            <a href="#blm-slese" style={{ color: "green" }}>
                              Masuk
                            </a>
                          </p>
                        </form>
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
                    Unto Clubs Team
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
