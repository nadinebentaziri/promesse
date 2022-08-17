import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsAction } from '../../redux/actions/cars/carActions';
import Loading from '../Loading/Loading';
const Cars = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch action
    dispatch(fetchCarsAction());
  }, [dispatch]);

  //GRAB THE DATA FROM OUR STORE
  const { cars, loading } = useSelector(state => {
    return state.carsList;
  });
  console.log(cars);
  console.log(loading);

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>nom vendeur</th>
                <th scope='col'>nom acheteur</th>
                <th scope='col'>num matricule</th>
                <th scope='col'>Action</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <Loading />
              ) : (
                <>
                  {cars &&
                    cars.map(car => {
                      return (
                        <>
                          {/* Map through here */}
                          <tr className='table-dark'>
                            <th scope='row'>{car.namevendeur}</th>
                            <td>{car.nameacheteur}</td>
                            <td>
                              <i
                                className='fas fa-trash '
                                style={{
                                  color: 'red',
                                  cursor: 'progress',
                                }}></i>
                            </td>
                            <td>
                              <i
                                className='far fa-edit'
                                style={{
                                  color: 'yellow',
                                  cursor: 'progress',
                                }}></i>
                            </td>
                          </tr>
                          {/* End of map thr */}
                        </>
                      );
                    })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cars;
