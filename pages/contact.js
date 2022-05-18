import React, { useState } from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${"/background.jpg"})`,
    height: "60rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingBottom: "10rem",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${"/mobileBackground.jpg"})`,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.7rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    width: 205,
    height: 80,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      width: 180,
      height: 60,
      margin: 0,
      fontSize: "1.2rem",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5rem",
    borderRadius: 5,
  },
  sendMessage: {
    ...theme.typography.estimate,
    height: 45,
    width: 245,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 220,
    },
  },
}));

export default function Contact(props) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    snackbarBackground: "",
  });

  const onChange = (event) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;

      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone Number");
        } else {
          setPhoneHelper("");
        }
        break;

      default:
        break;
    }
  };

  const onCloseDialog = () => {
    setOpen(false);
  };

  const onConfirm = (event) => {
    setLoading(true);
    axios
      .get(`https://g2-task-manager.herokuapp.com/sendMail`, {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        },
      })
      .then((data) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent successfully !",
          snackbarBackground: "#4BB543",
        });
        console.log("data : ", data);
      })
      .catch((e) => {
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          snackbarBackground: "#FF3232",
        });
        console.log("error :", e);
      });
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img src={"/send.svg"} alt="airplane" style={{ marginLeft: "0.5rem" }} />
    </React.Fragment>
  );

  return (
    <Grid container direction={matchesMD ? "column" : "row"}>
      <Head>
        <title key="title">Contact Us | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arcsoftwaredevelopment.com/contact"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arcsoftwaredevelopment.com/contact"
        />
      </Head>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginTop: matchesSM ? "1.5rem" : matchesMD ? "5rem" : 0,
          marginBottom: matchesMD ? "5rem" : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h2"
                align={matchesMD ? "center" : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                {" "}
                We're waiting.{" "}
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2rem" }}>
              <Grid item>
                <img
                  src={"/phone.svg"}
                  alt="phone"
                  style={{ marginRight: "0.5rem" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:6302696865"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    +91 6302696865{" "}
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2rem" }}>
              <Grid item>
                <img
                  src={"/email.svg"}
                  alt="email"
                  style={{ marginRight: "0.5rem", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:jithendermalkareddy@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    jithendermalkareddy@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>

            <Grid item container direction="column" style={{ width: "20rem" }}>
              <Grid item style={{ marginBottom: "0.6rem" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.6rem" }}>
                <TextField
                  label="Email"
                  id="email"
                  value={email}
                  fullWidth
                  onChange={onChange}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Phone"
                  id="phone"
                  value={phone}
                  fullWidth
                  onChange={onChange}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "20rem" }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                multiline
                fullWidth
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2rem" }}
            >
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  emailHelper.length !== 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0
                }
                variant="contained"
                className={classes.sendMessage}
                onClick={() => {
                  setOpen(true);
                }}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Confirmation Dialog (Modal) */}
      <Dialog
        open={open}
        onClose={onCloseDialog}
        fullScreen={matchesSM}
        style={{ zIndex: 1303 }}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1rem" : matchesSM ? "1.5rem" : "5rem",
            paddingBottom: matchesXS ? "1rem" : matchesSM ? "1.5rem" : "5rem",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5rem"
              : matchesMD
              ? "15rem"
              : "25rem",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5rem"
              : matchesMD
              ? "15rem"
              : "25rem",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item container direction="column">
              <Grid item style={{ marginBottom: "0.6rem" }}>
                <TextField
                  label="Name"
                  id="name"
                  value={name}
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.6rem" }}>
                <TextField
                  label="Email"
                  id="email"
                  value={email}
                  fullWidth
                  onChange={onChange}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Phone"
                  id="phone"
                  value={phone}
                  fullWidth
                  onChange={onChange}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
              </Grid>
              <Grid item style={{ width: matchesSM ? "100%" : "20rem" }}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  className={classes.message}
                  multiline
                  fullWidth
                  rows={10}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                />
              </Grid>
              <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                style={{ marginTop: "2rem" }}
              >
                <Grid item>
                  <Button
                    color="primary"
                    onClick={onCloseDialog}
                    style={{ fontWeight: 300 }}
                  >
                    {" "}
                    Cancel{" "}
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      email.length === 0 ||
                      emailHelper.length !== 0 ||
                      phone.length === 0 ||
                      phoneHelper.length !== 0
                    }
                    variant="contained"
                    className={classes.sendMessage}
                    onClick={onConfirm}
                  >
                    {loading ? <CircularProgress size={30} /> : buttonContents}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/* SnackBar*/}
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.snackbarBackground,
          },
        }}
        onClose={(prevData) => setAlert({ ...prevData, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
      />
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justifyContent={matchesMD ? "center" : undefined}
        alignItems="center"
        className={classes.background}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container>
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                Take advantage of the 21st Century.
              </Typography>
              <Button
                component={Link}
                href="/revolution"
                onClick={() => props.setValue(2)}
                variant="outlined"
                className={classes.learnButton}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ArrowForwardIcon
                  style={{
                    height: "10px",
                    width: "10px",
                    color: theme.palette.common.blue,
                  }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            href="/estimate"
            onClick={() => props.setValue(5)}
            variant="contained"
            className={classes.estimateButton}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
