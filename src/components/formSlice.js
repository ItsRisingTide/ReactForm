import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    hasPhone: false,
    phoneNumber: "",
  },

  reducers: {
    getFirstAndLastName(state, action) {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },

    getEmailAndPhoneNumber(state, action) {
      const { email, hasPhone, phoneNumber } = action.payload;
      state.email = email;
      state.hasPhone = hasPhone;
      if (phoneNumber) {
        state.phoneNumber = phoneNumber;
      }
    },
  },
});

export const {
  getFirstAndLastName,
  getEmailAndPhoneNumber,
} = formSlice.actions;

export default formSlice.reducer;
