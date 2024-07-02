import axios from "axios";

const REST_API_URL_HEADER = "http://localhost:8080/api/reviewheader";

export const getHeaderPopular = () => axios.get(REST_API_URL_HEADER);

const REST_API_URL_POPULAR = "http://localhost:8080/api/reviewfirstsection";

export const getPopularItem = () => axios.get(REST_API_URL_POPULAR);

const REST_API_URL_Card = "http://localhost:8080/api/card";

export const getAllCard = () => axios.get(REST_API_URL_Card);