import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getCar } from '../../redux/reducers/carsReducer';
import PopUp from './PopUp';
import './Details.css';

const CarDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const getCarRemote = (id) => {
      dispatch(getCar(id));
    };
    getCarRemote(id);
  }, []);
  const showPopup = () => {
    document.querySelector('.shadow').style.display = 'block';
    setTimeout(() => {
      document.querySelector('.box').style.marginTop = '70px';
    }, 500);
  };

  const carSelected = useSelector((state) => state.car);
  const reserved = (carSelected.reserved === false) ? 'no' : 'yes';
  const button = (reserved === 'no') ? <button type="button" onClick={() => navigate('/reserve')} className="reserve-button p-3 w-40 rounded-3xl text-center mt-5 bg-blue-600 hover:bg-blue-500 capitalize text-white">reserve</button> : <button type="button" className="p-3 w-40 rounded-3xl text-center mt-5 bg-gray-200 text-gray-500 " disabled>Reserved</button>;
  return (
    <>
      <PopUp />
      <div className="car-container lg:w-8/12">
        <div className="img-container">
          <img src={carSelected.image} alt="car-img" className="w-100" />
        </div>
        <div className="details sm:w-52 sm:mx-auto">
          <div className="title flex gap-1 uppercase font-bold">
            <p>{ carSelected.brand }</p>
            <p>{ carSelected.model }</p>
          </div>
          <ul className="data mt-2">
            <li className="flex bg-gray-200">
              <p className="capitalize px-2">year:</p>
              <p className="capitalize px-7">{ carSelected.year }</p>
            </li>
            <li className="flex">
              <p className="capitalize px-2">price:</p>
              <p className="capitalize px-6">{ carSelected.price }</p>
            </li>
            <li className="flex bg-gray-200">
              <p className="capitalize px-2">reserved:</p>
              <p className="capitalize px-0">{ reserved }</p>
            </li>
            <li className="btn flex flex-col items-center">
              { button }
              <button type="button" className="reserve-button p-3 w-40 rounded-3xl text-center mt-5 bg-red-500 hover:bg-red-400 capitalize text-white" onClick={() => { showPopup(); }}>delete</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
