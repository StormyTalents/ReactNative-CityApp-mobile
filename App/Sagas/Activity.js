import { takeLatest, put, select, call } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as actions from '../Actions/Activity';
import { isResponseValid, onApiError } from "../Helpers/Api";
import NavigationService from "Navigation/NavigationService";

function* getEventNearByTask({ getEventsNearby }, { payload }) {
  const response = yield call(getEventsNearby, {
    latitude: payload.currRegion.latitude,
    longitude: payload.currRegion.longitude,
    types: [
      payload.types
    ],
    email: payload.email,
    token: payload.token
  });
  if (isResponseValid(response)) {
    yield put(actions.setEventsNearby({ eventnearbyaata: response.data }))
  } else {
    console.log(response)
    // Alert.alert('Error', JSON.stringify(response));
  }
}

function* getPlaceNearByTask({ getPlacesNearby }, { payload }) {
  const response = yield call(getPlacesNearby, {
    latitude: payload.currRegion.latitude,
    longitude: payload.currRegion.longitude,
    types: [
      payload.types
    ],
    email: payload.email,
    token: payload.token
  });
  if (isResponseValid(response)) {
    yield put(actions.setPlacesNearby({ placesnearbyata: response.data }))
  } else {
    console.log(response)
    // Alert.alert('Error', JSON.stringify(response));
  }
}

function* getOutdoorPlacesNearbyTask({ getOutdoorPlacesNearby }, { payload }) {
  const response = yield call(getOutdoorPlacesNearby, {
    latitude: payload.currRegion.latitude,
    longitude: payload.currRegion.longitude,
    types: [
      payload.types
    ],
    email: payload.email,
    token: payload.token
  });
  if (isResponseValid(response)) {
    yield put(actions.setOutdoorPlacesNearby({ outdoorplacenearbydata: response.data }))
  } else {
    console.log(response)
    // Alert.alert('Error', JSON.stringify(response));
  }
}

function* getLibrariesNearbyTask({ getLibrariesNearby }, { payload }) {
  // let params = { Latitude: payload.currRegion.latitude, Longitude: payload.currRegion.longitude, Types: payload.types, Email: payload.email, Token: payload.token }
  const response = yield call(getLibrariesNearby, {
    latitude: payload.currRegion.latitude,
    longitude: payload.currRegion.longitude,
    email: payload.email,
    token: payload.token
  });
  if (isResponseValid(response)) {
    yield put(actions.setLibrariesNearby({ librariesnearbydata: response.data }))
  } else {
    console.log(response)
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* getEventWithIdTask({ getEventWithId }, { payload }) {
  const response = yield call(getEventWithId, {
    activityId: payload.activityId.toString(),
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.setEventWithId({ eventdata: response.data }))
    yield call(NavigationService.navigate, 'ActivityDetailScreen')
  } else {
    console.log(response)
    yield put(actions.setEventWithId({ eventdata: {} }))
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* getPlaceWithIdTask({ getPlaceWithId }, { payload }) {
  const response = yield call(getPlaceWithId, {
    activityId: payload.id.toString(),
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.setPlaceWithId({ placedata: response.data }))
    yield call(NavigationService.navigate, 'PoolDetailScreen')
  } else {
    console.log(response)
    Alert.alert('Error', JSON.stringify(response));
  }
}

function* getLibraryWithIdTask({ getLibraryWithId }, { payload }) {
  const response = yield call(getLibraryWithId, {
    activityId: payload.id.toString(),
    email: payload.email,
    token: payload.token,
  });
  if (isResponseValid(response)) {
    yield put(actions.setLibraryWithId({ librarydata: response.data }))
    yield call(NavigationService.navigate, 'LibraryDetailScreen')
  } else {
    console.log(response)
    Alert.alert('Error', JSON.stringify(response));
  }
}

export default function* root(api) {
  yield takeLatest(actions.GET_EVENT_NEAR_BY.REQUEST, getEventNearByTask, api);
  yield takeLatest(actions.GET_PLACE_NEAR_BY.REQUEST, getPlaceNearByTask, api);
  yield takeLatest(actions.GET_OUTDOOR_PLACE_NEAR_BY.REQUEST, getOutdoorPlacesNearbyTask, api);
  yield takeLatest(actions.GET_LIBRARIES_NEAR_BY.REQUEST, getLibrariesNearbyTask, api);
  yield takeLatest(actions.GET_EVENT_WITH_ID.REQUEST, getEventWithIdTask, api);
  yield takeLatest(actions.GET_PLACE_WITH_ID.REQUEST, getPlaceWithIdTask, api);
  yield takeLatest(actions.GET_LIBRARY_WITH_ID.REQUEST, getLibraryWithIdTask, api);
}