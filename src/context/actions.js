import {
  LOADING_DATA,
  SET_POLLS,
  SET_POLL,
  SUBMIT_VOTE,
  POST_POLL,
  DELETE_POLL
} from './types';
import axios from 'axios';

export const createActions = dispatch => ({
  getPolls: () => {
    dispatch({ type: LOADING_DATA });
    axios
      .get('/polls')
      .then(res => {
        dispatch({
          type: SET_POLLS,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: SET_POLLS,
          payload: []
        });
      });
  },
  getPoll: pollId => {
    dispatch({ type: LOADING_DATA });
    axios
      .get(`/poll/${pollId}`)
      .then(res => {
        dispatch({
          type: SET_POLL,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: POST_POLL,
          payload: {}
        });
      });
  },
  postPoll: newPoll => {
    axios
      .post('/poll', newPoll)
      .then(res => {
        dispatch({
          type: POST_POLL,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  },
  submitVote: (pollId, voteName) => {
    axios
      .post(`/poll/${pollId}/vote`, { name: voteName })
      .then(res => {
        dispatch({
          type: SUBMIT_VOTE,
          payload: res.data
        });
      })
      .catch(err => console.log(err));
  },
  deletePoll: pollId => {
    axios
      .delete(`/poll/${pollId}`)
      .then(() => {
        dispatch({ type: DELETE_POLL, payload: pollId });
      })
      .catch(err => console.log(err));
  }
});
