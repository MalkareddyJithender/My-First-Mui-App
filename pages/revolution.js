import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Lottie from "react-lottie";
import CallToAction from "../src/components/ui/CallToAction";
import Head from "next/head";
import { LazyLoadImage } from "react-lazy-load-image-component";

import technologyAnimation from "../src/animations/technologyAnimation/data.json";

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
  },
}));

export default function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // revolution Data (Mock Data || Static Data)
  const sections = [
    {
      icon: "/consultationIcon.svg",
      iconAlt: "handshake",
      iconMaxWidth: 700,
      backgroundColor: "#B3B3B3",
      title: "Consultation",
      paragraphs: [
        `Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for
          where to start and what to do, or if you just know you want to
          step things up, our initial consultation will help you examine
          your business holistically to find the best solutions.`,
        `Detailed notes will be taken on your requirements and constraints,
          while taking care to identify other potential areas for
          consideration.`,
        `Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.`,
      ],
    },
    {
      icon: "/mockupIcon.svg",
      iconAlt: "basic website design outline",
      iconMaxWidth: 700,
      backgroundColor: "#FF7373",
      title: "Mockup",
      paragraphs: [
        `After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.`,
        `Then it???s time for us to start on your minimum viable product. That???s just a fancy term for a mockup, which doesn???t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.`,
        `This helps us understand and refine the solution itself before getting distracted by specifics and looks.`,
      ],
    },
    {
      icon: "/reviewIcon.svg",
      iconAlt: "magnifying glass",
      iconMaxWidth: matchesSM ? "20rem" : "40rem",
      backgroundColor: "#39B54A",
      title: "Review",
      paragraphs: [
        `Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.`,
        `We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.`,
        `Once you???re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.`,
      ],
    },
    {
      icon: "/designIcon.svg",
      iconAlt: "paintbrush leaving stroke of paint",
      iconMaxWidth: 700,
      backgroundColor: "#A67C52",
      title: "Design",
      paragraphs: [
        `Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you???re already familiar with.`,
        `No aspect is superfluous, and care will be taken with every decision.`,
      ],
    },
    {
      icon: "/buildIcon.svg",
      iconAlt: "building construction site",
      iconMaxWidth: { maxWidth: 700 },
      backgroundColor: "#FBB03B",
      title: "Build",
      paragraphs: [
        `Here???s where we get down to business.`,
        `Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.', 'Each area is then developed in order of importance until ready to be connected to the next piece.`,
        `Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.`,
        `Finishing the application doesn???t mean we???re done though, because we use extensive testing to guarantee compatibility with all intended devices.`,
        `Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.`,
      ],
    },
    {
      icon: "/launchIcon.svg",
      iconAlt: "rocket",
      iconMaxWidth: 200,
      backgroundColor: "#C1272D",
      title: "Launch",
      paragraphs: [
        `The moment we???ve all been waiting for.`,
        `When construction comes to a close you???re the first one to know. We???ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.`,
        `When you say the word, we press the button and launch your project out to the public. We???re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.`,
      ],
    },
    {
      icon: "/maintainIcon.svg",
      iconAlt: "wrench tightening bolts",
      iconMaxWidth: 700,
      backgroundColor: "#8E45CE",
      title: "Maintain",
      paragraphs: [
        `Our work doesn???t end there.`,
        `After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.`,
        `From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.`,
      ],
    },
    {
      icon: "/iterateIcon.svg",
      iconAlt: "falling dominoes",
      iconMaxWidth: 700,
      backgroundColor: "#29ABE2",
      title: "Iterate",
      paragraphs: [
        `The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.`,
        `By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.`,
        `Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.`,
      ],
    },
  ];

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          The Revolution - Cutting-Edge Software | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Visionary insights, coupled with cutting-edge technology, is a recipe for revolution. Get a free online estimate instantly!"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://arcsoftwaredevelopment.com/revolution"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://arcsoftwaredevelopment.com/revolution"
        />
      </Head>
      <Grid item className={classes.rowContainer} style={{ marginTop: "2rem" }}>
        <Typography variant="h3" align={matchesMD ? "center" : undefined}>
          {" "}
          The Revolution{" "}
        </Typography>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5rem" }}
      >
        <Grid item lg>
          <img
            src={"/vision.svg"}
            alt="vision image"
            style={{
              maxWidth: matchesSM ? 300 : "40rem",
              marginRight: matchesMD ? 0 : "5rem",
              marginBottom: matchesMD ? "5rem" : 0,
            }}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          lg
          style={{ maxWidth: "40rem" }}
        >
          <Typography
            variant="h4"
            align={matchesMD ? "center" : "right"}
            gutterBottom
          >
            {" "}
            Vision{" "}
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : "right"}
            paragraph
          >
            The rise of computers, and subsequently the Internet, has completely
            altered every aspect of human life. This has increased our comfort,
            broadened our connections, and reshaped how we view the world.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : "right"}
            gutterBottom
          >
            What once was confined to huge rooms and teams of engineers now
            resides in every single one of our hands. Harnessing this unlimited
            potential by using it to solve problems and better lives is at the
            heart of everything we do.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : "right"}
            gutterBottom
          >
            We want to help businesses capitalize on the latest and greatest
            technology. The best way to predict the future is to be the one
            building it, and we want to help guide the world into this next
            chapter of technological expansion, exploration, and innovation.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : "right"}
            gutterBottom
          >
            By holding ourselves to rigorous standards and pristine quality, we
            can ensure you have the absolute best tools necessary to thrive in
            this new frontier.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : "right"}
            gutterBottom
          >
            We see a future where every individual has personalized software
            custom tailored to their lifestyle, culture, and interests, helping
            them overcome life???s obstacles. Each project is a step towards that
            goal.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "10rem", marginBottom: "10rem" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          style={{ maxWidth: "40rem" }}
        >
          <Typography
            variant="h4"
            align={matchesMD ? "center" : undefined}
            gutterBottom
          >
            {" "}
            Technology{" "}
          </Typography>
          <Typography variant="body1" paragraph>
            In 2013, Facebook invented a new way of building websites. This new
            system, React.js, completely revolutionizes the process and practice
            of website development.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : undefined}
            gutterBottom
          >
            Instead of chaining together long individual pages, like traditional
            websites, React websites are built with little chunks of code called
            components. These components are faster, easier to maintain, and are
            easily reused and customized, each serving a singular purpose.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : undefined}
            gutterBottom
          >
            Two years later they shocked the world by releasing a similar
            system, React Native, for producing iOS and Android apps. Instead of
            having to master two completely separate development platforms, you
            can leverage the knowledge you already possessed from building
            websites and reapply it directly! This was a huge leap forward.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : undefined}
            gutterBottom
          >
            This technology is now being used by companies like AirBnB,
            Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
            Facebook purchased Instagram large portions of it were even rebuilt
            using React.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : undefined}
            gutterBottom
          >
            Developers have since built on top of these systems by automating
            project setup and deployment, allowing creators to focus as much as
            possible on their work itself.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : undefined}
            gutterBottom
          >
            These technical advancements translate into savings by significantly
            reducing the workload and streamlining the workflow for developing
            new pieces of software, while also lowering the barrier to entry for
            mobile app development.
          </Typography>
          <Typography
            variant="body1"
            align={matchesMD ? "center" : undefined}
            gutterBottom
          >
            This puts personalization in your pocket ??? faster, better, and more
            affordable than ever before.
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesMD ? "center" : "flex-end"}
          lg
        >
          <Lottie
            options={defaultOptions}
            isStopped={true}
            style={{ maxWidth: "40rem", margin: 0 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4"> Process </Typography>
        </Grid>
      </Grid>

      {sections.map((section, index) => (
        <Grid
          key={index}
          item
          container
          direction={matchesMD ? "column" : "row"}
          style={{ backgroundColor: section.backgroundColor, height: "90rem" }}
          className={classes.rowContainer}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid
            item
            container
            direction="column"
            lg
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? "center" : undefined}
                gutterBottom
                style={{ color: "#000", marginTop: "5rem" }}
              >
                {section.title}
              </Typography>

              {section.paragraphs.map((paragraph, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  align={matchesMD ? "center" : undefined}
                  style={{ color: "#fff", maxWidth: "22rem" }}
                  paragraph
                >
                  {paragraph}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Grid item lg style={{ alignSelf: "center" }}>
            <LazyLoadImage
              threshold={550}
              src={section.icon}
              alt={section.iconAlt}
              width="100%"
              style={{ maxWidth: section.iconMaxWidth }}
            />
          </Grid>
        </Grid>
      ))}

      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
