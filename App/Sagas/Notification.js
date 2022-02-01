import { takeLatest, put, select, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as actions from '../Actions/Notification';
import { isResponseValid, onApiError } from "../Helpers/Api";
import NavigationService from "Navigation/NavigationService";

function* getNotificationsNearbyTask({ getNotificationsNearby }, { payload }) {
  const response = yield call(getNotificationsNearby, {
    latitude: payload.latitude,
    longitude: payload.longitude,
    categories: payload.notificationCategories,
    notificationTyp: payload.notificationType,
    email: payload.email,
    token: payload.token
  });
  console.log('request data', {
    latitude: payload.latitude,
    longitude: payload.longitude,
    categories: payload.notificationCategories,
    notificationTyp: payload.notificationType,
    email: payload.email,
    token: payload.token
  })
  console.log('getNotificationsNearby---',response)
  if (isResponseValid(response)) {
    yield put(actions.getNotificationsNearbySuccess({ notificationdata: response.data, notificationType: payload.notificationType }))
  } else {
    yield put(actions.getNotificationsNearbyFailed())
    // Alert.alert('Error', JSON.stringify(response));
  }
}

function* getNotificationWithIdTask({ getNotificationWithId }, { payload }) {
  const response = yield call(getNotificationWithId, {
    id: payload.id,
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.getNotificationWithIdSuccess({ notification_detail: response.data }))
    yield call(NavigationService.navigate, 'NotificationDetailScreen')
  } else {
    yield put(actions.getNotificationWithIdFail())
    Alert.alert('Error', JSON.stringify(response));
  }
}

// function* getReportsForReporterTask({ getReportsForReporter }, { payload }) {
//   console.log('paypload',payload)
//   let params = { id: payload.id, isDraft: payload.isDraft, email: payload.email, token: payload.token }
//   const response = yield call(getReportsForReporter, params);
//   if (isResponseValid(response)) {
//     yield put(actions.setReportsForReporter({ draftlist: response.data }))
//     if (payload.isDraft) {
//       yield call(NavigationService.navigate, 'DraftsListScreen')
//     }
//     else {
//       yield call(NavigationService.navigate, 'MatterScreen')
//     }
//   } else {
//     Alert.alert('Error', JSON.stringify(response));
//   }
// }

// function* getPublicCategoriesTask({ getPublicCategories }, { payload }) {
//   const response = yield call(getPublicCategories);
//   if (isResponseValid(response)) {
//     yield put(actions.setPublicCategories({ categorydata: response.data }))
//   } else {
//     Alert.alert('Error', JSON.stringify(response));
//   }
// }

// function* addNewCommentTask({ addNewComment }, { payload }) {
//   const response = yield call(addNewComment, {
//     commentText: payload.commentText,
//     reportId: payload.reportId,
//     commentType: payload.commentType,
//     email: payload.email,
//     token: payload.token,
//   });
//   if (isResponseValid(response)) {
//     yield put(actions.addNewCommentSuccess())
//   } else {
//     Alert.alert('Error', JSON.stringify(response));
//   }
// }

// function* createReportTask({ createReport }, { payload }) {
//   console.log('create report payload',payload)
//   const response = yield call(createReport, {
//     title: payload.title,
//     description: payload.description,
//     location: payload.location,
//     type: payload.type,
//     priority: payload.priority,
//     category: payload.category,
//     customerUsername: payload.customerUsername,
//     imagesIds: payload.imagesIds,
//     email: payload.email,
//     isDraft: payload.isDraft,
//     token: payload.token,
//   });
//   console.log('create-report',response)
//   if (isResponseValid(response)) {
//     yield put(actions.createReportSuccess({
//       ticketId: response.data.id,
//       title: response.data.title,
//       createdTime: response.data.createdTime,
//       receivingText: response.data.receivingText,
//       ticketStatus: response.data.status,
//     }))
//     yield call(NavigationService.navigate, 'AddResultScreen')
//   } else {
//     console.log(response)
//     yield put(actions.createReportFailed())
//     Alert.alert('Error', JSON.stringify(response));
//   }
// }

// function* getBriefReportWithIdTask({ getBriefReportWithId }, { payload }) {
//   const response = yield call(getBriefReportWithId, {
//     id: payload.id,
//     email: payload.email,
//     token: payload.token,
//   });
//   if (isResponseValid(response)) {
//     yield put(actions.setBriefReportWithId({ briefreportdata: response.data }))
//     yield call(NavigationService.navigate, 'MatterChatScreen')
//   } else {
//     Alert.alert('Error', JSON.stringify(response));
//   }
// }

export default function* root(api) {
  yield takeLatest(actions.GET_NOTIFICATIONS_NEARBY.REQUEST, getNotificationsNearbyTask, api);
  yield takeLatest(actions.GET_NOTIFICATION_WITH_ID.REQUEST, getNotificationWithIdTask, api);
  // yield takeLatest(actions.GET_REPORTS_FOR_REPORTER.REQUEST, getReportsForReporterTask, api);
  // yield takeLatest(actions.GET_PUBLIC_CATEGORIES.REQUEST, getPublicCategoriesTask, api);
  // yield takeLatest(actions.ADD_NEW_COMMENT.REQUEST, addNewCommentTask, api);
  // yield takeLatest(actions.CREATE_REPORT.REQUEST, createReportTask, api);
  // yield takeLatest(actions.GET_BRIEF_REPORT_WITH_ID.REQUEST, getBriefReportWithIdTask, api);

}