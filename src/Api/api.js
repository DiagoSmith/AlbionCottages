import axios from "axios";
import moment from "moment";
import { COTTAGE_IDS } from "../Helpers/CottageMap";

// Time Constants
const now = moment().format("YYYY-MM-DD");
const nextMonth = moment()
  .add(1, "months")
  .format("YYYY-MM-DD");

// Send Email Enquiry
export const sendEmail = formData => axios.post("email", formData);

//
// Get availability for Cottage/Cottages
//
export const getAvailability = (
  cottage = "17605474",
  startDate = now,
  endDate = nextMonth
) => {
  // Individual cottage request
  if (cottage !== "all") {
    const payload = { cottage, startDate, endDate };
    return axios
      .post("getAvailability", payload)
      .then(response => response.data)
      .catch(err => err);
  }

  // Request calendar for all cottages
  const cottageRequests = Object.values(COTTAGE_IDS).map(cottageId => {
    const payload = { cottageId, startDate, endDate };
    return axios.post("getAvailability", payload);
  });

  return axios
    .all(cottageRequests)
    .then(
      axios.spread((...responses) => {
        const availability = responses.map(response => {
          const {
            data: { calendar }
          } = response;

          const { listing_id, days } = calendar;
          const daysWithId = days.map(day => {
            const newDay = { ...day, listing_id };
            return newDay;
          });

          return daysWithId;
        });

        const mergedDays = [].concat.apply([], availability);
        return mergedDays;
      })
    )
    .catch(err => console.log(err));
};
