import {
  CREATE_CAR_FAIL,
  CREATE_CAR_REQUEST,
  CREATE_CAR_SUCCESS,
} from '../../actions/actionTypes';

const createCarReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CAR_REQUEST:
      return {
        loading: true,
      };
    case CREATE_CAR_SUCCESS:
      return {
        car: action.payload,
      };

    case CREATE_CAR_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { createCarReducer };
