import {actionsGenerator} from 'Helpers/Actions';
const actions = {
  SET_TAG_VALUE: actionsGenerator('SET_TAG_VALUE'),
  CREATE_EVENT: actionsGenerator('CREATE_EVENT'),
  OPEN_CALENDAR: actionsGenerator('OPEN_CALENDAR'),

  setTagValue: ({tagValue}) => ({
    type: actions.SET_TAG_VALUE.REQUEST,
    payload: {
      tagValue,
    },
  }),
  openCalendarScreen: ({date, fromDate, toDate, email, token}) => ({
    type: actions.OPEN_CALENDAR.REQUEST,
    payload: {
      date,
      fromDate,
      toDate,
      email,
      token,
    },
  }),
  openCalendarScreenSuccess: ({invitations, colorDots, events}) => ({
    type: actions.OPEN_CALENDAR.SUCCESS,
    payload: {
      invitations,
      colorDots,
      events,
    },
  }),
  openCalendarScreenFailed: () => ({
    type: actions.OPEN_CALENDAR.FAIL,
    payload: {},
  }),
};

module.exports = actions;
