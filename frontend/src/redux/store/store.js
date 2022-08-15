import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createCarReducer } from '../reducers/cars/createCarReducer';
import { carListReducer } from '../reducers/cars/carListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';

const middlewares = [thunk];

const reducer = combineReducers({
  carCreated: createCarReducer,
  carsList: carListReducer,
  userLogin: userReducer, //login/register
});

//Get user from localstorage and save it into our store

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
