import {takeLatest, put, select, call} from 'redux-saga/effects';
import {Alert} from 'react-native';
import * as actions from '../Actions/Calendar';
import {isResponseValid, onApiError} from '../Helpers/Api';
// import NavigationService from 'Navigation/NavigationService';

function* openCalendarScreenTask({openCalendarScreen}, {payload}) {
  console.log('OpenCamera---', {
    date: payload.date,
    fromDate: payload.fromDate,
    toDate: payload.toDate,
    email: payload.email,
    token: payload.token,
  });
  const response = yield call(openCalendarScreen, {
    date: payload.date,
    fromDate: payload.fromDate,
    toDate: payload.toDate,
    email: payload.email,
    token: payload.token,
  });

  // console.log('opencalendar-report', JSON.stringify(response.data));
  if (isResponseValid(response)) {
    yield put(
      actions.openCalendarScreenSuccess({
        invitations: response.data.invitations,
        colorDots: response.data.colorDots,
        events: response.data.events,
      }),
    );
  } else {
    console.log(response.data);
    yield put(actions.openCalendarScreenFailed());
    Alert.alert('Error', JSON.stringify(response));
  }
}

export default function* root(api) {
  yield takeLatest(actions.OPEN_CALENDAR.REQUEST, openCalendarScreenTask, api);
}
