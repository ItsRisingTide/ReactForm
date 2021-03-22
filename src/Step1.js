import React from "react";
import { Typography } from "@material-ui/core";
import MainContainer from "./components/MainContainer";
import Form from "./components/Form";
import Input from "./components/Input";
import PrimaryButton from "./components/PrimaryButton";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { getFirstAndLastName } from "./components/formSlice";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});

const Step1 = () => {
  let history = useHistory();
  let dispatch = useDispatch();

  const { firstName, lastName } = useSelector((state) => state.form);

  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: firstName, lastName: lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    history.push("/step2");
    dispatch(getFirstAndLastName(data));
  };
  return (
    <>
      <MainContainer>
        <Typography variant="h5" component="h1">
          Step 1
        </Typography>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Input
            ref={register}
            id="firstName"
            type="text"
            label="First Name"
            name="firstName"
            error={!!errors.firstName}
            helperText={errors?.firstName?.message}
          />
          <Input
            ref={register}
            id="lastName"
            type="text"
            label="Last Name"
            name="lastName"
            error={!!errors.lastName}
            helperText={errors?.lastName?.message}
          />
          <PrimaryButton>Next</PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
};

export default Step1;
