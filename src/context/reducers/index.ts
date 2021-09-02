import { ADD_MISUH, DELETE_MISUH, GET_MISUH } from '../../constants';
import InitialStateType from '../../types/InitialState.type';
import Misuh from '../../types/Misuh.interface';

type ActionType =
  | { type: 'ADD_MISUH'; payload: Misuh[] }
  | { type: 'GET_MISUH'; payload: Misuh[] }
  | { type: 'DELETE_MISUH'; payload: Misuh[] };

const misuhReducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case ADD_MISUH:
    case GET_MISUH:
      return {
        ...state,
        data: action.payload,
      };

    case DELETE_MISUH:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default misuhReducer;
