import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  grid: {
    position: "absolute",
    width: "100%",
    minHeight: "800px",
    // minWidth: "900px",
    paddingRight: "0px",
    paddingLeft: "0px",
    flexBasis: "auto",
  },
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: "",
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
