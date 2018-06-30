import { createSelector } from "reselect";
// import moment from "moment";

export const getSelectedCottage = state => state.selectedCottage;
export const getCalendar = state => state.calendar;
export const getDuration = state => {
  const { startDate, endDate } = state;
  return endDate.diff(startDate, "days") + 1;
};

export const makeGetBlockedDates = () =>
  createSelector(
    [getSelectedCottage, getCalendar],
    (selectedCottage, calendar) => {
      const blockedDays = calendar.filter(day => !day.available);

      if (selectedCottage === "all") {
        return blockedDays;
      }

      const individualBlockedDays = blockedDays.filter(
        day => day.listing_id === selectedCottage
      );
      return individualBlockedDays;
    }
  );

export const makeGetAvailableCottages = () =>
  createSelector([getCalendar, getDuration], (calendar, durationDays) => {
    const availableDays = calendar.filter(day => day.available);
    // 2 night minimum stay
    // todo: add min stay to constant
    if (availableDays.length < 2) {
      return [];
    }

    // count each time each cottage appear in the result
    const countCottages = availableDays.reduce(
      (acc, o) => ((acc[o.listing_id] = (acc[o.listing_id] || 0) + 1), acc),
      {}
    );

    // check which cottages counts are equal to the number of days required for stay
    const validCottages = Object.keys(countCottages).filter(
      count => countCottages[count] === durationDays
    );

    return validCottages;
  });
