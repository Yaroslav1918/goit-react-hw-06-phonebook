import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contact-actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    if (
      state.some(
        (contact) => contact.name.toLowerCase() === payload.name.toLowerCase()
      )
    ) {
      toast(`${payload.name} is already in contacts`);
      return;
    }
    return [...state, payload];
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
