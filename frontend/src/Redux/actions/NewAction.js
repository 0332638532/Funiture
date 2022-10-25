import axios from "axios";
import { axiosInstance } from "../../config";
import {
  NEW_LIST_REQUEST,
  NEW_LIST_FAIL,
  NEW_LIST_SUCCESS,
  NEW_DETAIL_REQUEST,
  NEW_DETAIL_SUCCESS,
  NEW_DETAIL_FAIL,
} from "../constants/NewConstant";

export const listNew = () => async (dispatch) => {
  try {
    dispatch({ type: NEW_LIST_REQUEST });
    const { data } = await axiosInstance.get("/news");
    console.log(data.data);
    dispatch({ type: NEW_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEW_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listNewDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: NEW_DETAIL_REQUEST });
    const { data } = await axiosInstance.get(`/news/${id}`);
    dispatch({ type: NEW_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NEW_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
