import React from "react";
import { FormControlLabel, Typography, Checkbox } from "@material-ui/core";
import MainContainer from "./components/MainContainer";
import Form from "./components/Form";
import PrimaryButton from "./components/PrimaryButton";
import Input from "./components/Input";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";
import parsePhoneNumberFromString from "libphonenumber-js";

import { getEmailAndPhoneNumber } from "./components/formSlice";
import { useDispatch, useSelector } from "react-redux";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email format is not valid")
    .required("Email is a required field"),
});

const normalizedPhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

const Step2 = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const { email, hasPhone: hasPhoneCheck, phoneNumber } = useSelector(
    (state) => state.form
  );

  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      email: email,
      hasPhone: hasPhoneCheck,
      phoneNumber: phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const hasPhone = watch("hasPhone");

  const onSubmitHandler = (data) => {
    history.push("/step3");
    dispatch(getEmailAndPhoneNumber(data));
  };
  return (
    <>
      <MainContainer>
        <Typography variant="h5" component="h1">
          Step 2
        </Typography>
        <Form onSubmit={handleSubmit(onSubmitHandler)}>
          <Input
            ref={register}
            id="email"
            type="email"
            name="email"
            label="Email"
            required
            error={!!errors.email}
            helperText={errors?.email?.message}
          />

          <FormControlLabel
            control={
              <Checkbox
                defaultValue={hasPhoneCheck}
                defaultChecked={hasPhoneCheck}
                name="hasPhone"
                inputRef={register}
                color="primary"
              />
            }
            label="I have a phone"
          />

          {hasPhone && (
            <Input
              ref={register}
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              label="Phone number"
              onChange={(e) => {
                e.target.value = normalizedPhoneNumber(e.target.value);
              }}
            />
          )}
          <PrimaryButton>Next </PrimaryButton>
        </Form>
      </MainContainer>
    </>
  );
};

export default Step2;
