import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";

const getToken = () => {
  const user = JSON.parse(window.localStorage.getItem("persist:root"))?.user;
  //console.log("user: ", user);
  const currentUser = user && JSON.parse(user).currentUser;
  //console.log("currentUser: ", currentUser);
  const TOKEN = currentUser?.accessToken;
  //console.log("TOKEN: ", TOKEN);
  return TOKEN;
};

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${getToken()}`,
  },
});
