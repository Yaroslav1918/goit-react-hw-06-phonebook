import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phoneBook-actions";

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
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
