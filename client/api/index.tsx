import API from "./axios";

// categories
export const getAllCategoriesApi = async () => API.get("/categories");

// Articles
export const getAllArticles = async (queryString: string) =>
  API.get(`/articles?${queryString}`);
