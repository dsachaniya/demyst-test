import axiosInstance from "./api-client";

export interface AuthUser {
  email: string;
  password: string;
}
const authService = () => {
  const apiClient = axiosInstance(
    "http://localhost:5001/api"
  );
  return (data: AuthUser) =>
    apiClient
      .post("/auth", data)
      .then((res) => 
         res
      )
      .catch((e) => {console.log({e})});
};

export default authService;
