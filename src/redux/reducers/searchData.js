const GET_DATA_TRAVELS = "GET_DATA_TRAVELS";

const initialState = {
  travels: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA_TRAVELS:
      return {
        ...state,
        isLoading: true,
        travels: [action.payload]
      };

    default:
      return { ...state };
  }
}