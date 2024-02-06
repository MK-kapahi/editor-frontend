
export const ERROR_MESSAGES = {
  ENTER_ALL_FIELDS: "All fields are mandatory",
  ENTER_VALID_LENGTH: "enter Name with atleast more than 2 character",
  ENTER_BELOW_LENGTH_LIMIT: (length) => (`Enter Character less than ${length + 1} only`),
  SELECT_IMAGE: " IMAGE SHOULD BE SELECTED",
  ENTER_VALID_EMAIL: "Enter valid email",
  ENTER_AGE_IN_RANGE: "Enter age between 0-100 and numeric value",
  ENTER_NUMBER_ONLY: "Enter number only ",
  ENTER_VALID_CONTACT_NUMBER: "Enter a valid conatct nuber",
  ENTER_ALPHABETS_ONLY: "Enter alphabets only (do not Enter numeric value , special character or space bar",
  ENTER_VALID_PASSWORD: "",
  SELECT_CATEGORY: "SELECT CATEGORY"
}

export const REGEX = {
  USERNAME: /^[a-zA-Z,'.\-\s]*$/,
  EMAIL: /[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}/,
  PASSWORD: /^(?=.{6,})(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/,
  PHONE: /^[6-9]\\d{9}$/,
};

export const URL = process.env.REACT_APP_API_BASE_URL

export const routes = {
    LOGIN : "login",
    SIGN_UP : "sign-up",
    CREATE_POST : "create-post",
    HOME : "home"
}

export const apiEndPoints =
{
  LOGIN: "login",
  REGISTER: "signup",
  CREATE_POST : "createPost",
  GET_POST : "getPost",
  ADD_COMMENT : "addComment",
  GET_COMMENT : "getComment"
}