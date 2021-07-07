import { RESULT_THE_THING, RESULT_THE_THING_OK, RESULT_THE_THING_ERROR } from "../types/types";

const initialState = {
    loading: false,
    result: ''
  }

  export const resultReducer = (state = initialState, action) => {

    const { type } = action
  
    switch (type) {
      case RESULT_THE_THING_OK:
        return {
          ...state,
          result: action.payload
        }
      
      default:
        return state
    }
  }