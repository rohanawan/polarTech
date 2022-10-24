import { SAVE_GLOBALS, UPDATE_ALERT, DISCOUNT_TIMMER, UPDATE_ISSUES_APPLIANCE_BRANDS, SHOW_THANKYOU } from "../action/appAction";

const initialState = {
  globals: {},
  alert: {
    showAlert: false,
    message: ""
  },
  discount_timmer: false,
  issuesApplinacesBrands: {
    issues: [],
    appliances: [],
    brands: []
  },
  show_thankyou: false
};
const app = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_GLOBALS:
      return {
        ...state,
        globals: action.value,
      };
    case UPDATE_ALERT:
      return {
        ...state,
        alert: action.value
      }
    case DISCOUNT_TIMMER:
      return {
        ...state,
        discount_timmer: action.value
      }
    case UPDATE_ISSUES_APPLIANCE_BRANDS:
      return {
        ...state,
        issuesApplinacesBrands: action.value
      }
    case SHOW_THANKYOU:
      return {
        ...state,
        show_thankyou: action.value
      }
    default:
      return state;
  }
};
export default app;