import actions from 'Actions/Calendar';

const initialState = {
  tagValue: 1,
  loading: false,
  invitations: [],
  colorDots: [],
  events: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actions.SET_TAG_VALUE.REQUEST:
      return {
        ...state,
        loading: false,
        tagValue: payload.tagValue,
      };
    case actions.OPEN_CALENDAR.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.OPEN_CALENDAR.SUCCESS:
      return {
        ...state,
        invitations: payload.invitations,
        colorDots: payload.colorDots,
        events: payload.events,
        loading: false,
      };
    case actions.OPEN_CALENDAR.FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
