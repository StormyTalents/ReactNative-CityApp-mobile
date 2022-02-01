import {takeLatest, put, select, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
import * as actions from '../Actions/Auth';
import {isResponseValid, onApiError} from '../Helpers/Api';
import NavigationService from 'Navigation/NavigationService';

function* sendResetPasswordLinkTask({sendResetPasswordLink}, {payload}) {
  const response = yield call(sendResetPasswordLink, {
    email: payload.email,
  });
  if (isResponseValid(response)) {
    yield put(actions.successSendResetPasslink());
    yield call(NavigationService.navigate, 'ResetPasswordScreen');
  } else {
    console.log(response);
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* signInWithEmailPasswordTask({signInWithEmailPassword}, {payload}) {
  const response = yield call(signInWithEmailPassword, {
    email: payload.email,
    password: payload.password,
    rememberMe: payload.rememberMe,
  });
  console.log('login result', response.data);
  if (isResponseValid(response) && response.data.succeeded) {
    yield put(
      actions.setProfileData({
        token: response.data.token,
        username: response.data.username,
        email: payload.email,
        loginerror: false,
        firstLogin: response.data.firstLogin,
        userType: response.data.userType,
        customerUsername:response.data.customerUsername
      }),
    );
    if (response.data.firstLogin) {
      yield call(NavigationService.navigate, 'NotificationFirstScreen');
    } else {
      yield call(NavigationService.navigate, 'HomeScreen');
    }
  } else {
    yield put(
      actions.setProfileData({
        token: '',
        username: '',
        email: '',
        loginerror: true,
      }),
    );
    console.log(response);
  }
}

function* registerGuestUserTask({registerGuestUser}, {payload}) {
  const response = yield call(registerGuestUser, {
    deviceId: payload.deviceId,
    firebaseToken: payload.firebaseToken,
    cityName:payload.cityName
  });
  console.log('loginguest result', response.data)
  if (isResponseValid(response) && response.data.succeeded) {
    yield put(
      actions.setProfileData({
        token: response.data.token,
        username: response.data.username,
        email: response.data.email,
        loginerror: false,
        firstLogin: response.data.firstLogin,
        userType: response.data.userType,
        customerUsername:response.data.customerUsername
      }),
    );
    // if (response.data.firstLogin) {
    //   yield call(NavigationService.navigate, 'NotificationFirstScreen');
    // } else {
    yield call(NavigationService.navigate, 'HomeScreen');
    // }
  } else {
    yield put(
      actions.setProfileData({
        token: '',
        username: '',
        email: '',
        loginerror: true,
      }),
    );
    console.log(response);
  }
}

function* registerSendEmailTask({registerSendEmail}, {payload}) {
  const response = yield call(registerSendEmail, {
    email: payload.email,
    firstname: payload.firstname,
    surname: payload.surname,
    firebaseToken:payload.firebaseToken,
    deviceId: payload.deviceId,
    cityName: payload.cityName,
  });
  if (isResponseValid(response) && response.data.succeeded) {
    yield put(actions.setProfileData({token: '', username: ''}));
    yield call(NavigationService.navigate, 'RegisterSendEmailSuccessScreen');
  } else {
    yield put(actions.setProfileData({token: '', username: ''}));
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* logoutUserTask({logoutUser}, {payload}) {
  const response = yield call(logoutUser);
  if (isResponseValid(response)) {
    yield call(NavigationService.navigate, 'LaunchScreen');
  } else {
    console.log(response);
    Alert.alert('Error', JSON.stringify(response));
  }
}

export default function* root(api) {
  yield takeLatest(
    actions.SIGN_IN_WITH_EMAIL_PASSWORD.REQUEST,
    signInWithEmailPasswordTask,
    api,
  );
  yield takeLatest(
    actions.REGISTER_SEND_EMAIL.REQUEST,
    registerSendEmailTask,
    api,
  );

  yield takeLatest(actions.LOG_OUT.REQUEST, logoutUserTask, api);
  yield takeLatest(
    actions.SEND_RESET_PASSWORD_LINK.REQUEST,
    sendResetPasswordLinkTask,
    api,
  );
  yield takeLatest(
    actions.REGISTER_GUEST_USER.REQUEST,
    registerGuestUserTask,
    api,
  );
}
