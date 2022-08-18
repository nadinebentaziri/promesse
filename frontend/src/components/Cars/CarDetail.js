import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCar, updateCar } from '../../redux/actions/cars/carActions';

const CarDetail = ({ history }) => {
  const { id } = useParams();

  //Get the car details and fill it in the form
  const carDetails = useSelector(state => state.carDetails);

  const { car, loading } = carDetails;

  const [namevendeur, setnamevendeur] = useState(car && !loading && car.namevendeur);
  const [nameacheteur, setnameacheteur] = useState(car && !loading && car.nameacheteur);
  const [adressev, setadressev] = useState(car && car.adressev);
  const [adressea, setadressea] = useState(car && car.adressea);
  const [codepostalv, setcodepostalv] = useState(car && car.codepostalv);
  const [codepostala, setcodepostala] = useState(car && car.codepostala);
  const [nummatricule, setnummatricule] = useState(car && car.nummatricule);
  const [telvendeur, settelvendeur] = useState(car && car.telvendeur);
  const [telacheteur, settelacheteur] = useState(car && car.telacheteur);
  const [emailv, setemailv] = useState(car && car.emailv);
  const [emaila, setemaila] = useState(car && car.emaila);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCar(id));
  }, [dispatch, id]);

  //dispatch action

  const formSubmitHandler = e => {
    const data = {
      namevendeur,
      nameacheteur,
      adressev,
     adressea,
      codepostalv,
      codepostala,
      nummatricule,
      telvendeur,
      telacheteur,
      emailv,
      emaila,
    };
    e.preventDefault();
    dispatch(updateCar(id, data));
    history.push('/cars');
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {car ? (
            <>
              <h1 className='text-center'>Update</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                <div className='formv'>
                      <div className='form-group'>
                      <label htmlFor='exampleInputEmail1'>num matricule </label>
                      <input
                        value={nummatricule}
                        onChange={e => setnummatricule(e.target.value)}
                        type='text'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder=''
                      />
                    </div>
                    <div className='form-group'>
                      
                        <label htmlFor='exampleInputEmail1'>nom vendeur </label>
                        <input
                          value={namevendeur}
                          onChange={e => setnamevendeur(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>adresse vendeur</label>
                        <input
                          value={adressev}
                          onChange={e => setadressev(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>code postal vendeur</label>
                        <input
                          value={codepostalv}
                          onChange={e => setcodepostalv(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>tel vendeur </label>
                        <input
                          value={telvendeur}
                          onChange={e => settelvendeur(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>email vendeur </label>
                        <input
                          value={emailv}
                          onChange={e => setemailv(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder=''
                        />
                      </div>
                      </div>
                      <div className='forma'>
                    <div className='form-group'>
                      
                        <label htmlFor='exampleInputEmail1'>nom acheteur </label>
                        <input
                          value={nameacheteur}
                          onChange={e => setnameacheteur(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>adresse acheteur</label>
                        <input
                          value={adressea}
                          onChange={e => setadressea(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>code postal acheteur</label>
                        <input
                          value={codepostalv}
                          onChange={e => setcodepostala(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>tel acheteur </label>
                        <input
                          value={telacheteur}
                          onChange={e => settelacheteur(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder=''
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>email acheteur </label>
                        <input
                          value={emaila}
                          onChange={e => setemaila(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder=''
                        />
                      </div>
                      </div>
                  <button type='submit' className='btn btn-dark m-auto'>
                    Create promesse
                  </button>
                </fieldset>
              </form>
            </>
          ) : (
            'No'
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
