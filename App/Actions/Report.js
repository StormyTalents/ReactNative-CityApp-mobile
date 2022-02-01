import { actionsGenerator } from 'Helpers/Actions';

const actions = {
  GET_REPORTS_NEAR_BY_PLACE: actionsGenerator('GET_REPORTS_NEAR_BY_PLACE'),
  GET_REPORT_WITH_ID: actionsGenerator('GET_REPORT_WITH_ID'),
  GET_REPORTS_FOR_REPORTER: actionsGenerator('GET_REPORTS_FOR_REPORTER'),
  GET_PUBLIC_CATEGORIES: actionsGenerator('GET_PUBLIC_CATEGORIES'),
  SET_CATEGORY: actionsGenerator('SET_CATEGORY'),
  ADD_NEW_COMMENT: actionsGenerator('ADD_NEW_COMMENT'),
  CREATE_REPORT: actionsGenerator('CREATE_REPORT'),
  GET_BRIEF_REPORT_WITH_ID: actionsGenerator('GET_BRIEF_REPORT_WITH_ID'),

  getReportsNearbyAPlace: ({ currRegion, email, token }) => ({
    type: actions.GET_REPORTS_NEAR_BY_PLACE.REQUEST,
    payload: {
      currRegion, email, token
    }
  }),

  setReportsNearbyAPlace: ({ error_reports_data }) => ({
    type: actions.GET_REPORTS_NEAR_BY_PLACE.SUCCESS,
    payload: {
      error_reports_data
    }
  }),

  getReportWithId: ({ id, email, token }) => ({
    type: actions.GET_REPORT_WITH_ID.REQUEST,
    payload: {
      id, email, token,
    }
  }),

  setReportWithId: ({ reportdata }) => ({
    type: actions.GET_REPORT_WITH_ID.SUCCESS,
    payload: {
      reportdata
    }
  }),

  getReportsForReporter: ({ id, isDraft, email, token }) => ({
    type: actions.GET_REPORTS_FOR_REPORTER.REQUEST,
    payload: {
      id, isDraft, email, token,
    }
  }),

  setReportsForReporter: ({ draftlist }) => ({
    type: actions.GET_REPORTS_FOR_REPORTER.SUCCESS,
    payload: {
      draftlist
    }
  }),

  getPublicCategories: () => ({
    type: actions.GET_PUBLIC_CATEGORIES.REQUEST,
    payload: {
    }
  }),

  setPublicCategories: ({ categorydata }) => ({
    type: actions.GET_PUBLIC_CATEGORIES.SUCCESS,
    payload: {
      categorydata
    }
  }),

  setCategory: ({ category,categoryLabel }) => ({
    type: actions.SET_CATEGORY.SUCCESS,
    payload: {
      category,
      categoryLabel
    }
  }),

  addNewComment: ({ commentText, reportId, commentType, email, token }) => ({
    type: actions.ADD_NEW_COMMENT.REQUEST,
    payload: {
      commentText, reportId, commentType, email, token
    }
  }),

  addNewCommentSuccess: () => ({
    type: actions.ADD_NEW_COMMENT.SUCCESS,
    payload: {

    }
  }),

  createReport: ({ title, description, location, type, priority, category, customerUsername, imagesIds, email, isDraft, token }) => ({
    type: actions.CREATE_REPORT.REQUEST,
    payload: {
      title, description, location, type, priority, category, customerUsername, imagesIds, email, isDraft, token
    }
  }),

  createReportSuccess: ({ ticketId, title, createdTime, receivingText, ticketStatus }) => ({
    type: actions.CREATE_REPORT.SUCCESS,
    payload: {
      ticketId, title, createdTime, receivingText, ticketStatus
    }
  }),

  createReportFailed: () => ({
    type: actions.CREATE_REPORT.FAIL,
    payload: {

    }
  }),

  getBriefReportWithId: ({ id, email, token }) => ({
    type: actions.GET_BRIEF_REPORT_WITH_ID.REQUEST,
    payload: {
      id, email, token,
    }
  }),

  setBriefReportWithId: ({ briefreportdata }) => ({
    type: actions.GET_BRIEF_REPORT_WITH_ID.SUCCESS,
    payload: {
      briefreportdata
    }
  }),

}

module.exports = actions;
