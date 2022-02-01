import { actionsGenerator } from 'Helpers/Actions';

const actions = {
  GET_EVENT_NEAR_BY: actionsGenerator('GET_EVENT_NEAR_BY'),
  GET_PLACE_NEAR_BY: actionsGenerator('GET_PLACE_NEAR_BY'),
  GET_OUTDOOR_PLACE_NEAR_BY: actionsGenerator('GET_OUTDOOR_PLACE_NEAR_BY'),
  GET_LIBRARIES_NEAR_BY: actionsGenerator('GET_LIBRARIES_NEAR_BY'),
  GET_EVENT_WITH_ID: actionsGenerator('GET_EVENT_WITH_ID'),
  GET_PLACE_WITH_ID: actionsGenerator('GET_PLACE_WITH_ID'),
  GET_LIBRARY_WITH_ID: actionsGenerator('GET_LIBRARY_WITH_ID'),

  getEventsNearby: ({ currRegion, email, token, types }) => ({
    type: actions.GET_EVENT_NEAR_BY.REQUEST,
    payload: {
      currRegion, email, token, types
    }
  }),

  setEventsNearby: ({ eventnearbyaata }) => ({
    type: actions.GET_EVENT_NEAR_BY.SUCCESS,
    payload: {
      eventnearbyaata
    }
  }),

  getPlacesNearby: ({ currRegion, email, token, types }) => ({
    type: actions.GET_PLACE_NEAR_BY.REQUEST,
    payload: {
      currRegion, email, token, types
    }
  }),

  setPlacesNearby: ({ placesnearbyata }) => ({
    type: actions.GET_PLACE_NEAR_BY.SUCCESS,
    payload: {
      placesnearbyata
    }
  }),
  getOutdoorPlacesNearby: ({ currRegion, email, token, types }) => ({
    type: actions.GET_OUTDOOR_PLACE_NEAR_BY.REQUEST,
    payload: {
      currRegion, email, token, types
    }
  }),

  setOutdoorPlacesNearby: ({ outdoorplacenearbydata }) => ({
    type: actions.GET_OUTDOOR_PLACE_NEAR_BY.SUCCESS,
    payload: {
      outdoorplacenearbydata
    }
  }),

  getLibrariesNearby: ({ currRegion, email, token, types }) => ({
    type: actions.GET_LIBRARIES_NEAR_BY.REQUEST,
    payload: {
      currRegion, email, token, types
    }
  }),

  setLibrariesNearby: ({ librariesnearbydata }) => ({
    type: actions.GET_LIBRARIES_NEAR_BY.SUCCESS,
    payload: {
      librariesnearbydata
    }
  }),

  getEventWithId: ({ activityId, email, token }) => ({
    type: actions.GET_EVENT_WITH_ID.REQUEST,
    payload: {
      activityId, email, token,
    }
  }),

  setEventWithId: ({ eventdata }) => ({
    type: actions.GET_EVENT_WITH_ID.SUCCESS,
    payload: {
      eventdata
    }
  }),

  getPlaceWithId: ({ id, email, token }) => ({
    type: actions.GET_PLACE_WITH_ID.REQUEST,
    payload: {
      id, email, token,
    }
  }),

  setPlaceWithId: ({ placedata }) => ({
    type: actions.GET_PLACE_WITH_ID.SUCCESS,
    payload: {
      placedata
    }
  }),

  getLibraryWithId: ({ id, email, token }) => ({
    type: actions.GET_LIBRARY_WITH_ID.REQUEST,
    payload: {
      id, email, token,
    }
  }),
  
  setLibraryWithId: ({ librarydata }) => ({
    type: actions.GET_LIBRARY_WITH_ID.SUCCESS,
    payload: {
      librarydata
    }
  }),
}

module.exports = actions;
