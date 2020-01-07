import React, { useState, Fragment, useContext } from 'react';

import { PollContext } from '../context/poll-provider';

const NewPoll = props => {
  const { actions } = useContext(PollContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [option1, setOption1] = useState({ name: '', info: '' });
  const [option2, setOption2] = useState({ name: '', info: '' });
  const [option3, setOption3] = useState({ name: '', info: '' });
  const [option4, setOption4] = useState({ name: '', info: '' });

  const handleChange = e => {
    switch (e.target.name) {
      case 'title':
        setTitle(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
      case 'option1Name':
        setOption1({ ...option1, name: e.target.value });
        break;
      case 'option1Info':
        setOption1({ ...option1, info: e.target.value });
        break;
      case 'option2Name':
        setOption2({ ...option2, name: e.target.value });
        break;
      case 'option2Info':
        setOption2({ ...option2, info: e.target.value });
        break;
      case 'option3Name':
        setOption3({ ...option3, name: e.target.value });
        break;
      case 'option3Info':
        setOption3({ ...option3, info: e.target.value });
        break;
      case 'option4Name':
        setOption4({ ...option4, name: e.target.value });
        break;
      case 'option4Info':
        setOption4({ ...option4, info: e.target.value });
        break;
      default:
        break;
    }
  };

  const closeModal = () => {
    const body = document.getElementById('body');
    const exampleModal = document.getElementById('exampleModal');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    body.classList.remove('modal-open');
    exampleModal.classList.remove('show');
    exampleModal.style.display = 'none';

    modalBackdrop.classList.remove('show');
    modalBackdrop.style.position = 'unset';
    modalBackdrop.style.zIndex = '0';
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let options = [];
    if (option3.name.trim() !== '' && option4.name.trim() !== '') {
      options = [option1, option2, option3, option4];
    } else if (option3.name.trim() !== '') {
      options = [option1, option2, option3];
    } else {
      options = [option1, option2];
    }
    let newPoll = {
      title: title.trim(),
      description: description.trim(),
      options
    };
    if (
      title.trim() !== '' &&
      description.trim() !== '' &&
      option1.name.trim() !== '' &&
      option2.name.trim() !== ''
    ) {
      actions.postPoll(newPoll);
      closeModal();
      return;
    } else {
      alert('Title, Description and at least two options must not be empty!');
    }
  };
  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-primary btn-sm ml-2'
        data-toggle='modal'
        data-target='#exampleModal'
      >
        Create Poll
      </button>

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title text-info mx-auto'
                id='exampleModalLabel'
              >
                Create New Poll
              </h5>
              <button
                type='button'
                className='close ml-0'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='title'>Enter a Poll Title</label>
                  <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Enter a poll title'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='description'>Enter a Poll Description</label>
                  <textarea
                    type='text'
                    name='description'
                    value={description}
                    onChange={handleChange}
                    className='form-control'
                    placeholder='Enter a poll description'
                  />
                </div>
                <div className='option-group'>
                  <p>Enter Your Options</p>
                  <div className='option-group-item d-flex'>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='option1Name'
                        value={option1.name}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Option one'
                      />
                    </div>
                    <div className='form-group ml-2'>
                      <input
                        type='text'
                        name='option1Info'
                        value={option1.info}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Option one info'
                      />
                    </div>
                  </div>
                  <div className='option-group-item d-flex'>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='option2Name'
                        value={option2.name}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Option two'
                      />
                    </div>
                    <div className='form-group ml-2'>
                      <input
                        type='text'
                        name='option2Info'
                        value={option2.info}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Option two info'
                      />
                    </div>
                  </div>
                  <div className='option-group-item d-flex'>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='option3Name'
                        value={option3.name}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Option three'
                      />
                    </div>
                    <div className='form-group ml-2'>
                      <input
                        type='text'
                        name='option3Info'
                        value={option3.info}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Option three info'
                      />
                    </div>
                  </div>
                  <div className='option-group-item d-flex'>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='option4Name'
                        value={option4.name}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Option four'
                      />
                    </div>
                    <div className='form-group ml-2'>
                      <input
                        type='text'
                        name='option4Info'
                        value={option4.info}
                        onChange={handleChange}
                        className='form-control'
                        placeholder='Option four info'
                      />
                    </div>
                  </div>
                </div>
                <div className='modal-footer py-2 text-right pr-0'>
                  <button type='submit' className='btn btn-primary px-4'>
                    Create Poll
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NewPoll;
