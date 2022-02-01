import { actionsGenerator } from 'Helpers/Actions';

const actions = {
  GET_USER_FAVORITE_EVENTS: actionsGenerator('GET_USER_FAVORITE_EVENTS'),

  getUserFavoriteEvents: ({ email, token }) => ({
    type: actions.GET_USER_FAVORITE_EVENTS.REQUEST,
    payload: {
      email, token
    }
  }),
  
  setUserFavoriteEvents: ({ favoritedata }) => ({
    type: actions.GET_USER_FAVORITE_EVENTS.SUCCESS,
    payload: {
      favoritedata
    }
  }),
}

module.exports = actions;
