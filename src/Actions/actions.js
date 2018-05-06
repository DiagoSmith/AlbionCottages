export const ADD_START_DATE = "ADD_START_DATE";
export const ADD_END_DATE = "ADD_END_DATE";
export const FETCH_MONTH_AVAILABILITY = "FETCH_MONTH_AVAILABILITY";
export const FETCH_DATES_AVAILABILITY = "FETCH_DATES_AVAILABILITY";
export const FETCH_CURRENT_DATE = "FETCH_CURRENT_DATE";

export function addStartDate(date) {
  return { type: ADD_START_DATE, date };
}

export function addEndDate(date) {
  return { type: ADD_END_DATE, date };
}
