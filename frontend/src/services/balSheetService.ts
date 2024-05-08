import axiosInstance from "./api-client";

const balSheetService = () => {
  const apiClient = axiosInstance(
    "http://localhost:3000/api/v1/balance-sheet"
  );

  return (year: number) =>
    apiClient
      .get(`/${year}`)
      .then((res) => res)
      .catch((err) => err);
};

export default balSheetService;
