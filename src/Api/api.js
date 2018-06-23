import axios from "axios";
import moment from "moment";

// Time Constants
const now = moment().format("YYYY-MM-DD");
const nextMonth = moment()
  .add(1, "months")
  .format("YYYY-MM-DD");

// Send Email Enquiry
export const sendEmail = formData => axios.post("email", formData);

// Get availability for a Cottage
export const getAvailability = (
  cottage = "17605474",
  startDate = now,
  endDate = nextMonth
) => {
  const property = cottage === "all" ? "17605474" : cottage;
  const payload = { property, startDate, endDate };

  return axios
    .post("getAvailability", payload)
    .then(response => response.data)
    .catch(err => err);
};
