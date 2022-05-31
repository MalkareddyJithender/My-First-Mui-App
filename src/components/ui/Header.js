import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Link from "../../Link";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabConatiner: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    marginLeft: "25px",
    minWidth: 10,
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white !important",
    borderRadius: "0px",
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  expansion: {
    backgroundColor: theme.palette.common.blue,
    borderBottom: `1px solid rgba(0,0,0,0.14)`,
    "&.Mui-expanded": {
      margin: 0,
      borderBottom: 0,
    },
    "&::before": {
      backgroundColor: `rgba(0,0,0,0)`,
    },
  },
  expansionSummary: {
    "&:hover": {
      backgroundColor: `rgba(0,0,0,0.08)`,
    },
    backgroundColor: (props) =>
      props.value === 1 ? `rgba(0,0,0,0.17)` : "inherit",
  },
  expansionDetails: {
    padding: 0,
    backgroundColor: theme.palette.primary.light,
  },
}));

const Header = (props) => {
  // const iOS = /iPad|iPhone|iPod/.test(Window.navigator.userAgent); //process?.browser &&
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const menuOptions = [
    {
      name: "Custom Software Development",
      link: "/customSoftware",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileApps",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariahasPopup: anchorEl ? "true" : undefined,
      onMouseOver: (event) => handleClick(event),
      onMouseLeave: () => setOpenMenu(false),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClickMenuItem = (event, index) => {
    setAnchorEl(null);
    setOpenMenu(false);
    props.setSelectedIndex(index);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const path = typeof window !== "undefined" ? window.location.pathname : null;

  const activeTab = () => {
    const routesFound = routes.find(({ link }) => link === path);
    const menuFound = menuOptions.find(({ link }) => link === path);

    if (menuFound) {
      props.setValue(menuFound.activeIndex);
      props.setSelectedIndex(menuFound.selectedIndex);
    } else if (routesFound === undefined) {
      props.setValue(false);
    } else {
      props.setValue(routesFound.activeIndex);
    }
  };

  // better active tab approach
  useEffect(() => {
    activeTab();
  }, [path]);

  // traditional / older approach ...
  // useEffect(() => {
  //   //switch statement

  //   [...menuOptions, ...routes].forEach((route) => {
  //     switch (window.location.pathname) {
  //       case `${route.link}`:
  //         if (props.value !== route.activeIndex) {
  //           props.setValue(route.activeIndex);
  //         }
  //         if (
  //           route.selectedIndex &&
  //           route.selectedIndex !== props.selectedIndex
  //         ) {
  //           props.setSelectedIndex(route.selectedIndex);
  //         }
  //         return;
  //       case "/estimate":
  //         if (props.value !== 5) {
  //           props.setValue(5);
  //         }
  //         return;
  //       default:
  //         return;
  //     }
  //   });
  // }, []); // props.value, props.selectedIndex

  const handleChange = (event, newValue) => {
    props.setValue(newValue);
  };

  const tabs = (
    <React.Fragment>
      <Tabs
        className={classes.tabConatiner}
        value={props.value}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route) => (
          <Tab
            key={route.activeIndex}
            onMouseOver={route.onMouseOver}
            onMouseLeave={route.onMouseLeave}
            className={classes.tab}
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariahasPopup}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          props.setValue(5);
        }}
        className={classes.button}
        component={Link}
        href="/estimate"
      >
        {" "}
        Estimate Now{" "}
      </Button>
      {/* Popper is a comp that displays some content (ele) on top of another content (another element)
          Grow is a comp that do animations while toggling the states 
          Paper is a simple compo that displays paper look output
          ClickAwayListener detects if the click event is performed outside of an element that wrapped

      */}
      <Popper
        open={openMenu}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
        placement="bottom-start"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "top left",
            }}
          >
            <Paper elevation={0} classes={{ root: classes.menu }}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={false}
                  id="simple-menu"
                  onKeyDown={handleListKeyDown}
                  onMouseOver={() => setOpenMenu(true)}
                  onMouseLeave={handleClose}
                >
                  {menuOptions.map((option, index) => {
                    return (
                      <MenuItem
                        key={index}
                        component={Link}
                        href={option.link}
                        classes={{ root: classes.menuItem }}
                        onClick={(event) => {
                          handleClickMenuItem(event, index);
                          props.setValue(1);
                        }}
                        selected={
                          index === props.selectedIndex &&
                          props.value === 1 &&
                          window.location.pathname !== "/services"
                        }
                      >
                        {option.name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>

      {/* old menu */}
      {/* <Menu
        id="simple-menu"
        MenuListProps={{ onMouseLeave: handleClose }}
        style={{ zIndex: 1302 }}
        open={openMenu}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        elevation={0}
        keepMounted
      >
        {menuOptions.map((option, index) => {
          return (
            <MenuItem
              key={index}
              component={Link}
              href={option.link}
              classes={{ root: classes.menuItem }}
              onClick={(event) => {
                handleClickMenuItem(event, index);
                props.setValue(1);
              }}
              selected={index === props.selectedIndex && props.value === 1}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu> */}
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        // disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) =>
            route.name === "Services" ? (
              <Accordion
                elevation={0}
                key={route.name}
                classes={{ root: classes.expansion }}
              >
                <AccordionSummary
                  classes={{ root: classes.expansionSummary }}
                  expandIcon={<ExpandMoreIcon color="secondary" />}
                >
                  <ListItemText
                    className={classes.drawerItem}
                    style={{ opacity: props.value === 1 ? 1 : null }}
                    disableTypography
                  >
                    <Link
                      href={route.link}
                      onClick={() => {
                        setOpenMenu(false);
                        props.setValue(route.activeIndex);
                      }}
                      color="inherit"
                    >
                      {route.name}
                    </Link>
                  </ListItemText>
                </AccordionSummary>
                <AccordionDetails classes={{ root: classes.expansionDetails }}>
                  <Grid container direction="column">
                    {menuOptions.map((option) => (
                      <Grid item key={option.selectedIndex}>
                        <ListItem
                          selected={
                            props.value === 1 &&
                            props.selectedIndex === option.selectedIndex &&
                            window &&
                            window.location.pathname !== "/services"
                          }
                          button
                          divider
                          classes={{
                            selected: classes.drawerItemSelected,
                          }}
                          component={Link}
                          href={option.link}
                          onClick={() => {
                            setOpenDrawer(false);
                            props.setSelectedIndex(option.selectedIndex);
                          }}
                        >
                          <ListItemText
                            className={classes.drawerItem}
                            disableTypography
                          >
                            {option.name
                              .split(" ")
                              .filter((word) => word !== "Development")
                              .join(" ")}
                            <br />
                            <span style={{ fontSize: "0.75rem" }}>
                              Development
                            </span>
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItem
                key={route.activeIndex}
                selected={props.value === route.activeIndex}
                button
                divider
                classes={{ selected: classes.drawerItemSelected }}
                component={Link}
                href={route.link}
                onClick={() => {
                  setOpenDrawer(false);
                  props.setValue(route.activeIndex);
                }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            selected={props.value === 5}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            button
            divider
            component={Link}
            href="/estimate"
            onClick={() => {
              setOpenDrawer(false);
              props.setValue(5);
            }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        disableRipple
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      <ElevationScroll>
        {/* default props */}
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              disableRipple={true}
              component={Link}
              href="/"
              className={classes.logoContainer}
              onClick={() => {
                props.setValue(0);
              }}
            >
              <img
                src={"/logo.svg"}
                alt="company logo"
                className={classes.logo}
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
