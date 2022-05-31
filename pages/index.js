import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CallToAction from "../src/components/ui/CallToAction";
import Link from "../src/Link";
import Head from "next/head";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

// animations
import animationData from "../src/animations/landingAnimation/data";

const useStyles = makeStyles((theme) => ({
  animation: {
    minWidth: "21em",
    maxWidth: "50em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 50,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    height: 45,
    width: 145,
    fontSize: "0.9rem",
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  textContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 5,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${"/repeatingBackground.svg"})`,
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    padding: "10em",
    borderRadius: 15,
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: "100%",
      textAlign: "center",
    },
  },
  infoBackground: {
    backgroundImage: `url(${"/infoBackground.svg"})`,
    height: "100%",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up and developed with cutting-edge optimizations. Use our free estimate calculator to check your project cost!"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arcsoftwaredevelopment.com"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arcsoftwaredevelopment.com"
        />
      </Head>
      <Grid item>
        {" "}
        {/* _____Hero Block_____ */}
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          direction="row"
        >
          <Grid item sm className={classes.textContainer}>
            <Typography
              align="center"
              variant="h2"
              style={{
                lineHeight: matchesXS ? 1.1 : null,
                fontSize: matchesXS ? "2.25rem" : null,
                marginBottom: matchesXS ? "0.5rem" : null,
              }}
            >
              Bringing West Coast Technology
              <br /> to the Midwest
            </Typography>
            <Grid
              container
              justifyContent="center"
              className={classes.buttonContainer}
            >
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
              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  onClick={() => props.setValue(2)}
                  variant="outlined"
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ArrowForwardIcon
                    style={{
                      height: "15px",
                      width: "15px",
                      color: `${theme.palette.common.blue}`,
                    }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* _____Custom Software Development Block_____*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to {""}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button
              component={Link}
              href="/customSoftware"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
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
          <Grid item>
            <LazyLoadImage
              threshold={200}
              className={classes.icon}
              alt="custom software icon"
              src={"/CustomSoftwareIcon.svg"}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* _____iOS/Android App Development Block_____*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
        >
          <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {matchesSM ? null : <br />}
              with either mobile platform.
            </Typography>
            <Button
              component={Link}
              href="/mobileApps"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}
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
          <Grid item>
            <LazyLoadImage
              threshold={200}
              className={classes.icon}
              alt="mobile phone icon"
              src={"/mobileIcon.svg"}
              style={{ marginRight: matchesSM ? 0 : "5em" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* _____Website Development Block_____*/}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach more. Discover more. Sell more.
            </Typography>
            <Typography variant="subtitle1">
              Optimized for search engines,{matchesXS && <br />} built for
              speed.
            </Typography>
            <Button
              component={Link}
              href="/websites"
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
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
          <Grid item>
            <LazyLoadImage
              threshold={200}
              className={classes.icon}
              alt="website icon"
              src={"/websiteIcon.svg"}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/** The Revolution Block**/}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
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
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      <Grid item>
        {/** The Information Block */}
        <Grid
          container
          direction={"row"}
          alignItems="center"
          style={{ height: "80em" }}
        >
          <Grid
            item
            container
            direction={matchesXS ? "column" : "row"}
            style={{
              position: "absolute",
              textAlign: matchesXS ? "center" : "inherit",
            }}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                container
                direction="column"
              >
                <Typography variant="h2" style={{ color: "white" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2">Let's get personal.</Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href="/about"
                    onClick={() => props.setValue(3)}
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ArrowForwardIcon
                      style={{ height: "10px", width: "10px", color: "white" }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h2" style={{ color: "white" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2">
                  Say Hello!
                  <span role="img" aria-label="waving hand">
                    👋
                  </span>
                </Typography>
                <Grid item>
                  <Button
                    component={Link}
                    href="/contact"
                    onClick={() => props.setValue(4)}
                    variant="outlined"
                    className={classes.learnButton}
                    style={{ color: "white", borderColor: "white" }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ArrowForwardIcon
                      style={{ height: "10px", width: "10px", color: "white" }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <LazyLoadComponent threshold={750}>
            <div className={classes.infoBackground} />
          </LazyLoadComponent>
        </Grid>
      </Grid>
      <Grid item>
        {/* The CallToAction Block */}
        <LazyLoadComponent threshold={750}>
          <CallToAction setValue={props.setValue} />
        </LazyLoadComponent>
      </Grid>
    </Grid>
  );
}
