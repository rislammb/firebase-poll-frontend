import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { PollContext } from '../context/poll-provider';
import NewPoll from './NewPoll';

const Polls = () => {
  const {
    store: { polls, loading },
    actions
  } = useContext(PollContext);

  useEffect(() => {
    actions.getPolls();
  }, []);

  if (loading)
    return (
      <div className='d-flex justify-content-center'>
        <div className='spinner-border text-info' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      </div>
    );
  return (
    <div>
      <div className='mb-1'>
        <Link to='/' className='btn btn-info btn-sm'>
          Back
        </Link>
        <NewPoll />
      </div>
      {polls
        ? polls.map(poll => (
            <div key={poll.pollId} className='list-group'>
              <Link to={`/poll/${poll.pollId}`}>
                <div className='list-group-item mt-2'>{poll.title}</div>
              </Link>
            </div>
          ))
        : null}
    </div>
  );
};

export default Polls;
