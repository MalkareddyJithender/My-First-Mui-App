import React, { useState, useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Lottie from "react-lottie";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import { cloneDeep } from "lodash";
import {
  defaultQuestions,
  softwareQuestions,
  websiteQuestions,
} from "../src/fixtures/estimateData";
import Head from "next/head";

// animations
import estimateAnimation from "../src/animations/estimateAnimation/data.json";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: "10rem",
    width: "12rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 50,
    width: 220,
    backgroundColor: theme.palette.common.orange,
    marginTop: "5rem",
    fontSize: "1.25rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "3rem",
    marginBottom: "2rem",
    borderRadius: 5,
  },
  specialText: {
    fontFamily: "Raleway",
    color: theme.palette.common.orange,
    fontWeight: 700,
    fontSize: "1.5rem",
  },
}));

export default function Estimate() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [service, setService] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeature, setCustomFeature] = useState("");
  const [users, setUsers] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const myRef = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

  // const arrr = cloneDeep([...defaultQuestions]);
  // arrr[0].options[0].id = 11;
  // console.log(arrr[0].options[0].id);
  // console.log(defaultQuestions[0].options[0].id);

  // navigation to previous and next questions
  const previousQuestion = () => {
    if (matchesSM) {
      window.scrollTo(0, myRef.current.offsetTop + 75);
    }

    const newQuestions = cloneDeep(questions);
    let currentlyActive = newQuestions.filter((question) => question.active);

    const activeIndex = currentlyActive[0].id - 1;
    const previousIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };

    newQuestions[previousIndex] = {
      ...newQuestions[previousIndex],
      active: true,
    };

    setQuestions(newQuestions);
  };

  const nextQuestion = () => {
    if (matchesSM) {
      window.scrollTo(0, myRef.current.offsetTop + 75);
    }
    const newQuestions = cloneDeep(questions);
    let currentlyActive = newQuestions.filter((question) => question.active);

    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };

    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  // disabling arrows on the first and last questions.
  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  // selecting multiple options
  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter(
      (question) => question.active
    )[0];
    const activeIndex = currentlyActive.id - 1;

    const selectedOption = newQuestions[activeIndex].options[id - 1];

    const previouslySelectedOptions = currentlyActive.options.filter(
      (option) => option.selected
    );

    switch (currentlyActive.subtitle) {
      case "Select one.":
        if (previouslySelectedOptions[0]) {
          previouslySelectedOptions[0].selected =
            !previouslySelectedOptions[0].selected;
        }
        selectedOption.selected = !selectedOption.selected;
        break;
      default:
        selectedOption.selected = !selectedOption.selected;
        break;
    }

    switch (selectedOption.title) {
      case "Custom Software Development":
        if (matchesSM) {
          window.scrollTo(0, myRef.current.offsetTop + 75);
        }
        setQuestions(softwareQuestions);
        setService(selectedOption.title);
        setFeatures([]);
        setPlatforms([]);
        setCustomFeature("");
        setUsers("");
        break;
      case "iOS/Android App Development":
        if (matchesSM) {
          window.scrollTo(0, myRef.current.offsetTop + 75);
        }
        setQuestions(softwareQuestions);
        setService(selectedOption.title);
        setFeatures([]);
        setPlatforms([]);
        setCustomFeature("");
        setUsers("");
        break;
      case "Website Development":
        if (matchesSM) {
          window.scrollTo(0, myRef.current.offsetTop + 75);
        }
        setQuestions(websiteQuestions);
        setService(selectedOption.title);
        setFeatures([]);
        setPlatforms([]);
        setCustomFeature("");
        setUsers("");
        break;
      default:
        setQuestions(newQuestions);
    }

    // setQuestions(newQuestions);
  };

  // getting total cost
  const getTotal = () => {
    let cost = 0;
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((options) => options.length > 0);

    // calculating total
    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];
      // subtract user count from total
      cost -= userCost.cost;

      // multiplying user count with the total
      cost *= userCost.cost;
      setUsers(userCost.title);
    }

    setTotal(cost);
  };

  const getPlatforms = () => {
    const newPlatforms = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));
    }
    setPlatforms(newPlatforms);
  };

  const getFeatures = () => {
    const newFeatures = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((options) =>
          options.map((option) => newFeatures.push(option.title))
        );
    }
    setFeatures(newFeatures);
  };

  const getCustomFeature = () => {
    let newCustomFeature;
    if (questions.length > 2) {
      const selectedFeatures = questions
        .filter(
          (question) =>
            question.title ===
            "What type of custom features do you expect to need?"
        )[0]
        .options.filter((option) => option.selected);
      newCustomFeature = selectedFeatures[0].title;
    }
    setCustomFeature(newCustomFeature);
  };

  const getWebsiteCategory = () => {
    let websiteCategory;
    if (questions.length === 2) {
      const title = questions
        .filter(
          (question) =>
            question.title === "Which type of website are you wanting?"
        )[0]
        .options.filter((option) => option.selected)[0].title;
      websiteCategory = title;
    }
    setCategory(websiteCategory);
  };

  const estimateDisabled = () => {
    let disabled = true;

    // const selections = questions
    //   .map((question) => question.options.filter((option) => option.selected))
    //   .filter((arr) => arr.length === 0);

    // we are only getting questions except one question ...
    const selections = questions
      .filter(
        (question) => question.title !== "Which features do you expect to use?"
      )
      .map((question) => question.options.filter((option) => option.selected))
      .filter((arr) => arr.length === 0);

    // only we are selecting feature selections
    const featureSelections = questions
      .filter(
        (question) => question.title === "Which features do you expect to use?"
      )
      .map((question) => question.options.filter((option) => option.selected))
      .filter((arr) => arr.length === 0);

    if (questions.length === 1) {
      disabled = true;
    } else if (questions.length === 2 && selections.length === 1) {
      disabled = false;
    } else if (selections.length < 2 && featureSelections.length < 2) {
      disabled = false;
    }
    return disabled;
  };

  const onPlaceRequest = () => {
    setLoading(true);
    axios
      .get("https://g2-task-manager.herokuapp.com/sendMail", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
          total: total,
          service: service,
          platforms: platforms,
          features: features,
          customFeature: customFeature,
          users: users,
          category: category,
        },
      })
      .then((data) => {
        setLoading(false);
        setOpenDialog(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setTotal(0);
        setService("");
        setPlatforms([]);
        setFeatures([]);
        setCustomFeature("");
        setUsers(0);
        setCategory("");
        setQuestions(defaultQuestions);
        setSnackbar({
          open: true,
          message: "Message sent successfully!",
          backgroundColor: "#4BB543",
        });
      })
      .catch((error) => {
        setLoading(false);
        setSnackbar({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#FF3232",
        });
        console.error("error ->", error);
      });
  };

  const websiteSelection = (
    <Grid item container direction="column" style={{ marginTop: "14rem" }}>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={"/check.svg"} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want{" "}
            {category === "Basic"
              ? "a Basic Website."
              : `an ${category} Website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const softwareSelection = (
    <Grid item conatiner direction="column">
      <Grid
        item
        container
        style={{ marginBottom: "1.5rem" }}
        alignItems="center"
      >
        <Grid item xs={2}>
          <img src={"/check.svg"} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            You want {service} for
            {platforms.indexOf("Web Application") > -1 && platforms.length === 1
              ? " a Web Application."
              : platforms.indexOf("Web Application") > -1 &&
                platforms.length === 2
              ? ` a Web Application and an ${platforms[1]}.`
              : platforms.length === 1
              ? ` an ${platforms[0]}`
              : platforms.length === 2
              ? ` an ${platforms[0]} and an ${platforms[1]}.`
              : platforms.length === 3
              ? " a Web Application, an iOS Application, and an Android Application."
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        style={{ marginBottom: "1.5rem" }}
        alignItems="center"
      >
        <Grid item xs={2}>
          <img src={"/check.svg"} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"with "}
            {features.length === 1
              ? `${features[0]}.`
              : features.length === 2
              ? `${features[0]} and ${features[1]}`
              : features.length > 2
              ? features
                  .filter((feature, index) => index !== features.length - 1)
                  .map((feature, index) => (
                    <span key={index}>{`${feature}, `}</span>
                  ))
              : null}
            {features.length > 2
              ? `and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={"/check.svg"} alt="checkmark" />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            The custom features will be of {customFeature?.toLowerCase()}, and
            the project will be used by about {users} users.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Free Estimate | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="Use our free online estimate calculator to instantly check the cost of your custom software, mobile app, or website design and development project!"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arcsoftwaredevelopment.com/estimate"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arcsoftwaredevelopment.com/estimate"
        />
      </Head>
      <Grid
        item
        container
        direction="column"
        lg
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid item>
          <Typography
            align={matchesMD ? "center" : undefined}
            variant="h2"
            style={{
              marginTop: "2rem",
              marginLeft: matchesMD ? 0 : "5rem",
            }}
          >
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesMD ? 0 : "10rem",
            maxWidth: "50rem",
            marginTop: "7.5rem",
          }}
        >
          <Lottie
            options={defaultOptions}
            isStopped={true}
            height="100%"
            width="100%"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        lg
        style={{ marginRight: matchesMD ? 0 : "2rem", marginBottom: "25rem" }}
        alignItems="center"
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item ref={myRef}>
                <Typography
                  variant="h2"
                  align="center"
                  style={{
                    fontWeight: 500,
                    marginTop: "12rem",
                    fontSize: "2.25rem",
                    marginLeft: matchesSM ? "1rem" : 0,
                    marginRight: matchesSM ? "1rem" : 0,
                    lineHeight: 1.25,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  align="center"
                  style={{ marginBottom: "2.5rem" }}
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container direction="row">
                {question.options.map((option, index) => (
                  <Grid
                    item
                    container
                    direction="column"
                    md
                    key={index}
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: "grid",
                      textTransform: "none",
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                      marginBottom: matchesSM ? "1.5rem" : 0,
                    }}
                  >
                    <Grid item style={{ maxWidth: "12rem" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1rem" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          direction={"row"}
          justifyContent="space-between"
          style={{ width: "15rem", marginTop: "3rem" }}
        >
          <Grid item>
            <IconButton
              onClick={previousQuestion}
              disabled={navigationPreviousDisabled()}
            >
              <img
                src={
                  navigationPreviousDisabled()
                    ? "/backArrowDisabled.svg"
                    : "/backArrow.svg"
                }
                alt="back to previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={nextQuestion}
              disabled={navigationNextDisabled()}
            >
              <img
                src={
                  navigationNextDisabled()
                    ? "/forwardArrowDisabled.svg"
                    : "/forwardArrow.svg"
                }
                alt="move to next question"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            className={classes.estimateButton}
            onClick={() => {
              setOpenDialog(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeature();
              getWebsiteCategory();
            }}
            disabled={estimateDisabled()}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        style={{ zIndex: 1302 }}
        fullScreen={matchesSM}
        fullWidth
        maxWidth="lg"
      >
        <Grid container direction="row" justifyContent="center">
          <Grid item style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <Typography variant="h2">Estimate</Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            justifyContent={matchesSM ? undefined : "space-around"}
            alignItems={matchesSM ? "center" : undefined}
          >
            <Grid item>
              <Grid container direction="column" style={{ maxWidth: "20rem" }}>
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
                <Grid item style={{ maxWidth: matchesXS ? "100%" : "20rem" }}>
                  <TextField
                    InputProps={{ disableUnderline: true }}
                    className={classes.message}
                    multiline
                    fullWidth
                    rows={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    placeholder="Tell us more about your project ..."
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    align={matchesSM ? "center" : undefined}
                    paragraph
                    style={{ lineHeight: 1.25 }}
                  >
                    We can create this digital solution for an estimated &nbsp;
                    <span className={classes.specialText}>
                      ${total.toFixed(2)}
                    </span>
                  </Typography>
                  <Typography
                    variant="body1"
                    align={matchesSM ? "center" : undefined}
                    paragraph
                  >
                    Fill out your name, number, and email, place your request,
                    and we’ll get back to you with details moving forward and a
                    final price.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                // item
                container
                direction="column"
                alignItems={matchesSM ? "center" : undefined}
                style={{ maxWidth: "30rem" }}
              >
                <Hidden smDown>
                  <Grid item>
                    {questions.length > 2
                      ? softwareSelection
                      : websiteSelection}
                  </Grid>
                </Hidden>

                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.estimateButton}
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      email.length === 0 ||
                      emailHelper.length !== 0 ||
                      phone.length === 0 ||
                      phoneHelper.length !== 0
                    }
                    onClick={onPlaceRequest}
                  >
                    {loading ? (
                      <CircularProgress size={30} />
                    ) : (
                      <>
                        Place Request
                        <img
                          src={"/send.svg"}
                          alt="airplane"
                          style={{ marginLeft: "0.5rem" }}
                        />
                      </>
                    )}
                  </Button>
                </Grid>
                <Hidden mdUp>
                  <Grid
                    item
                    style={{
                      marginBottom: matchesSM ? "5rem" : 0,
                      marginTop: matchesSM ? "0.5rem" : 0,
                    }}
                  >
                    <Button
                      style={{ fontWeight: 300 }}
                      color="primary"
                      onClick={() => setOpenDialog(false)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        autoHideDuration={5000}
        ContentProps={{ style: { backgroundColor: snackbar.backgroundColor } }}
        onClose={() => {
          setSnackbar({ ...snackbar, open: false });
        }}
      />
    </Grid>
  );
}
