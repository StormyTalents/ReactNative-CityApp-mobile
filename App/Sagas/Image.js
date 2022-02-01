import { takeLatest, put, select, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as actions from '../Actions/Image';

import { isResponseValid, onApiError } from "../Helpers/Api";

import { Platform } from 'react-native';

function* uploadProfileImageTask({ uploadProfileImage }, { payload }) {
  let formdata = new FormData();
  formdata.append('ImageName',payload.imageName);
  formdata.append('Email',payload.email);
  formdata.append('Token',payload.token);
  formdata.append('File', { name: payload.imageName, type: 'image/jpeg', uri: Platform.OS === "android" ? payload.file : payload.file.replace("file://", "") });
  const response = yield call(uploadProfileImage, formdata);

  if (isResponseValid(response)) {
    yield put(actions.setProfileImage({ imageId: response.data.imageId, image: response.data.image }))
  } else {
    console.log(response)
    yield put(actions.uploadProfileImageFailed())
    Alert.alert('Error', JSON.stringify(response));
  }
}

export default function* root(api) {
  yield takeLatest(actions.UPLOAD_PROFILE_IMAGE.REQUEST, uploadProfileImageTask, api);
}
