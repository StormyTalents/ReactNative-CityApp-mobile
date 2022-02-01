import { takeLatest, put, select, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as actions from '../Actions/Reporter';
import { isResponseValid, onApiError } from "../Helpers/Api";

function* getUserFavoriteEventsTask({ getUserFavoriteEvents }, { payload }) {
  const response = yield call(getUserFavoriteEvents, {
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.setUserFavoriteEvents({ favoritedata: response.data }))
  } else {
    console.log(response)
    Alert.alert('Error', JSON.stringify(response));
  }
}

export default function* root(api) {
  yield takeLatest(actions.GET_USER_FAVORITE_EVENTS.REQUEST, getUserFavoriteEventsTask, api);
}
