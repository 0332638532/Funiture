import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://furniture-brodev-backend.herokuapp.com/",
});
