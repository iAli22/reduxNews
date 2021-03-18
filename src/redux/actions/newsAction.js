import { CREATE_NEWS, GET_NEWS, DELETE_NEWS, UPDATE_NEWS } from "./index";

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
export const editNews = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_NEWS,
    payload: data,
  });
};
