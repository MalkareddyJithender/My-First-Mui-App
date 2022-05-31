import React from "react";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
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
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "25px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 5,
    },
  },
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Top Custom Software Development Services | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge software, mobile app, and website development services with sleek custom designs - get a free online estimate instantly!"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arcsoftwaredevelopment.com/services"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arcsoftwaredevelopment.com/services"
        />
      </Head>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h2"
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/* _____iOS/Android App Development Block_____*/}
        <Grid
          container
          direction="row"
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
            }}
          >
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
            <img
              className={classes.icon}
              alt="mobile phone icon"
              width={"250px"}
              src={"/mobileIcon.svg"}
              style={{ marginRight: matchesSM ? 0 : "5em" }}
            />
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
            <img
              className={classes.icon}
              alt="custom software icon"
              src={"/CustomSoftwareIcon.svg"}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* _____Website Development Block_____*/}
        <Grid
          container
          style={{ marginBottom: "10em" }}
          direction="row"
          className={classes.serviceContainer}
          justifyContent={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em",
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
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              width="250em"
              alt="website icon"
              src={"/websiteIcon.svg"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
