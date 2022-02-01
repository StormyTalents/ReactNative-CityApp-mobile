const actions = {
  SET_SPINNER: 'SET_SPINNER',

  setSpinner: (loading = false, message = '') => ({
    type: actions.SET_SPINNER,
    spinner: {
      loading,
      message,
    },
  }),
};

module.exports = actions;