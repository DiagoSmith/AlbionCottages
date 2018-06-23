// import { combineReducers } from 'redux';
import moment from "moment";
import {
  ADD_START_DATE,
  ADD_END_DATE,
  FETCH_BLOCKED_DATES,
  FETCH_CALENDAR,
  FETCH_CALENDAR_SUCCESS,
  FETCH_CALENDAR_FAILURE
} from "../Actions/actions";

const initialState = {
  selectedCottage: "all",
  availableDates: [],
  blockedDates: [],
  calendar: [],
  startDate: moment(),
  endDate: moment(),
  loading: false,
  error: null
};

const albion = (state = initialState, action) => {
  switch (action.type) {
    case ADD_START_DATE:
      return {
        ...state,
        startDate: action.date
      };
    case ADD_END_DATE:
      return {
        ...state,
        endDate: action.date
      };
    case FETCH_BLOCKED_DATES:
      return {
        ...state,
        selectedCottage: action.cottage,
        blockedDates: action.blockedDates
      };
    case FETCH_CALENDAR:
      return {
        ...state,
        loading: true
      };
    case FETCH_CALENDAR_SUCCESS:
      return {
        ...state,
        selectedCottage: action.cottage,
        calendar: action.payload,
        loading: false
      };
    case FETCH_CALENDAR_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default albion;
