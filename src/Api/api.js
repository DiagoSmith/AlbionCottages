import axios from "axios";

export const sendEmail = formData => axios.post("email", formData);

// export default axios.create({
//   baseURL: `http://jsonplaceholder.typicode.com/`
// });

// export default API;
