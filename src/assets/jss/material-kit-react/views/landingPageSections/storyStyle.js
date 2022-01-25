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
    color: "#999",
    textAlign: "center",
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
    maxHeight: "300px",
    borderRadius: "25px",
    boxShadow: "5px 5px 5px #999",
    "@media (max-width: 800px)": {
      maxHeight: "250px",
      maxWidth: "300px",
    },
    "@media (max-width: 550px)": {
      maxWidth: "220px",
    },
  },
};

export default storyStyle;
