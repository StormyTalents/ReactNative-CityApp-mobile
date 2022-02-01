import {actionsGenerator} from 'Helpers/Actions';

const actions = {
  SIGN_UP: actionsGenerator('SIGN_UP'),
  LOG_OUT: actionsGenerator('LOG_OUT'),
  SEND_RESET_PASSWORD_LINK: actionsGenerator('SEND_RESET_PASSWORD_LINK'),
  SIGN_IN_WITH_EMAIL_PASSWORD: actionsGenerator('SIGN_IN_WITH_EMAIL_PASSWORD'),
  REGISTER_SEND_EMAIL: actionsGenerator('REGISTER_SEND_EMAIL'),
  SET_PROFILE_DATA: actionsGenerator('SET_PROFILE_DATA'),
  SET_DEVICE_LOCATION: actionsGenerator('SET_DEVICE_LOCATION'),
  REGISTER_GUEST_USER: actionsGenerator('REGISTER_GUEST_USER'),

  signUp: ({
    email,
    password,
    confirmPassword,
    firstName,
    lastName,
    mobileNo,
    country,
  }) => ({
    type: actions.SIGN_UP.REQUEST,
    payload: {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      mobileNo,
      country,
    },
  }),

  signInWithEmailPassword: ({email, password, rememberMe}) => ({
    type: actions.SIGN_IN_WITH_EMAIL_PASSWORD.REQUEST,
    payload: {
      email,
      password,
      rememberMe,
    },
  }),

  registerGuestUser: ({deviceId, firebaseToken,cityName}) => ({
    type: actions.REGISTER_GUEST_USER.REQUEST,
    payload: {
      deviceId,
      firebaseToken,
      cityName
    },
  }),

  logoutUser: () => ({
    type: actions.LOG_OUT.REQUEST,
    payload: {},
  }),

  sendResetPasswordLink: ({email}) => ({
    type: actions.SEND_RESET_PASSWORD_LINK.REQUEST,
    payload: {
      email,
    },
  }),

  successSendResetPasslink: () => ({
    type: actions.SEND_RESET_PASSWORD_LINK.SUCCESS,
    payload: {},
  }),

  registerSendEmail: ({email, firstname, surname,firebaseToken,deviceId,cityName}) => ({
    type: actions.REGISTER_SEND_EMAIL.REQUEST,
    payload: {
      email,
      firstname,
      surname,
      firebaseToken,
      deviceId,
      cityName
    },
  }),

  setProfileData: ({
    token,
    username,
    email,
    loginerror,
    firstLogin,
    userType,
    customerUsername
  }) => ({
    type: actions.SET_PROFILE_DATA.SUCCESS,
    payload: {
      token,
      username,
      email,
      loginerror,
      firstLogin,
      userType,
      customerUsername
    },
  }),

  setDeviceLocation: (currRegion) => ({
    type: actions.SET_DEVICE_LOCATION.REQUEST,
    payload: {
      currRegion,
    },
  }),
};

module.exports = actions;
