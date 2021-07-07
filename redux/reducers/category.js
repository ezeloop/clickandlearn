import { ADD_CATEGORY, ADD_CATEGORY_ERROR } from "../types/types";

const initialState = {
    loading: false,
    category: ''
  }

  export const categoryReducer = (state = initialState, action) => {

    const { type } = action
  
    switch (type) {
      case ADD_CATEGORY:
        return {
          ...state,
          category: action.payload
        }
      
      default:
        return state
    }
  }