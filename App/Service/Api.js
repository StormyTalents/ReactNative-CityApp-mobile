import apisauce from 'apisauce';
import {Constants} from 'Themes';
export const createBackendServer = (baseURL = Constants.BASE_URL) => {
  const api = apisauce.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 10 * 1000,
  });

  const apiNew = apisauce.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 10 * 1000,
  });

  const apiNewEdit = apisauce.create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    timeout: 10 * 1000,
  });

  const getEventsNearby = (body) => api.post('/Activity/GetEventsNearby', body);
  const getPlacesNearby = (body) => api.post('/Activity/GetPlacesNearby', body);
  const getOutdoorPlacesNearby = (body) =>
    api.post('/Activity/GetOutdoorPlacesNearby', body);
  const getLibrariesNearby = (body) =>
    api.post('/Activity/GetLibrariesNearby', body);
  const signInWithEmailPassword = (body) => api.post('/Account/Login', body);
  const getUserProfile = (body) => api.post('/User/GetUserProfile', body);
  const getUserChildren = (body) => api.post('/User/GetUserChildren', body);
  const registerSendEmail = (body) => api.post('/Reporter/Register', body);
  const logoutUser = () => api.post('/Account/Logout');
  const sendResetPasswordLink = (body) =>
    api.post('/Account/ForgotPassword', body);
  const getEventWithId = (body) => api.post('/Activity/GetEventWithId', body);
  const getPlaceWithId = (body) => api.post('/Activity/GetPlaceWithId', body);
  const getLibraryWithId = (body) =>
    api.post('/Activity/GetLibraryWithId', body);
  const getUserFavoriteEvents = (body) =>
    api.post('/Reporter/GetUserFavoriteEvents', body);
  const registerGuestUser = (body) =>
    api.post('/Reporter/RegisterGuestUser', body);
  const getReportsNearbyAPlace = (params) =>
    api.get('/Report/GetReportsNearbyAPlace', params);
  const getReportWithId = (body) =>
    apiNew.post('/Report/GetReportWithId', body);
  const getReportsForReporter = (params) =>
    api.get('/Report/GetReportsForReporter', params);
  const getPublicCategories = () => api.get('/Report/GetPublicCategories');
  const uploadProfileImage = (body) =>
    apiNewEdit.post('/Image/UploadProfileImage', body);
  const editUserProfile = (body) => api.post('/User/EditUserProfile', body);
  const updateUserEvents = (body) => api.put('/User/UpdateUserEvents', body);
  const updateUserNotifications = (body) =>
    api.put('/User/UpdateUserNotifications', body);
  const addNewComment = (body) => api.put('/Report/AddNewComment', body);
  const createReport = (body) => api.post('/Report/createReport', body);
  const getBriefReportWithId = (body) =>
    api.post('/Report/GetBriefReportWithId', body);
  const getNotificationsNearby = (body) =>
    api.post('/Notification/GetNotificationsNearby', body);
  const getNotificationWithId = (body) =>
    api.post('/Notification/GetNotificationWithId', body);
  const createEvent = (body) => api.post('/Calendar/CreateEvent', body);
  const openCalendarScreen = (body) =>
    api.post('/Calendar/OpenCalendarScreen', body);

  return {
    signInWithEmailPassword,
    getUserProfile,
    registerSendEmail,
    logoutUser,
    sendResetPasswordLink,
    getEventsNearby,
    getPlacesNearby,
    getOutdoorPlacesNearby,
    getLibrariesNearby,
    getEventWithId,
    getPlaceWithId,
    getLibraryWithId,
    getUserFavoriteEvents,
    getReportsNearbyAPlace,
    getReportWithId,
    getReportsForReporter,
    getPublicCategories,
    uploadProfileImage,
    editUserProfile,
    getUserChildren,
    updateUserEvents,
    addNewComment,
    createReport,
    getBriefReportWithId,
    updateUserNotifications,
    getNotificationsNearby,
    getNotificationWithId,
    registerGuestUser,
    createEvent,
    openCalendarScreen,
  };
};

export const problems = {
  NONE: null,
  CLIENT_ERROR: 'CLIENT_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  CONNECTION_ERROR: 'CONNECTION_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR',
  CANCEL_ERROR: 'CANCEL_ERROR',
};