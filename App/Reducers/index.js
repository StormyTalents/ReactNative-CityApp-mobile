import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import spinner from './Spinner';
import auth from './Auth';
import user from './User';
import activity from './Activity';
import reporter from './Reporter';
import report from './Report';
import image from './Image';
import calendar from './Calendar';
import notification from './Notification';

export default combineReducers({
	form: formReducer,
	spinner,
	auth,
	user,
	activity,
	reporter,
	report,
	image,
	notification,
	calendar,
});
