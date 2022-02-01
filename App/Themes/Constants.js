import Languages from './Languages';
import Images from './Images';
import Colors from './Colors';
import {calcWidth, calcHeight} from './ConvertSize';

const constants = {
  BASE_URL: 'https://api.simpletec.se',
  Google_Map_API_Key: 'AIzaSyASoRUIwGHAFNCa3Y9asA2tAhPEeSMYJWE',
  sort_arr: [
    {
      title: Languages.Category,
      option1_label: Languages.All_cases,
      option1_valus: Languages.Show_everything,
      option2_label: Languages.School_issues,
      option2_valus: Languages.Show_only_active_cases,
      option3_label: Languages.Dental_issues,
      option3_valus: Languages.Show_cases_that_has_a_result,
    },
    {
      title: Languages.Status,
      option1_label: Languages.All_cases,
      option1_valus: Languages.Show_everything,
      option2_label: Languages.In_Progress,
      option2_valus: Languages.Show_only_active_cases,
      option3_label: Languages.Completed,
      option3_valus: Languages.Show_cases_that_has_a_result,
    },
    {
      title: Languages.Required_Action,
      option1_label: Languages.All_cases,
      option1_valus: Languages.Show_everything,
      option2_label: Languages.Waiting_Approval,
      option2_valus: Languages.Show_cases_that_require_approve_from_your_side,
      option3_label: Languages.No_Action_Required,
      option3_valus: Languages.Show_cases_that_require_no_action,
    },
    {
      title: Languages.Date,
      option1_label: Languages.All_cases,
      option1_valus: Languages.Show_everything,
      option2_label: Languages.Last_month,
      option2_valus: Languages.Show_cases_within_the_last_month,
      option3_label: Languages.Last_Three_Month,
      option3_valus: Languages.Show_cases_within_the_last_90days,
    },
  ],
  actions: [
    {
      text: Languages.Raise_a_Question,
      icon: Images.questions,
      name: 'bt_question',
      position: 1,
      color: Colors.opacity4,
      actionsPaddingTopBottom: calcHeight(1),
    },
    {
      text: Languages.Add_Error_Report,
      icon: Images.error_reports,
      name: 'bt_error',
      position: 2,
      color: Colors.opacity4,
      actionsPaddingTopBottom: calcHeight(1),
    },
    {
      text: Languages.Suggest_Something,
      icon: Images.suggestions,
      name: 'bt_suggest',
      position: 3,
      color: Colors.opacity4,
      actionsPaddingTopBottom: calcHeight(1),
    },
    {
      text: Languages.Create_a_Complaint,
      icon: Images.complaints,
      name: 'bt_complaint',
      position: 4,
      color: Colors.opacity4,
      actionsPaddingTopBottom: calcHeight(1),
    },
  ],
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  times: [
    {
      label:'12 AM',
      value:0,
    },
    {
      label:'1 AM',
      value:1,
    },
    {
      label:'2 AM',
      value:2,
    },
    {
      label:'3 AM',
      value:3,
    },
    {
      label:'4 AM',
      value:4,
    },
    {
      label:'5 AM',
      value:5,
    },
    {
      label:'6 AM',
      value:6,
    },
    {
      label:'7 AM',
      value:7,
    },
    {
      label:'8 AM',
      value:8,
    },
    {
      label:'9 AM',
      value:9,
    },
    {
      label:'10 AM',
      value:10,
    },
    {
      label:'11 AM',
      value:11,
    },
    {
      label:'12 PM',
      value:12,
    },
    {
      label:'1 PM',
      value:13,
    },
    {
      label:'2 PM',
      value:14,
    },
    {
      label:'3 PM',
      value:15,
    },
    {
      label:'4 PM',
      value:16,
    },
    {
      label:'5 PM',
      value:17,
    },
    {
      label:'6 PM',
      value:18,
    },
    {
      label:'7 PM',
      value:19,
    },
    {
      label:'8 PM',
      value:20,
    },
    {
      label:'9 PM',
      value:21,
    },
    {
      label:'10 PM',
      value:22,
    },
    {
      label:'11 PM',
      value:23,
    },
  ],
  cityName:'Kramfors',
};

export default constants;
