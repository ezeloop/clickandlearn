import { ADD_CATEGORY, ADD_CATEGORY_ERROR } from "../types/types";

export const setCategoryAction = (category) => ({
  //aca tengo que hacer el fetch con strapi-client, y si da error, usar el ADD_CATEGORY_ERROR
  type: ADD_CATEGORY,
  payload: category
});


