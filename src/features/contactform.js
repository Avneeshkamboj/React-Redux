import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", phone: 0, email: "", message: "" };

export const contactformSlice = createSlice({
  name: "contactform",
  initialState: { value: initialStateValue },
  reducers: {
    contactsub: (state, action) => {
      state.value = action.payload;
    },

    
  },
});

export const { contactsub } = contactformSlice.actions;

export default contactformSlice.reducer;
