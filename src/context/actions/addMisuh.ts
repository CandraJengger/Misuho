import { ADD_MISUH, MISUH, MISUH_LOADING } from '../../constants';
import Misuh from '../../types/Misuh.interface';

const addMisuh =
  (allMisuh: Misuh[], misuh: Misuh) => (dispatch: any) => (onSuccess: any) => {
    if (allMisuh === undefined) {
      allMisuh = [];
    }
    allMisuh.push(misuh);

    dispatch({
      type: MISUH_LOADING,
    });

    localStorage.setItem(MISUH, JSON.stringify(allMisuh));

    dispatch({
      type: ADD_MISUH,
      payload: allMisuh,
    });

    onSuccess();
  };

export default addMisuh;
