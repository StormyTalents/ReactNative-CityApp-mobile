import { actionsGenerator } from 'Helpers/Actions';

const actions = {
  UPLOAD_PROFILE_IMAGE: actionsGenerator('UPLOAD_PROFILE_IMAGE'),

  uploadProfileImage: ({ email, token, imageName, file }) => ({
    type: actions.UPLOAD_PROFILE_IMAGE.REQUEST,
    payload: {
      email, token, imageName, file
    }
  }),

  setProfileImage: ({ imageId, image }) => ({
    type: actions.UPLOAD_PROFILE_IMAGE.SUCCESS,
    payload: {
      imageId, image
    }
  }),
  
  uploadProfileImageFailed: () => ({
    type: actions.UPLOAD_PROFILE_IMAGE.FAIL,
    payload: {
      
    }
  }),
}

module.exports = actions;