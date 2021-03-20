import {
  GET_NEWS,
  CREATE_NEWS,
  DELETE_NEWS,
  UPDATE_NEWS,
  GET_UPDATE_NEWS,
} from "../actions";

const initialState = {
  items: [],
  item: {},
  selected: undefined,
};

const setNewsData = (news) =>
  window.localStorage.setItem("news", JSON.stringify(news));

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      const items = JSON.parse(window.localStorage.getItem("news"));
      return { ...state, items: items ? items : [] };

    case CREATE_NEWS:
      const newNews = state.items.concat(action.payload);
      window.localStorage.setItem("news", JSON.stringify(newNews));
      return {
        ...state,
        item: action.payload,
      };

    case DELETE_NEWS:
      const afterDeleted = state.items.filter(
        (item, i) => i !== action.payload
      );
      setNewsData(afterDeleted);
      return {
        ...state,
        items: afterDeleted,
      };

    case GET_UPDATE_NEWS:
      return {
        ...state,
        item: state.items[action.payload],
        selected: action.payload,
      };

    case UPDATE_NEWS:
      const editedNews = state.items.map((news, i) =>
        i !== action.selected ? news : action.payload
      );

      setNewsData(editedNews);

      return {
        ...state,
        items: editedNews,
        selected: undefined,
      };

    default:
      return state;
  }
}
