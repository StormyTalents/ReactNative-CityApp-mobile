import actions from '../Actions/Spinner';
import {CLEAR_REDUX_STATE} from '../Actions/Auth';
const initialState = {
  loading: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_REDUX_STATE:
      return initialState;
    case actions.SET_SPINNER:
      return action.spinner;
    default:
      return state;
  }
};
