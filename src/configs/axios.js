import axios from "axios";
import { encryptRequestData } from "../utils/encrypt";

const timezone = Intl.DateTimeFormat().resolvedOptions();

const axiosMain = axios.create({
  baseURL: "https://api.adftechnology.com:3000",
  // baseURL: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
    Timezone: timezone.timeZone,
  },
});

axiosMain.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("authToken");
    config.headers.Authorization = `Bearer ${authToken}`;

    if (config.method === "post") {
      const data = config.data;
      config.data = { data: encryptRequestData(data) };
    }

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosMain.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorObj = new Error(
      error?.response?.data?.message ?? "Something went wrong"
    );

    return Promise.reject(errorObj);
  }
);

export default axiosMain;
