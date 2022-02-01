import actions from 'Actions/Auth';

const initialState = {
  username: '',
  token: '',
  loading: false,
  email: '',
  currRegion: {},
  loginerror: false,
  firstLogin: false,
  userType: 12,
  loading1: false,
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actions.SIGN_IN_WITH_EMAIL_PASSWORD.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.REGISTER_SEND_EMAIL.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.SEND_RESET_PASSWORD_LINK.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.SEND_RESET_PASSWORD_LINK.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actions.REGISTER_GUEST_USER.REQUEST:
      return {
        ...state,
        loading1: true,
      };
    case actions.SET_PROFILE_DATA.SUCCESS:
      return {
        ...state,
        username: payload.username,
        token: payload.token,
        email: payload.email,
        loading: false,
        loginerror: payload.loginerror,
        firstLogin: payload.firstLogin,
        userType: payload.userType,
        customerUsername: payload.customerUsername,
        loading1: false,
      };
    case actions.SET_DEVICE_LOCATION.REQUEST:
      return {
        ...state,
        currRegion: payload.currRegion,
      };
    default:
      return state;
  }
};
