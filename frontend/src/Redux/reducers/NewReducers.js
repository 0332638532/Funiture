import {
  NEW_DETAIL_FAIL,
  NEW_DETAIL_REQUEST,
  NEW_DETAIL_SUCCESS,
  NEW_LIST_FAIL,
  NEW_LIST_REQUEST,
  NEW_LIST_SUCCESS,
} from "../constants/NewConstant";

export const newListReducer = (state = { news: [] }, action) => {
  switch (action.type) {
    case NEW_LIST_REQUEST:
      return { loading: true, news: [] };

    case NEW_LIST_SUCCESS:
      return {
        loading: false,
        news: action.payload.news,
      };

    case NEW_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const newDetailReducer = (state = { newItem: {} }, action) => {
  switch (action.type) {
    case NEW_DETAIL_REQUEST:
      return { ...state, loading: true };

    case NEW_DETAIL_SUCCESS:
      return { loading: false, newItem: action.payload };

    case NEW_DETAIL_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
