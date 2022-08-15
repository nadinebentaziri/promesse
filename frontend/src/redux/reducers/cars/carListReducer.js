import {
  FETCH_CAR_FAIL,
  FETCH_CAR_REQUEST,
  FETCH_CAR_SUCCESS,
} from '../../actions/actionTypes';

const carListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CAR_REQUEST:
      return {
        loading: true,
      };
    case FETCH_CAR_SUCCESS:
      return {
        cars: action.payload,
      };

    case FETCH_CAR_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { carListReducer };
