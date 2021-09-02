import React from 'react';
import { GET_MISUH, MISUH, MISUH_LOADING } from '../../constants';

const getAllMisuh = () => (dispatch: React.Dispatch<any>) => {
  dispatch({
    type: MISUH_LOADING,
  });

  const data = JSON.parse(localStorage.getItem(MISUH) || '[]');

  dispatch({
    type: GET_MISUH,
    payload: data,
  });
};

export default getAllMisuh;
