import { actionsGenerator } from 'Helpers/Actions';

const actions = {

  GET_USER_PROFILE: actionsGenerator('GET_USER_PROFILE'),
  SET_CREATE_MATTER_TYPE: actionsGenerator('SET_CREATE_MATTER_TYPE'),
  EDIT_USER_PROFILE: actionsGenerator('EDIT_USER_PROFILE'),
  GET_USER_CHILDREN: actionsGenerator('GET_USER_CHILDREN'),
  UPDATE_USER_EVENTS: actionsGenerator('UPDATE_USER_EVENTS'),
  UPDATE_NOTIFICATION_STATUS: actionsGenerator('UPDATE_NOTIFICATION_STATUS'),
  SET_CUSTOM_LOCATION: actionsGenerator('SET_CUSTOM_LOCATION'),

  getUserProfile: ({ email, token }) => ({
    type: actions.GET_USER_PROFILE.REQUEST,
    payload: {
      email, token
    }
  }),

  setUserProfileData: ({ username, firstname, surname, email, phoneNumber, profileImage, address, token, hasChildren, profileImageId, notificationCategories }) => ({
    type: actions.GET_USER_PROFILE.SUCCESS,
    payload: {
      username, firstname, surname, email, phoneNumber, profileImage, address, token, hasChildren, profileImageId, notificationCategories
    }
  }),

  getUserProfileFailed: () => ({
    type: actions.GET_USER_PROFILE.FAIL,
  }),

  setMatterType: (type) => ({
    type: actions.SET_CREATE_MATTER_TYPE.REQUEST,
    payload: {
      type,
    }
  }),

  editUserProfile: ({ username, firstname, surname, email, phoneNumber, token, address, hasChildren, profileImageId }) => ({
    type: actions.EDIT_USER_PROFILE.REQUEST,
    payload: {
      username, firstname, surname, email, phoneNumber, token, address, hasChildren, profileImageId
    }
  }),

  editUserProfileSuccess: ({ username, firstname, surname, email, phoneNumber, profileImage, address, token, hasChildren, profileImageId }) => ({
    type: actions.GET_USER_PROFILE.SUCCESS,
    payload: {
      username, firstname, surname, email, phoneNumber, profileImage, address, token, hasChildren, profileImageId
    }
  }),

  editUserProfileFailed: () => ({
    type: actions.EDIT_USER_PROFILE.FAIL,
    payload: {
    }
  }),

  getUserChildren: ({ email, token }) => ({
    type: actions.GET_USER_CHILDREN.REQUEST,
    payload: {
      email, token,
    }
  }),

  setUserChildren: ({ children }) => ({
    type: actions.GET_USER_CHILDREN.SUCCESS,
    payload: {
      children
    }
  }),

  getUserChildrenFailed: () => ({
    type: actions.GET_USER_CHILDREN.FAIL,
  }),

  updateUserEvents: ({ eventId, email, token }) => ({
    type: actions.UPDATE_USER_EVENTS.REQUEST,
    payload: {
      eventId, email, token
    }
  }),

  updateUserEventsSuccess: () => ({
    type: actions.UPDATE_USER_EVENTS.SUCCESS,
    payload: {
    }
  }),

  updateUserEventsFailed: () => ({
    type: actions.UPDATE_USER_EVENTS.FAIL,
    payload: {
    }
  }),

  updateUserNotifications: ({ notificationCategories, email, token, firstLogin }) => ({
    type: actions.UPDATE_NOTIFICATION_STATUS.REQUEST,
    payload: {
      notificationCategories, email, token, firstLogin
    }
  }),

  updateUserNotificationsSuccess: () => ({
    type: actions.UPDATE_NOTIFICATION_STATUS.SUCCESS,
    payload: {
    }
  }),

  updateUserNotificationsFailed: () => ({
    type: actions.UPDATE_NOTIFICATION_STATUS.FAIL,
    payload: {
    }
  }),

  setCustomLocation: ({ custom_address, custom_location }) => ({
    type: actions.SET_CUSTOM_LOCATION.REQUEST,
    payload: {
      custom_address, custom_location
    }
  }),
}

module.exports = actions;
