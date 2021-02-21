import types from "../types";

const initialState = {
  post: [],
  loading: true,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_POSTS:
      return { ...state, post: action.payload, loading: false };

    default:
      return state;
  }
};

export default postReducer;
