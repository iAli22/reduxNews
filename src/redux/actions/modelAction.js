import { OPEN_MODEL, CLOSE_MODEL } from "./index";

export const openModel = () => (dispatch) => {
  dispatch({
    type: OPEN_MODEL,
    payload: true,
  });
};
export const closeModel = () => (dispatch) => {
  dispatch({
    type: CLOSE_MODEL,
    payload: false,
  });
};
