import { title } from "assets/jss/material-kit-react.js";

const workStyle = {
  section: {
    padding: "70px 0",
    margin: "600px 0 70px 0",
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
  textArea: {
    marginRight: "15px",
    marginLeft: "15px",
  },
  imageContainer: {
    position: "relative",
    textAlign: "center",
    color: "#FFF",
  },
  imageBackground: {
    borderRadius: "25px",
    boxShadow: "5px 5px 5px #999",
    opacity: "80%",
    height: "400px!important",
    width: "100%",
  },
  textOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
  },
};

export default workStyle;
