import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phoneBook/phoneBook-selectors";
import { FilterMark, FilterInput, FilterSpan } from "./Filter.styled";
import phoneBookAction from "../../redux/phoneBook/phoneBook-actions";

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <FilterMark>
      <FilterSpan> find contacts by name </FilterSpan>

      <FilterInput
        type="text"
        name="filter"
        value={value}
        onChange={(e) => dispatch(phoneBookAction.changeFilter(e.target.value))}
      />
    </FilterMark>
  );
};

export default Filter;
