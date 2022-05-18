import React from "react";
import Lottie from "react-lottie";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import CallToAction from "../src/components/ui/CallToAction";
import Head from "next/head";

import integrationAnimation from "../src/animations/integrationAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40rem",
  },
  rowContainer: {
    paddingLeft: "5rem",
    paddingRight: "5em",
    [theme.breakpoints.only("md")]: {
      paddingLeft: "2rem",
      paddingRight: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
}));

const MobileApps = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          iOS/Android App Design and Development | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Mobile Apps Made Easy | Our cutting-edge mobile app development process lets us build beautifully designed, carefully crafted apps for both iOS and Android."
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arcsoftwaredevelopment.com/mobileApps"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arcsoftwaredevelopment.com/mobileApps"
        />
      </Head>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ marginTop: matchesSM ? "1em" : "2em" }}
        justifyContent={matchesMD ? "center" : undefined}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginLeft: "-3.5em", marginRight: "1em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/customsoftware"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img
                src={"/backArrow.svg"}
                alt="back to custom software development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/websites"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img
                src={"/forwardArrow.svg"}
                alt="forward to the website development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "15rem", marginBottom: "15rem" }}
      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : undefined}
              gutterBottom
            >
              Integration
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: "20rem" }}
          />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : "right"}
              gutterBottom
            >
              Simultaneous Platform Support
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "right"}
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "right"}
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* icons row */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        style={{ marginBottom: "15rem" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          style={{ alignItems: "center" }}
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : undefined}
              gutterBottom
            >
              {" "}
              Extend Functionality{" "}
            </Typography>
          </Grid>
          <Grid item>
            <img src={"/swissKnife.svg"} alt="swiss knife" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems="center"
          style={{
            marginTop: matchesMD ? "10rem" : 0,
            marginBottom: matchesMD ? "10rem" : 0,
          }}
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : undefined}
              gutterBottom
            >
              {" "}
              Extend Access{" "}
            </Typography>
          </Grid>
          <Grid item>
            <img
              src={"/extendAccess.svg"}
              alt="extend access"
              style={{ maxWidth: matchesXS ? "21rem" : "28rem" }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ alignItems: "center" }}
        >
          <Grid item>
            <Typography
              variant="h4"
              align={matchesSM ? "center" : undefined}
              gutterBottom
            >
              {" "}
              Increase Engagement{" "}
            </Typography>
          </Grid>
          <Grid item>
            <img src={"/increaseEngagement.svg"} alt="increase engagement" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
