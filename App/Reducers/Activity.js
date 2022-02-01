import actions from 'Actions/Activity';

const initialState = {
  username: '',
  token: '',
  loading: false,
  email: '',
  currRegion: {},
  eventnearbyaata: [],
  placesnearbyata: [],
  outdoorplacenearbydata: [],
  librariesnearbydata: [],
  eventdata: {},
  placedata: {},
  librarydata: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_EVENT_NEAR_BY.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_EVENT_NEAR_BY.SUCCESS:
      return {
        ...state,
        loading: false,
        eventnearbyaata: payload.eventnearbyaata
      }
    case actions.GET_PLACE_NEAR_BY.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_PLACE_NEAR_BY.SUCCESS:
      return {
        ...state,
        loading: false,
        placesnearbyata: payload.placesnearbyata
      }
    case actions.GET_OUTDOOR_PLACE_NEAR_BY.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_OUTDOOR_PLACE_NEAR_BY.SUCCESS:
      return {
        ...state,
        loading: false,
        outdoorplacenearbydata: payload.outdoorplacenearbydata
      }
    case actions.GET_LIBRARIES_NEAR_BY.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_LIBRARIES_NEAR_BY.SUCCESS:
      return {
        ...state,
        loading: false,
        librariesnearbydata: payload.librariesnearbydata
      }
    case actions.GET_EVENT_WITH_ID.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_EVENT_WITH_ID.SUCCESS:
      return {
        ...state,
        loading: false,
        eventdata: payload.eventdata
      }
    case actions.GET_PLACE_WITH_ID.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_PLACE_WITH_ID.SUCCESS:
      return {
        ...state,
        loading: false,
        placedata: payload.placedata
      }
    case actions.GET_LIBRARY_WITH_ID.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_LIBRARY_WITH_ID.SUCCESS:
      return {
        ...state,
        loading: false,
        librarydata: payload.librarydata
      }
    default:
      return state;
  }
}
