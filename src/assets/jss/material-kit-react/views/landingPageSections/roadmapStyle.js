import { title } from "assets/jss/material-kit-react.js";

const roadmapStyle = {
  section: {
    margin: "670px 0 70px 0",
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
  },
  description: {
    color: "#999",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  roadmapContainer: {
    position: "relative",
    padding: "50px 0",
  },
  roadmapSectionContainer: {
    visibility: "visible",
    display: "flex",
    flexWrap: "wrap",
    paddingBottom: "30px",
  },
  roadmapSection: {
    width: "calc(100% - 54px)",
    paddingLeft: "28px",
  },
  roadmapDot: {
    width: "54px",
    height: "54px",
    position: "relative",
    zIndex: "99",
    "@media (max-width: 1000px)": {
      height: "50px",
      width: "50px",
    },
    "@media (max-width: 500px)": {
      height: "40px",
      width: "40px",
    },
  },
  roadmapPhase: {
    fontWeight: "bold",
    fontSize: "44px",
    letterSpacing: "0.125em",
    color: "#3C4858",
    marginBottom: "18px",
    marginTop: "0",
  },
  roadmapItemTitle: {
    fontWeight: "bold",
    color: "#3C4858",
  },
};

export default roadmapStyle;
