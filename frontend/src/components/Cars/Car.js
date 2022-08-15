import React from 'react';
import { deleteCar} from '../../redux/actions/cars/carActions';
import { useDispatch } from 'react-redux';

const Car = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div class='card mb-3' style={{ maxWidth: '540px' }}>
        <div class='row no-gutters'>
          <div class='col-md-4'>
            <img src='...' class='card-img' alt='...' />
          </div>
          <div class='col-md-8'>
            <div class='card-body'>
              <h5 class='card-title'>Car</h5>
              <p class='card-text'>Car detail</p>
              <p class='card-text'>
                <small class='text-muted'>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
