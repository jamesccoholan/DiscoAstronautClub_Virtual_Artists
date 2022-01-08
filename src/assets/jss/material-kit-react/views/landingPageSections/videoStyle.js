import { title } from "assets/jss/material-kit-react.js";

const videoStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
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
  videoContainer: {
    /* position: "absolute",
    top: "0",
    bottom: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    objectFit: "cover", */
  },
  video: {
    /* Make video to at least 100% wide and tall */
    /* minWidth: "100%",
    minHeight: "100%", */

    /* Setting width & height to auto prevents the browser from stretching or squishing the video */
    /*width: "auto",
    height: "auto",*/

    /* Center the video */
    /*position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",*/
    width: "900px",
  },
};

export default videoStyle;
