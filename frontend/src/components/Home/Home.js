import React from 'react';
import './Home.css';
import carpg from '../../assets/img/car.jpg';
import videoSource from '../../assets/cars.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'>
          <h1>Les Promesses de vente</h1>
          <p>effectuer vos promesses</p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
          <img src={carpg} alt='profile' />
        </div>
      </div>
    </div>
  );
};

export default Home;
