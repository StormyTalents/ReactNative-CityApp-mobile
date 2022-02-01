import actions from 'Actions/Notification';
import NavigationService from "Navigation/NavigationService";

const initialState = {
  username: '',
  token: '',
  loading: false,
  email: '',
  error_reports_data: {},
  reportdata: {},
  briefreportdata: {},
  draftlist: [],
  categorydata: [],
  category: 0,
  added: false,
  ticketId: null,
  title: null,
  createdTime: '',
  receivingText: '',
  ticketStatus: 0,
  notificationdata: [],
  notificationType: 10,
  notification_detail: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_NOTIFICATIONS_NEARBY.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_NOTIFICATIONS_NEARBY.SUCCESS:
      return {
        ...state,
        loading: false,
        notificationdata: payload.notificationdata,
        notificationType: payload.notificationType
      }
    case actions.GET_NOTIFICATIONS_NEARBY.FAIL:
      return {
        ...state,
        loading: false,
      }
    case actions.GET_NOTIFICATION_WITH_ID.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case actions.GET_NOTIFICATION_WITH_ID.SUCCESS:
      return {
        ...state,
        loading: false,
        notification_detail: payload.notification_detail,
      }
    case actions.GET_NOTIFICATION_WITH_ID.FAIL:
      return {
        ...state,
        loading: false,
      }
    // case actions.GET_REPORT_WITH_ID.REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   }
    // case actions.GET_REPORT_WITH_ID.SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     reportdata: payload.reportdata
    //   }
    // case actions.GET_REPORTS_FOR_REPORTER.REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   }
    // case actions.GET_REPORTS_FOR_REPORTER.SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     draftlist: payload.draftlist
    //   }
    // case actions.GET_PUBLIC_CATEGORIES.REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   }
    // case actions.GET_PUBLIC_CATEGORIES.SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     categorydata: payload.categorydata
    //   }
    // case actions.SET_CATEGORY.SUCCESS:
    //   NavigationService.goBack();
    //   return {
    //     ...state,
    //     loading: false,
    //     category: payload.category,
    //   }
    // case actions.ADD_NEW_COMMENT.REQUEST:
    //   return {
    //     ...state,
    //     loading: false,
    //     added: false
    //   }
    // case actions.ADD_NEW_COMMENT.SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     added: true
    //   }
    // case actions.CREATE_REPORT.REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   }
    // case actions.CREATE_REPORT.SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     ticketId: payload.ticketId,
    //     title: payload.title,
    //     createdTime: payload.createdTime,
    //     receivingText: payload.receivingText,
    //     ticketStatus: payload.ticketStatus,
    //   }
    // case actions.CREATE_REPORT.FAIL:
    //   return {
    //     ...state,
    //     loading: false,
    //   }
    // case actions.GET_BRIEF_REPORT_WITH_ID.REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   }
    // case actions.GET_BRIEF_REPORT_WITH_ID.SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     briefreportdata: payload.briefreportdata
    //   }
    default:
      return state;
  }
}
