import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <>
      <Container container="main" maxWidth="xs" {...props}>
        {children}
      </Container>
    </>
  );
};

export default MainContainer;
