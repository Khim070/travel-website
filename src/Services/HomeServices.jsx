import axios from "axios";

const REST_API_URL_MENUBAR = "http://localhost:8080/api/menubar";

export const getMenuBar = () => axios.get(REST_API_URL_MENUBAR);

const REST_API_URL_BG = "http://localhost:8080/api/headerbackground";

export const getBG = () => axios.get(REST_API_URL_BG);