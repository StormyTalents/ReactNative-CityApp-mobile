import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LaunchScreen from '../Containers/LaunchScreen';
import IdentificationScreen from '../Containers/IdentificationScreen';
import CheckEmailScreen from '../Containers/CheckEmailScreen';

import GetstartedScreen from '../Containers/GetstartedScreen';
import HomeScreen from '../Containers/HomeScreen';
import AccountScreen from '../Containers/AccountScreen';
import BasicInfoScreen from '../Containers/BasicInfoScreen';
import EditInfoScreen from '../Containers/EditInfoScreen';
import NotificationScreen from '../Containers/NotificationScreen';
import NotificationFirstScreen from '../Containers/NotificationFirstScreen';
import AboutCitiAppScreen from '../Containers/AboutCitiAppScreen';
import MyChildrenScreen from '../Containers/MyChildrenScreen';
import HelpSupportScreen from '../Containers/HelpSupportScreen';
import FaqDetailScreen from '../Containers/FaqDetailScreen';
import ReportFollowupScreen from '../Containers/ReportFollowupScreen';
import CasesIssuesScreen from '../Containers/CasesIssuesScreen';
import EventsPlanningScreen from '../Containers/EventsPlanningScreen';
import CalendarControlScreen from '../Containers/CalendarControlScreen';
import EditAccountScreen from '../Containers/EditAccountScreen';
import CreateMatterScreen from '../Containers/CreateMatterScreen';
import MatterScreen from '../Containers/MatterScreen';
import CaseDetailScreen from '../Containers/CaseDetailScreen';
import MatterChatScreen from '../Containers/MatterChatScreen';
import MatterDetailScreen from '../Containers/MatterDetailScreen';
import ActivityScreen from '../Containers/ActivityScreen';
import FavorteScreen from '../Containers/FavorteScreen';
import ActivityDetailScreen from '../Containers/ActivityDetailScreen';
import PoolDetailScreen from '../Containers/PoolDetailScreen';
import LibraryDetailScreen from '../Containers/LibraryDetailScreen';
import OutdoorDetailScreen from '../Containers/OutdoorDetailScreen';
import ScheduleScreen from '../Containers/ScheduleScreen';
import AddErrorReportScreen from '../Containers/AddErrorReportScreen';
import ErrorDetailScreen from '../Containers/ErrorDetailScreen';
import AddMatterScreen from '../Containers/AddMatterScreen';
import AddResultScreen from '../Containers/AddResultScreen';
import CategorySelectScreen from '../Containers/CategorySelectScreen';
import SelectLocationScreen from '../Containers/SelectLocationScreen';
import DraftsListScreen from '../Containers/DraftsListScreen';
import AddScheduleResultScreen from '../Containers/AddScheduleResultScreen';
import AddEventScreen from '../Containers/AddEventScreen';
import TagSelectScreen from '../Containers/TagSelectScreen';
import GuestSelectScreen from '../Containers/GuestSelectScreen';
import LocationSelectScreen from '../Containers/LocationSelectScreen';
import CalendarInviteScreen from '../Containers/CalendarInviteScreen';
import LoginWithEmailScreen from '../Containers/LoginWithEmailScreen';
import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen';
import ResetPasswordScreen from '../Containers/ResetPasswordScreen';
import ResetPasswordSuccessScreen from '../Containers/ResetPasswordSuccessScreen';
import RegisterSendEmailScreen from '../Containers/RegisterSendEmailScreen';
import RegisterSendEmailSuccessScreen from '../Containers/RegisterSendEmailSuccessScreen';
import SetNewPasswordScreen from '../Containers/SetNewPasswordScreen';
import SetNewPasswordSuccessScreen from '../Containers/SetNewPasswordSuccessScreen';
import SwitchLanguageScreen from '../Containers/SwitchLanguageScreen';
import FeedbackScreen from '../Containers/FeedbackScreen';
import NotificationDetailScreen from '../Containers/NotificationDetailScreen';
import styles from './Styles/NavigationStyles';

