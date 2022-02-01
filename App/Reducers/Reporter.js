import actions from 'Actions/Reporter';

const initialState = {
  username: '',
  token: '',
  loading: false,
  email: '',
  favoritedata: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_USER_FAVORITE_EVENTS.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_USER_FAVORITE_EVENTS.SUCCESS:
      return {
        ...state,
        loading: false,
        favoritedata: payload.favoritedata
      }
    default:
      return state;
  }
}
