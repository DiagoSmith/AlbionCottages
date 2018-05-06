// import { combineReducers } from 'redux';
import { ADD_START_DATE } from "../Actions/actions";

const initialState = {
  startDate: undefined,
  endDate: undefined,
  availableDates: []
};

export const albion = (state = initialState, action) => {
  switch (action.type) {
    case ADD_START_DATE:
      return {
        ...state,
        startDate: action.date
      };
    default:
      return state;
  }
};

export default albion;
