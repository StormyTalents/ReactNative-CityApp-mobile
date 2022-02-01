import actions from 'Actions/Image';

const initialState = {
  loading: false,
  imageId: null,
  image: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.UPLOAD_PROFILE_IMAGE.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.UPLOAD_PROFILE_IMAGE.SUCCESS:
      return {
        ...state,
        loading: false,
        imageId: payload.imageId,
        image: payload.image,
      }
    case actions.UPLOAD_PROFILE_IMAGE.FAIL:
      return {
        ...state,
        loading: false,
      }
    default:
      return state;
  }
}
