import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url("/background.jpg")`,
    height: "60em",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/mobileBackground.jpg")`,
      backgroundAttachment: "inherit",
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
    [theme.breakpoints.down("sm")]: {
      width: 180,
      height: 60,
      margin: 0,
      fontSize: "1.2rem",
    },
  },
}));

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
      alignItems="center"
      spacing={matchesSM ? 2 : 0}
      justifyContent={matchesSM ? "center" : "space-between"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Grid container>
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                fontSize: matchesXS ? "1.25rem" : "1.5rem",
                marginBottom: matchesXS ? "0.5rem" : null,
              }}
            >
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
  );
};

export default CallToAction;
