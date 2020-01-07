import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PollContext } from '../context/poll-provider';
import Form from './Form';

const Poll = props => {
  const {
    store: { poll, loading },
    actions
  } = useContext(PollContext);
  const pollId = props.match.params.pollId;

  const deletePoll = async () => {
    if (window.prompt('Are your permitted to delete?') === 'firebasePoll') {
      await actions.deletePoll(pollId);
      return props.history.goBack('/polls');
    } else {
      return window.alert('You are not permitted to delete!');
    }
  };

  useEffect(() => {
    actions.getPoll(pollId);
  }, [pollId]);

  if (loading)
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border text-info' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  return (
    <div className=''>
      <Link to='/polls' className='btn btn-success mb-1 btn-sm'>
        Back to Polls
      </Link>
      <button className='btn btn-danger btn-sm ml-2' onClick={deletePoll}>
        Delete
      </button>
      <div className='card mb-3'>
        <div className='card-header text-center text-info'>
          <h3>{poll.title}</h3>
        </div>
        <div className='card-body'>
          <h6 className='card-title'>
            <span className='text-primary'>Description: </span>
            {poll.description}
          </h6>
          <h6>
            <span className='text-info'>Total Vote: </span> {poll.totalVote}
          </h6>
          <hr />
          {poll.totalVote > 0
            ? poll.options.map(opt => {
                let percent = ((opt.vote / poll.totalVote) * 100).toFixed(2);
                let isEven =
                  poll.options.findIndex(o => o.name === opt.name) % 2;
                return (
                  <div key={Math.round(Math.random() * 100000000000)}>
                    <div className='d-flex'>
                      {opt.name}
                      <span className='ml-auto'>{opt.vote} votes</span>
                    </div>
                    <div className='progress mb-2'>
                      <div
                        className={`progress-bar bg-${
                          isEven ? 'success' : 'info'
                        }`}
                        role='progressbar'
                        style={{ width: `${percent}%` }}
                        aria-valuenow={percent}
                        aria-valuemin='0'
                        aria-valuemax='100'
                      >
                        {percent}%
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
          <h6 className='text-primary pt-3'>What is Your Opinion?</h6>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Poll;
