import axios from "axios";
const api = axios.create({
  // baseURL: `https://appliances-email-api.herokuapp.com/`,
  // baseURL: `https://admin.polartechappliance.ca/wp-json/wp/v2/`,
  baseURL: `https://api.polartechappliance.ca/wp-json/wp/v2`,
  //https://wordpress-599074-1937278.cloudwaysapps.com/wp-json/wp/v2/
  headers: { Authorization: "Basic YWRtaW5vbGVnOmFkbWlub2xlZyFAIw==" }
})
export default api;