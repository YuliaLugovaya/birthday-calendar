// import { CognitoUserSession } from "amazon-cognito-identity-js";
// import { Auth } from "aws-amplify";
// import axios, { AxiosRequestConfig } from "axios";
// import { deletedAccountError, disabledAccountError } from "config/constants";
// import { localStorageManager } from "lib/localStorageManager";
// import { logoutUser } from "utils/logoutUser";

// type IConfig = AxiosRequestConfig & {
//   retry?: number;
// };

// // Create basic configuration for request. URL taken from .env file.
// const apiClient = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
//   withCredentials: true,
// });

// // Set required authorization header for requests.
// apiClient.interceptors.request.use((config: any) => {
//   const token = localStorageManager.getToken();
//   config.headers.Authorization = Bearer ${token};

//   return config;
// });

// apiClient.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     // Handle if user session has expired force user to go to the Login page.
//     const originalConfig = err.config;
//     if (
//       err?.response?.status === 401 &&
//       err?.response?.data !== disabledAccountError &&
//       err?.response?.data !== deletedAccountError
//     ) {
//       logoutUser();
//     }

//     if (err?.response?.status === 403 && !err._isRetry) {
//       originalConfig._isRetry = true;
//       try {
//         await Auth.currentSession().then((data: CognitoUserSession) => {
//           const token = data.getAccessToken().getJwtToken();
//           localStorageManager.setToken(token);
//           originalConfig.headers["Authorization"] = Bearer ${token};
//         });
//         return apiClient.request(originalConfig);
//       } catch (error) {
//         logoutUser();
//       }
//     }

//     return Promise.reject(err);
//   }
// );

// export { apiClient };

const apiClient = {};

export { apiClient };
