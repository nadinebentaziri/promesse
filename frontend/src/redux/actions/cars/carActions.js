import axios from 'axios';
import {
  CREATE_CAR_FAIL,
  CREATE_CAR_REQUEST,
  CREATE_CAR_SUCCESS,
  FETCH_CAR_FAIL,
  FETCH_CAR_REQUEST,
  FETCH_CAR_SUCCESS,
  FETCH_USERS_REQUEST,
} from '../actionTypes';

const createCarAction = carData => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_CAR_REQUEST,
      });

      const config = {
        'Content-Type': 'application/json',
      };
      const { data } = await axios.post('/api/cars', carData, config);

      dispatch({
        type: CREATE_CAR_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CAR_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch all cars action

const fetchCarsAction = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_CAR_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //make http call to our backend
      const { data } = await axios.get('/api/cars', config);
      dispatch({
        type: FETCH_CAR_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_CAR_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export { createCarAction, fetchCarsAction };
