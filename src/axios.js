import axios from "axios";
// import {useLocation} from "react-router";
const baseURL = "https://maindashbe.herokuapp.com/api/";
// const baseURL = "http://127.0.0.1:8000/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 91000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Bearer " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
axiosInstance.interceptors.response.use(
  (response) => {
    //--Uncomment this in production--//
    // if (window.location.protocol !== "https:") {
    //   window.location.replace(
    //     "https://dashboard.ft9ja.com" + window.location.pathname
    //   );
    // }
    console.log(window.location.pathname);
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    // if (typeof error.response === "undefined") {
    //   alert(
    //     "A server/network error occurred. " +
    //       "Looks like CORS might be the problem. " +
    //       "Sorry about this - we will get it fixed shortly."
    //   );
    //   return Promise.reject(error);
    // }

    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + "token/refresh/"
    ) {
     window.location.href = "https://old.ft9ja.com/login";
      return Promise.reject(error);
    }

    if (
      error.response.data.detail ===
        "Authentication credentials were not provided." &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      //console.log("ommmm777");
      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken === null) {
        window.location.href = "https://old.ft9ja.com/login";
      }
      if (refreshToken === "undefined") {
        //console.log("Refresh token not available.");
        localStorage.setItem("access_token", "");
        localStorage.setItem("refresh_token", "");
        window.location.href = "https://old.ft9ja.com/login";
      } else if (refreshToken) {
        //console.log("ommmm", refreshToken);
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
        //console.log(tokenParts);
        const now = Math.ceil(Date.now() / 1000);
        //console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post("/token/refresh/", { refresh: refreshToken })
            .then((response) => {
              //console.log(response);
              localStorage.setItem("access_token", response.data.access);

              axiosInstance.defaults.headers["Authorization"] =
                "Bearer " + response.data.access;
              originalRequest.headers["Authorization"] =
                "Bearer " + response.data.access;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              //console.log(err);
            });
        } else {
          //console.log("Refresh token is expired", tokenParts.exp, now);
          localStorage.setItem("access_token", "");
          localStorage.setItem("refresh_token", "");
          window.location.href = "https://old.ft9ja.com/login";
        }
      }
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken === "undefined") {
        //console.log("Refresh token not available.");
        localStorage.setItem("access_token", "");
        localStorage.setItem("refresh_token", "");
        window.location.href = "https://old.ft9ja.com/login";
      } else if (refreshToken) {
        //console.log("ommmm");
        const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
        //console.log(tokenParts);
        const now = Math.ceil(Date.now() / 1000);
        //console.log(tokenParts.exp);

        if (tokenParts.exp > now) {
          return axiosInstance
            .post("/token/refresh/", { refresh: refreshToken })
            .then((response) => {
              localStorage.setItem("access_token", response.data.access);

              axiosInstance.defaults.headers["Authorization"] =
                "Bearer " + response.data.access;
              originalRequest.headers["Authorization"] =
                "Bearer " + response.data.access;

              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              //console.log(err);
            });
        } else {
          //console.log("Refresh token is expired", tokenParts.exp, now);
          localStorage.setItem("access_token", "");
          localStorage.setItem("refresh_token", "");
          window.location.href = "https://old.ft9ja.com/login";
        }
      } else if (localStorage.getItem("refresh_token") === "null") {
        //console.log("Refresh token not available.");
        localStorage.setItem("access_token", "");
        localStorage.setItem("refresh_token", "");
        window.location.href = "https://old.ft9ja.com/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
