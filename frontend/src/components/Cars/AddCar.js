import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCarAction } from '../../redux/actions/cars/carActions';

const AddCar = () => {
  const [namevendeur, setnamevendeur] = useState('');
  const [nameacheteur, setTnameacheteur] = useState('');
  const [adressev, setadressev] = useState('');
  const [adressea, setadressea] = useState('');
 const [codepostalv, setcodepostalv] = useState('');
  const [codepostala, setcodepostala] = useState('');
  const [nummatricule, setnummatricule] = useState('');
  const [telvendeur, settelvendeur] = useState('');
  const [telacheteur, settelacheteur] = useState('');
  const [emailv, setemailv] = useState('');
  const [emaila, setemaila] = useState('');

  //dispatch
  const dispatch = useDispatch();

  //Handle form submit

  const handleFormSubmit = e => {
    e.preventDefault();

    const data = {
      namevendeur,
      nameacheteur,
      adressev,
     // adressea,
      codepostalv,
      //codepostala,
      //nummatricule,
      //telvendeur,
      //telacheteur,
      //emailv,
      //emaila,
    };
    dispatch(createCarAction(data));
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'>
            Click to add Promesse.
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create Car
                  </h5>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                    <span aria-hidden='true'>&times;</span>
                  </button>
                </div>
                <div className='modal-body'>
                  <h1 className='text-center'>Add promesse</h1>
                  <form onSubmit={handleFormSubmit}>
                    <fieldset>
                      <div className='formv'>
                    <div className='form-group'>
                      
                        <label htmlFor='exampleInputEmail1'>name vendeur </label>
                        <input
                          value={namevendeur}
                          onChange={e => setnamevendeur(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Author name'
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
                          placeholder='Book title'
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
                          placeholder='Book title'
                        />
                      </div>
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>name acheteur </label>
                        <input
                          value={nameacheteur}
                          onChange={e => setTnameacheteur(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Author name'
                        />
                      </div>
                      
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>adresse acheteur </label>
                        <input
                          value={nameacheteur}
                          onChange={e => setTnameacheteur(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='Author name'
                        />
                      </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        Create Car
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
                  <button
                    type='button'
                    className='btn btn-danger'
                    data-dismiss='modal'>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
