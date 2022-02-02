import { title } from "assets/jss/material-kit-react.js";

const videoStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  videoStyle: {
    position: "absolute",
    width: "100%",
    left: "50%",
    top: "50%",
    height: "100%",
    objectFit: "fill",
    transform: "translate(-50%, -62%",
    zIndex: "-1",
  },
};

export default videoStyle;
