import React from 'react';
import { DELETE_MISUH, MISUH, MISUH_LOADING } from '../../constants';
import Misuh from '../../types/Misuh.interface';

const deleteMisuh = (misuh: Misuh) => (dispatch: React.Dispatch<any>) => {
  dispatch({
    type: MISUH_LOADING,
  });

  const data = JSON.parse(localStorage.getItem(MISUH) || '[]');
  const allMisuh: Misuh[] = data;

  const newData = allMisuh.filter((item) => item.id !== misuh.id);

  localStorage.setItem(MISUH, JSON.stringify(newData));

  dispatch({
    type: DELETE_MISUH,
    payload: newData,
  });
};

export default deleteMisuh;
