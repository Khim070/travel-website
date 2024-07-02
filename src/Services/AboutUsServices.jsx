import axios from "axios";

const REST_API_URL_HEADER = "http://localhost:8080/api/reviewheader";

export const getHeaderPopular = () => axios.get(REST_API_URL_HEADER);

const REST_API_URL_PEOPLE = "http://localhost:8080/api/ourteam";

export const getPeople = () => axios.get(REST_API_URL_PEOPLE);

const REST_API_URL_ABOUTUS = "http://localhost:8080/api/aboutUs";

export const getAllAboutUs = () => axios.get(REST_API_URL_ABOUTUS);