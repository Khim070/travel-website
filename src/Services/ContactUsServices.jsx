import axios from "axios";

const REST_API_URL_HEADER = "http://localhost:8080/api/contactusheader";

export const getHeader = () => axios.get(REST_API_URL_HEADER);

const REST_API_URL_DETAIL = "http://localhost:8080/api/contactusdetail";

export const getAllDetail = () => axios.get(REST_API_URL_DETAIL);