
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCar from './components/Cars/AddCar';
import Cars from './components/Cars/Cars';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginUser} />

          <Route exact path='/profile' component={Profile} />
          <Route exact path='/cars' component={Cars} />
          <Route exact path='/addcar' component={AddCar} />
          <Route exact path='/register' component={RegisterUser} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
