import { takeLatest, put, select, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as actions from '../Actions/Report';
import { isResponseValid, onApiError } from "../Helpers/Api";
import NavigationService from "Navigation/NavigationService";

function* getReportsNearbyAPlaceTask({ getReportsNearbyAPlace }, { payload }) {
  let params = { Latitude: payload.currRegion.latitude, Longitude: payload.currRegion.longitude, Email: payload.email, Token: payload.token }
  const response = yield call(getReportsNearbyAPlace, params);
  if (isResponseValid(response)) {
    yield put(actions.setReportsNearbyAPlace({ error_reports_data: response.data }))
  } else {
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* getReportWithIdTask({ getReportWithId }, { payload }) {
  const response = yield call(getReportWithId, {
    id: payload.id,
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.setReportWithId({ reportdata: response.data }))
    yield call(NavigationService.navigate, 'ErrorDetailScreen')
  } else {
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* getReportsForReporterTask({ getReportsForReporter }, { payload }) {
  let params = { id: payload.id, isDraft: payload.isDraft, email: payload.email, token: payload.token }
  const response = yield call(getReportsForReporter, params);
  if (isResponseValid(response)) {
    yield put(actions.setReportsForReporter({ draftlist: response.data }))
    if (payload.isDraft) {
      yield call(NavigationService.navigate, 'DraftsListScreen')
    }
    else {
      yield call(NavigationService.navigate, 'MatterScreen')
    }
  } else {
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* getPublicCategoriesTask({ getPublicCategories }, { payload }) {
  const response = yield call(getPublicCategories);
  if (isResponseValid(response)) {
    yield put(actions.setPublicCategories({ categorydata: response.data }))
  } else {
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* addNewCommentTask({ addNewComment }, { payload }) {
  const response = yield call(addNewComment, {
    commentText: payload.commentText,
    reportId: payload.reportId,
    commentType: payload.commentType,
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.addNewCommentSuccess())
  } else {
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* createReportTask({ createReport }, { payload }) {
  const response = yield call(createReport, {
    title: payload.title,
    description: payload.description,
    location: payload.location,
    type: payload.type,
    priority: payload.priority,
    category: payload.category,
    customerUsername: payload.customerUsername,
    imagesIds: payload.imagesIds,
    email: payload.email,
    isDraft: payload.isDraft,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.createReportSuccess({
      ticketId: response.data.id,
      title: response.data.title,
      createdTime: response.data.createdTime,
      receivingText: response.data.receivingText,
      ticketStatus: response.data.status,
    }))
    yield call(NavigationService.navigate, 'AddResultScreen')
  } else {
    yield put(actions.createReportFailed())
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* getBriefReportWithIdTask({ getBriefReportWithId }, { payload }) {
  const response = yield call(getBriefReportWithId, {
    id: payload.id,
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.setBriefReportWithId({ briefreportdata: response.data }))
    yield call(NavigationService.navigate, 'MatterChatScreen')
  } else {
    Alert.alert('Error', JSON.stringify(response));
  }
}

export default function* root(api) {
  yield takeLatest(actions.GET_REPORTS_NEAR_BY_PLACE.REQUEST, getReportsNearbyAPlaceTask, api);
  yield takeLatest(actions.GET_REPORT_WITH_ID.REQUEST, getReportWithIdTask, api);
  yield takeLatest(actions.GET_REPORTS_FOR_REPORTER.REQUEST, getReportsForReporterTask, api);
  yield takeLatest(actions.GET_PUBLIC_CATEGORIES.REQUEST, getPublicCategoriesTask, api);
  yield takeLatest(actions.ADD_NEW_COMMENT.REQUEST, addNewCommentTask, api);
  yield takeLatest(actions.CREATE_REPORT.REQUEST, createReportTask, api);
  yield takeLatest(actions.GET_BRIEF_REPORT_WITH_ID.REQUEST, getBriefReportWithIdTask, api);

}