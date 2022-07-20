import { title } from "assets/jss/material-kit-react.js";

const storyStyle = {
  section: {
    margin: "70px 0 170px 0",
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
    color: "#3C4858",
    textAlign: "left",
  },
  descriptionRight: {
    marginLeft: "30px",
    "@media (max-width: 800px)": {
      marginLeft: "0",
    },
  },
  textCenter: {
    textAlign: "center",
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  sectionAreaMargin: {
    marginTop: "70px",
    "@media (max-width: 800px)": {
      marginTop: "30px",
    },
  },
  sectionArea: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 800px)": {
      display: "block",
    },
  },
  image: {
    width: "auto%",
    height: "auto%",
    maxHeight: "300px",
    borderRadius: "10px",
    boxShadow: "10px 10px 10px #999",
    "@media (max-width: 800px)": {
      maxWidth: "320px",
    },
  },
};

export default storyStyle;
