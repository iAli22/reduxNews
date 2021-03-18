import { OPEN_MODEL, CLOSE_MODEL } from "../actions";

const initialState = {
  open: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODEL:
      return {
        open: action.payload,
      };

    case CLOSE_MODEL:
      return {
        open: action.payload,
      };
    default:
      return state;
  }
}
