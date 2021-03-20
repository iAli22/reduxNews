import {
  CREATE_NEWS,
  GET_NEWS,
  DELETE_NEWS,
  UPDATE_NEWS,
  GET_UPDATE_NEWS,
} from "./index";

export const addNews = (data) => (dispatch) => {
  dispatch({
    type: CREATE_NEWS,
    payload: data,
  });
};

export const getNewsData = () => ({
  type: GET_NEWS,
});

export const deleteNews = (index) => (dispatch) => {
  dispatch({
    type: DELETE_NEWS,
    payload: index,
  });
};

// get data by index key
export const getEditNews = (key) => (dispatch) => {
  dispatch({
    type: GET_UPDATE_NEWS,
    payload: key,
  });
};

// edit it
export const editNews = (data, selected) => (dispatch) => {
  dispatch({
    type: UPDATE_NEWS,
    payload: data,
    selected,
  });
};
