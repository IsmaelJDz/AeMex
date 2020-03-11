import axios from "axios";
import { GET_DATA_TRAVELS, LOADING, ERROR } from "../types";

// ===================================
// Async action dispatch to Reducer with data API
// ===================================
export const searchInfo = data => async dispatch => {
  dispatch({
    type: LOADING
  });

  try {
    const respuesta = await axios.get(
      `https://www.aeromexico.com/api/v1/checkin/flight-status?store=mx&pos=WEB&flight=1&date=${data.defaultValue}&origin=${data.origin}&destination=${data.destination}`
    );

    dispatch({
      type: GET_DATA_TRAVELS,
      payload: respuesta.data
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: "Información no disponible."
    });
  }
};
