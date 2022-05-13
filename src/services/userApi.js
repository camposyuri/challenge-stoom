import axiosServices from "../utils/api";

const getUser = async (userName) => {
  const response = axiosServices.get(`/users/${userName}/repos`);
  return response;
};

export { getUser };
