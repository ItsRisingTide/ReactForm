import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

const Form = ({ children, ...props }) => {
  const styles = useStyles();
  return (
    <>
      <form noValidate className={styles.root} {...props}>
        {children}
      </form>
    </>
  );
};

export default Form;
