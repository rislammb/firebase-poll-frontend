import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className='py-5'>
    <h1 className='text-center pb-4 text-white'>There is nothing to show</h1>
    <p className='text-center'>
      <Link className='btn btn-light' to='/polls'>
        Go to all Polls
      </Link>
    </p>
  </div>
);

export default Home;
