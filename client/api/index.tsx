import API from "./axios";

// categories
export const getAllCategoriesApi = async () => API.get("/categories");
