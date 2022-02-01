import {all} from 'redux-saga/effects';
import auth from './Auth';
import user from './User';
import activity from './Activity';
import reporter from './Reporter';
import report from './Report';
import image from './Image';
import calendar from './Calendar';
import notification from './Notification';
import {createBackendServer} from '../Service/Api';

const api = createBackendServer();
export default function* root() {
  yield all([
    auth(api),
    user(api),
    activity(api),
    reporter(api),
    report(api),
    image(api),
    notification(api),
    calendar(api),
  ]);
}