const HelpSupportStack = createStackNavigator(
  {
    HelpSupportScreen: {
      screen: HelpSupportScreen,
    },
    FaqDetailScreen: {
      screen: FaqDetailScreen,
    },
    EditAccountScreen: {
      screen: EditAccountScreen,
    },
    CalendarControlScreen: {
      screen: CalendarControlScreen,
    },
    EventsPlanningScreen: {
      screen: EventsPlanningScreen,
    },
    CasesIssuesScreen: {
      screen: CasesIssuesScreen,
    },
    ReportFollowupScreen: {
      screen: ReportFollowupScreen,
    },
    CreateMatterScreen: {
      screen: CreateMatterScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    /////////
    // CheckEmailScreen: {
    //   screen: CheckEmailScreen,
    // },
    ///////
    LaunchScreen: {
      screen: LaunchScreen,
    },
    SetNewPasswordSuccessScreen: {
      screen: SetNewPasswordSuccessScreen,
    },
    SetNewPasswordScreen: {
      screen: SetNewPasswordScreen,
    },
    RegisterSendEmailSuccessScreen: {
      screen: RegisterSendEmailSuccessScreen,
    },
    RegisterSendEmailScreen: {
      screen: RegisterSendEmailScreen,
    },
    ResetPasswordSuccessScreen: {
      screen: ResetPasswordSuccessScreen,
    },
    ResetPasswordScreen: {
      screen: ResetPasswordScreen,
    },
    ForgotPasswordScreen: {
      screen: ForgotPasswordScreen,
    },
    LoginWithEmailScreen: {
      screen: LoginWithEmailScreen,
    },

    NotificationFirstScreen: {
      screen: NotificationFirstScreen,
    },

    IdentificationScreen: {
      screen: IdentificationScreen,
    },

    CheckEmailScreen: {
      screen: CheckEmailScreen
    },

    GetstartedScreen: {
      screen: GetstartedScreen,
    },
    HelpSupportStack: {
      screen: HelpSupportStack,
    },
  },
  {
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    NotificationDetailScreen: {
      screen: NotificationDetailScreen,
    },
    AccountScreen: {
      screen: AccountScreen,
    },
    FeedbackScreen: {
      screen: FeedbackScreen,
    },
    SwitchLanguageScreen: {
      screen: SwitchLanguageScreen,
    },
    MyChildrenScreen: {
      screen: MyChildrenScreen,
    },
    AboutCitiAppScreen: {
      screen: AboutCitiAppScreen,
    },
    NotificationScreen: {
      screen: NotificationScreen,
    },
    EditInfoScreen: {
      screen: EditInfoScreen,
    },
    BasicInfoScreen: {
      screen: BasicInfoScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const ActivityStack = createStackNavigator(
  {
    ActivityScreen: {
      screen: ActivityScreen,
    },
    FavorteScreen: {
      screen: FavorteScreen,
    },
    OutdoorDetailScreen: {
      screen: OutdoorDetailScreen,
    },
    LibraryDetailScreen: {
      screen: LibraryDetailScreen,
    },
    PoolDetailScreen: {
      screen: PoolDetailScreen,
    },
    ActivityDetailScreen: {
      screen: ActivityDetailScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const AddEventStack = createStackNavigator(
  {
    AddErrorReportScreen: {
      screen: AddErrorReportScreen,
    },
    AddMatterScreen: {
      screen: AddMatterScreen,
    },
    AddResultScreen: {
      screen: AddResultScreen,
    },
    ErrorDetailScreen: {
      screen: ErrorDetailScreen,
    },
    DraftsListScreen: {
      screen: DraftsListScreen,
    },
    CategorySelectScreen: {
      screen: CategorySelectScreen,
    },
    AddEventScreen: {
      screen: AddEventScreen,
    },
    SelectLocationScreen: {
      screen: SelectLocationScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const ScheduleStack = createStackNavigator(
  {
    ScheduleScreen: {
      screen: ScheduleScreen,
    },
    CalendarInviteScreen: {
      screen: CalendarInviteScreen,
    },
    LocationSelectScreen: {
      screen: LocationSelectScreen,
    },
    GuestSelectScreen: {
      screen: GuestSelectScreen,
    },
    TagSelectScreen: {
      screen: TagSelectScreen,
    },
    AddScheduleResultScreen: {
      screen: AddScheduleResultScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const MatterStack = createStackNavigator(
  {
    MatterScreen: {
      screen: MatterScreen,
    },
    MatterChatScreen: {
      screen: MatterChatScreen,
    },
    MatterDetailScreen: {
      screen: MatterDetailScreen,
    },
    CaseDetailScreen: {
      screen: CaseDetailScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const MainStack = createSwitchNavigator(
  {
    HomeStack: {
      screen: HomeStack,
    },
    ScheduleStack: {
      screen: ScheduleStack,
    },
    ActivityStack: {
      screen: ActivityStack,
    },
    AddEventStack: {
      screen: AddEventStack,
    },
    MatterStack: {
      screen: MatterStack,
    },
  },
  {
    headerMode: 'none',
  },
);

const PrimaryNav = createStackNavigator(
  {
    AuthStack: {
      screen: AuthStack,
    },
    MainStack: {
      screen: MainStack,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerStyle: styles.header,
    },
  },
);

export default createAppContainer(PrimaryNav);
