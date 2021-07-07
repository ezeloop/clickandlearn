import { RESULT_THE_THING, RESULT_THE_THING_OK, RESULT_THE_THING_ERROR } from "../types/types";

export const setCategory = (result) => ({
  //aca tengo que hacer el fetch con strapi-client, y si da error, usar el ADD_CATEGORY_ERROR
  type: RESULT_THE_THING_OK,
  payload: result
});


