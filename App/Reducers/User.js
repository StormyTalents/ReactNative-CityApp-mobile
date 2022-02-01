import actions from 'Actions/User';

const initialState = {
  loading: false,
  username: '',
  firstname: '',
  surname: '',
  address: {
    street: '',
    zipCode: '',
    city: '',
    country: '',
    latitude: 0,
    longitude: 0,
  },
  custom_address: {
    street: '',
    zipCode: '',
    city: '',
    country: '',
    latitude: 0,
    longitude: 0,
  },
  custom_location: false,
  profileImage: null,
  profileImageId: null,
  email: '',
  phoneNumber: '',
  token: '',
  type: 10,
  hasChildren: false,
  children: null,
  notificationCategories: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_USER_PROFILE.REQUEST:
      return {
        ...state,
        loading: true
      }
    case actions.GET_USER_PROFILE.SUCCESS:
      return {
        ...state,
        username: payload.username,
        firstname: payload.firstname,
        surname: payload.surname,
        address: payload.address,
        profileImage: payload.profileImage,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        token: payload.token,
        hasChildren: payload.hasChildren,
        profileImageId: payload.profileImageId,
        notificationCategories: payload.notificationCategories,
        loading: false,
      }
    case actions.GET_USER_PROFILE.FAIL:
      return {
        ...state,
        loading: false
      }
    case actions.SET_CREATE_MATTER_TYPE.REQUEST:
      return {
        ...state,
        type: payload.type,
        custom_address: {
          street: '',
          zipCode: '',
          city: '',
          country: '',
          latitude: 0,
          longitude: 0,
        },
        custom_location: false,
      }
    case actions.GET_USER_CHILDREN.REQUEST:
      return {
        ...state,
        loading: true
      }

    case actions.GET_USER_CHILDREN.SUCCESS:
      return {
        ...state,
        children: payload.children,
        loading: false,
      }

    case actions.GET_USER_CHILDREN.FAIL:
      return {
        ...state,
        loading: false
      }

    case actions.UPDATE_USER_EVENTS.REQUEST:
      return {
        ...state,
        loading: true
      }

    case actions.UPDATE_USER_EVENTS.SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case actions.UPDATE_USER_EVENTS.FAIL:
      return {
        ...state,
        loading: false
      }
    case actions.UPDATE_NOTIFICATION_STATUS.REQUEST:
      return {
        ...state,
        loading: true
      }

    case actions.UPDATE_NOTIFICATION_STATUS.SUCCESS:
      return {
        ...state,
        loading: false,
      }

    case actions.UPDATE_NOTIFICATION_STATUS.FAIL:
      return {
        ...state,
        loading: false
      }
    case actions.EDIT_USER_PROFILE.REQUEST:
      return {
        ...state,
        loading: true
      }

    case actions.EDIT_USER_PROFILE.SUCCESS:
      return {
        ...state,
        username: payload.username,
        firstname: payload.firstname,
        surname: payload.surname,
        address: payload.address,
        profileImage: payload.profileImage,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        token: payload.token,
        hasChildren: payload.hasChildren,
        profileImageId: payload.profileImageId,
        loading: false,
      }

    case actions.EDIT_USER_PROFILE.FAIL:
      return {
        ...state,
        loading: false
      }
    case actions.SET_CUSTOM_LOCATION.REQUEST:
      return {
        ...state,
        custom_address: payload.custom_address,
        custom_location: payload.custom_location,
        loading: false,
      }
    default:
      return state;
  }
}
