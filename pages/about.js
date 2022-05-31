import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";
import CallToAction from "../src/components/ui/CallToAction";
import Head from "next/head";
import {
  LazyLoadImage,
  LazyLoadComponent,
} from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
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
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "60em",
    lineHeight: 1.5,
  },
  avatar: {
    height: "25rem",
    width: "25rem",
    [theme.breakpoints.down("sm")]: {
      height: "20rem",
      width: "20rem",
      maxWidth: 300,
      maxHeight: 300,
    },
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">About Us - History & Team | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="We provide the fastest, most modern, affordable, and aesthetic software design and development services in the Midwest. Get a free online estimate now!"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arcsoftwaredevelopment.com/about"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arcsoftwaredevelopment.com/about"
        />
      </Head>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesSM ? "1rem" : "2rem" }}
      >
        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
          {" "}
          About Us{" "}
        </Typography>
      </Grid>

      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginTop: "3rem" }}
      >
        <Typography
          variant="h4"
          align={matchesMD ? "center" : undefined}
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justifyContent="space-around"
        className={classes.rowContainer}
        style={{ marginTop: "10rem", marginBottom: "10rem" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35rem" }}
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? "center" : undefined}
                gutterBottom
              >
                {" "}
                History{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{
                  color: "#868686",
                  fontStyle: "italic",
                  fontWeight: 700,
                }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src={"/history.svg"}
              alt="pen floated on the book"
              style={{ maxHeight: matchesMD ? 200 : "22rem" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginBottom: "15rem" }}
      >
        <Grid item>
          <Typography variant="h4" align="center" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" paragraph>
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item>
          <LazyLoadComponent threshold={250}>
            <Avatar
              src={"/founder.jpg"}
              alt="founder"
              className={classes.avatar}
            />
          </LazyLoadComponent>
        </Grid>

        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          className={classes.rowContainer}
        >
          <Hidden lgUp>
            <Grid item lg style={{ maxWidth: "45rem", padding: "1.25rem" }}>
              <Typography variant="body1" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed. I'm currently
                teaching a course about building responsive modern user
                interfaces on Udemy.com as well as beginning work on my first
                machine learning mobile application.
              </Typography>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "2.5rem" : 0 }}
          >
            <Grid item>
              <LazyLoadImage
                threshold={250}
                src={"/yearbook.svg"}
                alt="a page of year book"
                style={{ maxWidth: matchesXS ? 250 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                {" "}
                a page from my Sophomore yearbook{" "}
              </Typography>
            </Grid>
          </Grid>

          <Hidden mdDown>
            <Grid item lg style={{ maxWidth: "45rem", padding: "1.25rem" }}>
              <Typography variant="body1" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed. I'm currently
                teaching a course about building responsive modern user
                interfaces on Udemy.com as well as beginning work on my first
                machine learning mobile application.
              </Typography>
            </Grid>
          </Hidden>

          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : "flex-end"}
          >
            <Grid item>
              <LazyLoadImage
                threshold={250}
                src={"/puppy.svg"}
                alt="my puppy"
                style={{ maxWidth: matchesXS ? 250 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                {" "}
                my miniature dapple dachshund, Sterling{" "}
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
