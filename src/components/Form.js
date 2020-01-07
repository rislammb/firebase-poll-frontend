import React, { useState, useContext } from 'react';

import { PollContext } from '../context/poll-provider';

const Form = () => {
  const {
    store: { poll },
    actions
  } = useContext(PollContext);
  const [voteName, setVoteName] = useState('');

  const onChange = e => {
    setVoteName(e.target.value);
  };

  const voteSubmit = e => {
    e.preventDefault();

    if (!voteName) return;
    return actions.submitVote(poll.pollId, voteName);
  };

  return (
    <form onSubmit={voteSubmit}>
      {poll.options
        ? poll.options.map(opt => (
            <div
              className='form-check my-1 d-flex align-items-center'
              key={`${opt.name}`}
            >
              <input
                className='form-check-input'
                type='radio'
                name='voteopt'
                onChange={onChange}
                id={opt.name}
                value={opt.name}
              />
              <label
                className='form-check-label d-flex align-items-center'
                htmlFor={opt.name}
              >
                {opt.imageUrl ? (
                  <span className='px-1'>
                    <img
                      src={opt.imageUrl}
                      alt='Img'
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%'
                      }}
                    />
                  </span>
                ) : null}
                <span>{opt.name}</span>
                {opt.info ? (
                  <span className='small ml-1'>{`: ${opt.info}`}</span>
                ) : null}
              </label>
            </div>
          ))
        : null}
      <input
        type='submit'
        value='Vote'
        className='btn btn-secondary px-4 mt-3 btn-sm'
      />
    </form>
  );
};

export default Form;
