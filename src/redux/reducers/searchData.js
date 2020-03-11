import { GET_DATA_TRAVELS, LOADING, ERROR } from "../types";

const initialState = {
  travels: [],
  isLoading: false,
  error: "",
};

export default function(state = initialState, action) {
  switch (action.type) {

    case LOADING:
      return {
        ...state,
        isLoading: true
      };

    case GET_DATA_TRAVELS:
      return {
        ...state,
        isLoading: false,
        travels: [action.payload]
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return { ...state };
  }
}