import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import Lottie from "react-lottie";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Link from "../src/Link";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CallToAction from "../src/components/ui/CallToAction";

// animations
import documentsAnimation from "../src/animations/documentsAnimation/data";
import scaleAnimation from "../src/animations/scaleAnimation/data.json";
import automationAnimation from "../src/animations/automationAnimation/data.json";
import uxAnimation from "../src/animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40rem",
  },
  rowContainer: {
    paddingLeft: "5rem",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const documentsOptions = {
    loop: true,
    autoplay: false,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: false,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: false,
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development and Design - Free Estimate
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arcsoftwaredevelopment.com/customSoftware"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arcsoftwaredevelopment.com/customSoftware"
        />
      </Head>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
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
              href="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={"/backArrow.svg"} alt="back to services page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography
              variant="h2"
              align={matchesMD ? "center" : undefined}
              style={{
                lineHeight: matchesXS ? 1.1 : null,
                fontSize: matchesXS ? "2.25rem" : null,
                marginBottom: matchesXS ? "0.5rem" : null,
              }}
            >
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Whether we are replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you dont need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/mobileApps"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src={"/forwardArrow.svg"}
                alt="forward to the ios/android development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justifyContent={"center"}
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          alignItems={"center"}
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={"/bulb.svg"} alt="bulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems={"center"}
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "8em" : 0,
            marginBottom: matchesSM ? "8em" : 0,
          }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={"/stopwatch.svg"} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          alignItems={"center"}
          style={{ maxWidth: "40em" }}
        >
          <Grid item>
            <Typography variant="h4">Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={"/cash.svg"} alt="cash" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent="space-between"
      >
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesMD ? "12em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={documentsOptions}
              isStopped={true}
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 275 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.itemContainer}
          md
        >
          <Grid item md style={{ marginBottom: matchesXS ? "2rem" : null }}>
            <Lottie
              options={scaleOptions}
              isStopped={true}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "right"}
                gutterBottom
              >
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        style={{ marginTop: "20em", marginBottom: "20em" }}
      >
        <Grid item container direction="column" alignItems="center">
          <Grid item>
            <img
              src={"/root.svg"}
              alt="tree with roots extending out"
              height={matchesSM ? "300em" : "450em"}
              width={matchesSM ? "300em" : "450em"}
            />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              {" "}
              Root-Cause Analysis{" "}
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              {" "}
              Many problems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              We can help you thoroughly examine all areas of your business to
              develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent="space-between"
        style={{ marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.itemContainer}
          md
          style={{ marginBottom: matchesMD ? "12em" : 0 }}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Why waste time when you dont have to ?
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesSM ? "center" : undefined}
              >
                Increasing effienceny increases profits, leaving you more time
                to focus on your business, not busy work.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ marginTop: matchesXS ? "2rem" : null }}>
            <Lottie
              options={automationOptions}
              isStopped={true}
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          className={classes.itemContainer}
          md
        >
          <Grid item md style={{ marginBottom: matchesXS ? "2rem" : null }}>
            <Lottie
              options={uxOptions}
              isStopped={true}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column" md>
            <Grid item>
              <Typography
                variant="h4"
                align={matchesSM ? "center" : "right"}
                gutterBottom
              >
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                A good design that isn't usable isn't a good design.
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                So why are so many pieces of software compicated, confusing and
                frustrating ?
              </Typography>
              <Typography
                variant="body1"
                align={matchesSM ? "center" : "right"}
                paragraph
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
