import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontFamily: "Permanent Marker",
    fontSize: "40px",
    color: "#F06FB9",
    textShadow: "1px 1px #e0c7dd",
  },
}));
export const Header = () => {
  const styles = useStyles();
  return (
    <>
      <Typography className={styles.root} component="h1" variant="h5">
        React form
      </Typography>
    </>
  );
};
