import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { onUserLogin } from "../../actions";
//material-ui core
import InputAdornment from "@material-ui/core/InputAdornment";
import ListItem from "@material-ui/core/ListItem";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

//material ui icon
import Close from "@material-ui/icons/Close";
import Face from "@material-ui/icons/Face";
import Icon from "@material-ui/core/Icon";

import modalStyle from "assets/jss/rs-kit/modalStyle.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class LoginModal extends Component {
  state = {
    username: null,
    password: null,
    loginModal: false
  };

  handleClickOpen = modal => {
    var x = [];
    x[modal] = true;
    this.setState(x);
  };
  handleClose = modal => {
    var x = [];
    x[modal] = false;
    this.setState(x);
  };
  // this.setState({ [name]: value }, () => console.log(this.state));
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Password: ${this.state.password}
    var username = this.state.username;
    var password = this.state.password;
    // console.log(`
    // -- SUBMITTING --
    // ${username}
    // ${password}`);
    this.props.onUserLogin({ username, password });
    console.log(this.props.error);
  };

  renderError = () => {
    if (this.props.error.length > 0) {
      return <p style={{ color: "red" }}>{this.props.error}</p>;
    }
  };

  render() {
    const { classes } = this.props;
    if (this.props.username === "") {
      return (
        <div>
          <ListItem className={classes.listItem}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={6}>
                <Button
                  className={classes.navLink}
                  onClick={() => this.handleClickOpen("loginModal")}
                  color="transparent"
                >
                  Masuk
                </Button>
                {/* LOGIN MODAL START */}
                <Dialog
                  classes={{
                    root: classes.modalRoot,
                    paper: classes.modal + " " + classes.modalLogin
                  }}
                  open={this.state.loginModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => this.handleClose("loginModal")}
                  aria-labelledby="login-modal-slide-title"
                  aria-describedby="login-modal-slide-description"
                >
                  <Card plain className={classes.modalLoginCard}>
                    <DialogTitle
                      id="login-modal-slide-title"
                      disableTypography
                      className={classes.modalHeader}
                    >
                      <CardHeader
                        plain
                        color="success"
                        className={`${classes.textCenter} ${
                          classes.cardLoginHeader
                        }`}
                      >
                        <Button
                          simple
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          onClick={() => this.handleClose("loginModal")}
                        >
                          {" "}
                          <Close className={classes.modalClose} />
                        </Button>
                        <h5 className={classes.cardTitleWhite}>Masuk</h5>
                        <div className={classes.socialLine}>
                          <Button
                            justIcon
                            link
                            className={classes.socialLineButton}
                          >
                            <i className="fab fa-facebook-square" />
                          </Button>
                          <Button
                            justIcon
                            link
                            className={classes.socialLineButton}
                          >
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button
                            justIcon
                            link
                            className={classes.socialLineButton}
                          >
                            <i className="fab fa-google-plus-g" />
                          </Button>
                        </div>
                      </CardHeader>
                    </DialogTitle>
                    <DialogContent
                      id="login-modal-slide-description"
                      className={classes.modalBody}
                    >
                      <form onSubmit={this.handleSubmit}>
                        <p
                          className={`${classes.description} ${
                            classes.textCenter
                          }`}
                        >
                          Atau
                        </p>
                        <CardBody className={classes.cardLoginBody}>
                          <CustomInput
                            id="login-modal-first"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Face className={classes.icon} />
                                </InputAdornment>
                              ),
                              placeholder: "Username...",
                              type: "text",
                              name: "username",
                              onChange: this.handleChange
                            }}
                          />
                          <CustomInput
                            id="login-modal-pass"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Icon className={classes.icon}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              ),
                              placeholder: "Password",
                              type: "password",
                              name: "password",
                              onChange: this.handleChange
                            }}
                          />
                          {this.renderError()}
                          <div
                            className={`${classes.description} ${
                              classes.textCenter
                            }`}
                          >
                            <Button
                              color="success"
                              simple
                              size="lg"
                              type="submit"
                            >
                              Masuk
                            </Button>
                          </div>
                        </CardBody>
                      </form>
                    </DialogContent>
                    <DialogActions
                      className={`${classes.modalFooter} ${
                        classes.justifyContentCenter
                      }`}
                    >
                      <p>Belum punya akun?</p>
                      <Link to="/signup-page" style={{ color: "green" }}>
                        Daftar
                      </Link>
                    </DialogActions>
                  </Card>
                </Dialog>
              </GridItem>
            </GridContainer>
          </ListItem>
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}

const mapStateToProps = state => {
  return { username: state.auth.username, error: state.auth.error };
};

export default compose(
  withStyles(modalStyle, {
    name: "LoginModal"
  }),
  connect(
    mapStateToProps,
    { onUserLogin }
  )
)(LoginModal);
