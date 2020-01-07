import {
  LOADING_DATA,
  SET_POLLS,
  SET_POLL,
  SUBMIT_VOTE,
  POST_POLL,
  DELETE_POLL
} from './types';

export const initialState = {
  polls: [],
  poll: {},
  loading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_POLLS:
      return {
        ...state,
        polls: action.payload,
        loading: false
      };
    case SET_POLL:
      return {
        ...state,
        poll: action.payload,
        loading: false
      };
    case SUBMIT_VOTE:
      return {
        ...state,
        poll: action.payload
      };
    case POST_POLL:
      return {
        ...state,
        polls: [action.payload, ...state.polls],
        poll: action.payload
      };
    case DELETE_POLL:
      let delIndex = state.polls.findIndex(
        poll => poll.pollId === action.payload
      );
      state.polls.splice(delIndex, 1);
      return { ...state, poll: {} };
    default:
      return state;
  }
};
