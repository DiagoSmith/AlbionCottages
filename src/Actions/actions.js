import { getAvailability } from "../Api/api";

export const ADD_START_DATE = "ADD_START_DATE";
export const ADD_END_DATE = "ADD_END_DATE";
export const FETCH_MONTH_AVAILABILITY = "FETCH_MONTH_AVAILABILITY";
export const FETCH_DATES_AVAILABILITY = "FETCH_DATES_AVAILABILITY";
export const FETCH_CURRENT_DATE = "FETCH_CURRENT_DATE";
export const FETCH_AVAILABILTY_SUCCESS = "FETCH_CURRENT_DATA_SUCCESS";
export const FETCH_AVAILABILITY_FAILURE = "FETCH_CURRENT_DATE";
export const FETCH_BLOCKED_DATES = "FETCH_BLOCKED_DATES";
export const FETCH_CALENDAR = "FETCH_CALENDAR";
export const FETCH_CALENDAR_SUCCESS = "FETCH_CALENDAR_SUCCESS";
export const FETCH_CALENDAR_FAILURE = "FETCH_CALENDAR_FAILURE";

export function addStartDate(date) {
  return { type: ADD_START_DATE, date };
}

export function addEndDate(date) {
  return { type: ADD_END_DATE, date };
}

export function fetchCalendarSuccess(cottage, payload) {
  return {
    type: FETCH_CALENDAR_SUCCESS,
    cottage,
    payload
  };
}

export function fetchCalendarFailure(err) {
  return {
    type: FETCH_CALENDAR_FAILURE,
    error: err
  };
}

export function fetchCalendar(cottage, startDate, endDate) {
  return function action(dispatch) {
    dispatch({ type: FETCH_CALENDAR });
    getAvailability(cottage, startDate, endDate)
      .then(response => {
        const payload = response;
        dispatch(fetchCalendarSuccess(cottage, payload));
      })
      .catch(err => {
        dispatch(fetchCalendarFailure(err));
      });
  };
}
