import React, { forwardRef } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

const Input = forwardRef((props, ref) => {
  const styles = useStyles();
  return (
    <>
      <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        {...props}
      />
    </>
  );
});
export default Input;
