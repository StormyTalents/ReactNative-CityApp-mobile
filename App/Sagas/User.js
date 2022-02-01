import { takeLatest, put, select, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as actions from '../Actions/User';
import { isResponseValid, onApiError } from "../Helpers/Api";
import NavigationService from "Navigation/NavigationService";

function* getUserProfileTask({ getUserProfile }, { payload }) {
  const response = yield call(getUserProfile, {
    email: payload.email,
    token: payload.token
  });
  // console.log('get user profile', response);
  if (isResponseValid(response)) {
    yield put(actions.setUserProfileData({
      username: response.data.username,
      firstname: response.data.firstname,
      surname: response.data.surname,
      email: response.data.email,
      phoneNumber: response.data.phoneNumber,
      profileImage: response.data.profileImage,
      address: response.data.address,
      token: response.data.token,
      hasChildren: response.data.hasChildren,
      profileImageId: response.data.profileImageId,
      notificationCategories: response.data.notificationCategories
    }))
  } else {
    yield put(actions.getUserProfileFailed())
    Alert.alert('Error:', JSON.stringify(response));
  }
}

function* editUserProfileTask({ editUserProfile }, { payload }) {
  const response = yield call(editUserProfile, {
    firstname: payload.firstname,
    surname: payload.surname,
    email: payload.email,
    phoneNumber: payload.phoneNumber,
    token: payload.token,
    address: payload.address,
    profileImageId: payload.profileImageId,
  });
  if (isResponseValid(response)) {
    yield put(actions.editUserProfileSuccess({
      username: response.data.username,
      firstname: response.data.firstname,
      surname: response.data.surname,
      email: response.data.email,
      phoneNumber: response.data.phoneNumber,
      profileImage: response.data.profileImage,
      address: response.data.address,
      token: response.data.token,
      hasChildren: response.data.hasChildren,
      profileImageId: response.data.profileImageId,
    }))
    yield call(NavigationService.navigate, 'BasicInfoScreen')
  } else {
    yield put(actions.editUserProfileFailed({}));
    console.log(response)
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* getUserChildrenTask({ getUserChildren }, { payload }) {
  const response = yield call(getUserChildren, {
    email: payload.email,
    password: payload.password
  });
  if (isResponseValid(response) && response.data !== null) {
    yield put(actions.setUserChildren({
      children: response.data.children,
    }))
  } else {
    yield put(actions.getUserChildrenFailed())
    console.log(response)
    Alert.alert('Error:', JSON.stringify(response));
  }
}

function* updateUserEventsTask({ updateUserEvents }, { payload }) {
  const response = yield call(updateUserEvents, {
    eventId: payload.eventId,
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.updateUserEventsSuccess())
  } else {
    yield put(actions.updateUserEventsFailed())
    console.log(response)
    Alert.alert('Error:', JSON.stringify(response));
  }
}

function* updateUserNotificationsTask({ updateUserNotifications }, { payload }) {
  const response = yield call(updateUserNotifications, {
    notificationCategories: payload.notificationCategories,
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.updateUserNotificationsSuccess())
    if (payload.firstLogin) {
      yield call(NavigationService.navigate, 'HomeScreen')
    }
    else {
      yield call(NavigationService.navigate, 'AccountScreen')
    }
  } else {
    yield put(actions.updateUserNotificationsFailed())
    console.log(response)
    Alert.alert('Error:', JSON.stringify(response));
  }
}
export default function* root(api) {
  yield takeLatest(actions.GET_USER_PROFILE.REQUEST, getUserProfileTask, api);
  yield takeLatest(actions.GET_USER_CHILDREN.REQUEST, getUserChildrenTask, api);
  yield takeLatest(actions.EDIT_USER_PROFILE.REQUEST, editUserProfileTask, api);
  yield takeLatest(actions.UPDATE_USER_EVENTS.REQUEST, updateUserEventsTask, api);
  yield takeLatest(actions.UPDATE_NOTIFICATION_STATUS.REQUEST, updateUserNotificationsTask, api);
}
