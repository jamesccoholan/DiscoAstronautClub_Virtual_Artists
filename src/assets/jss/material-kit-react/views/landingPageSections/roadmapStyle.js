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
    padding: "8px",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    position: "relative",
    zIndex: "99",
    animation: "pulse 2s infinite",
    boxShadow: "0 0 0 rgb(255 255 255 / 20%)",
    "@media (max-width: 1000px)": {
      height: "50px",
      width: "50px",
    },
    "@media (max-width: 500px)": {
      height: "40px",
      width: "40px",
    },
  },
  roadmapDotInner: {
    width: "100%",
    height: "100%",
    background: "#FFFFFF",
    borderRadius: "50%",
    boxShadow: "inset 0px 8px 4px rgb(0 0 0 / 25%)",
    position: "relative",
    "&:after": {
      content: "",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "#4DC3F4",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: "-5px",
      marginLeft: "-5px",
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
