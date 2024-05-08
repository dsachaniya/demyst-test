import axiosInstance from "./api-client";

interface User {
  name: string;
  email: string;
  password: string;
}
const userService = () => {
  const apiClient = axiosInstance(
    "http://localhost:3000/api"
  );
  return (req: User) =>
    apiClient
      .post<User>("/users", req)
      .then((response) => response)
      .catch((e) => e.response);
};
export default userService;
