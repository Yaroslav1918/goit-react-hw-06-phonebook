import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/reduxApi/PhoneBook-selectors";
import { FilterMark, FilterInput, FilterSpan } from "./Filter.styled";
import contactAction from "../../redux/reduxApi/contact-actions";

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
        onChange={(e) => dispatch(contactAction.changeFilter(e.target.value))}
      />
    </FilterMark>
  );
};

export default Filter;
