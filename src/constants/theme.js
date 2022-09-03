import {Dimensions, Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const {width, height} = Dimensions.get('window');

/* *************** Colors ********** */

export const COLORS = {
  primary: '#D9A738',

  orange: '#F89A2B',

  secondary: '#181818',
  blackWithopacity: '#00000085',

  black: '#000000',
  Red: '#FF0000',
  crimson: '#860012',
  white: '#ffffff',
  blue: '#0037c1',
  lightGray: '#D3D3D3',
  gray: '#767577',
  star: '#FFD700',
  golden: '#FFD700',
  purple: '#4e1789',
  lightPurple: '#871af6',
  brownGray: '#5d536a',
  trueGreen: '#1eaf08',
  halfWhite: '#eeeeee',
  charcoalGrey: '#4a4b4d',
  veryLightpink: '#ffeef2',
  transparent: 'transparent',
  textGrey: '#8a7e9a',
  turqoiseGreen: '#00FF77',
  veryLightPink: '#e6e6e6',
};

const appTheme = {COLORS};

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Bold: 'Montserrat-Bold',
  Light: 'Montserrat-Light',
  Medium: 'Montserrat-Medium',
  Regular: 'Montserrat-Regular',

  Ionicons: 'Ionicons',
  AntDesign: 'AntDesign',
  EvilIcons: 'EvilIcons',
  Entypo: 'Entypo',
  FontAwesome: 'FontAwesome',
  Feather: 'Feather',
  MaterialIcons: 'MaterialIcons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Octicons: 'Octicons',
  SimpleLineIcons: 'SimpleLineIcons',
  Fontisto: 'Fontisto',
};

/* * Images * */
export const IMAGES = {
  noWifi: require('../assets/images/no-signal.png'),
  Loader: require('../assets/images/Loader.json'),
  Logo: require('../assets/images/Logo.png'),
  TabBar: require('../assets/images/TabBar.png'),
  Splash: require('../assets/images/Splashbackground.png'),
  User: require('../assets/images/User.png'),
  User1: require('../assets/images/User1.png'),
  User2: require('../assets/images/User2.png'),
  Vendor: require('../assets/images/Vender.png'),
  Timer: require('../assets/images/Timer.png'),
  IconFilter: require('../assets/images/IconFilter.png'),
  HomeBackgroung: require('../assets/images/homeBG.png'),
  Certificate: require('../assets/images/Certificate.png'),
};

/* * Screens * */
export const SCREENS = {
  Startup: 'Startup',
  Dashboard: 'Dashboard',
  AppliedJob: 'AppliedJob',
  Login: 'Login',
  SignUpUser: 'SignUpUser',
  CreateAccount: 'CreateAccount',
  SignUpVendor: 'SignUpVendor',
  AboutApp: 'AboutApp',
  Splash: 'Splash',
  ResetPassword: 'ResetPassword',
  ForgotPassword: 'ForgotPassword',
  Verification: 'Verification',
  NewPassword: 'NewPassword',
  Home: 'Home',
  UserHome: 'UserHome',
  Noitification: 'Noitification',
  Payment: 'Payment',
  Setting: 'Setting',
  TermsAndConditions: 'TermsAndConditions',
  NewOrder: 'NewOrder',
  OrderHistory: 'OrderHistory',
  OrderDetails: 'OrderDetails',
  Coupons: 'Coupons',
  Additem: 'Additem',
  Profile: 'Profile',
  EditProfile: 'EditProfile',
  RiderLogin: 'RiderLogin',
  SelectType: 'SelectType',
  DrawerNavigator: 'DrawerNavigator',
  HelpAndSupport: 'HelpAndSupport',
  NearByMapView: 'NearByMapView',
  VendorMainLayout: 'VendorMainLayout',
  UserMainLayout: 'UserMainLayout',
  PostJob: 'PostJob',
  NotificationSetting: 'NotificationSetting',
  ScheduleTime: 'ScheduleTime',
  BookingConfirm: 'BookingConfirm',
  Rating: 'Rating',
  AddCard: 'AddCard',
  Seacrh: 'Seacrh',
  PrivacyAndPolicy: 'PrivacyAndPolicy',
  VendorProfile: 'VendorProfile',
  ViewJob: 'ViewJob',
  BlockScreen: 'BlockScreen',
};

export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyWidth: width * 0.05,
  twentyFive: height * 0.03,
  twentyFiveWidth: width * 0.08,
  fifty: height * 0.075,
  fiftyWidth: width * 0.13,

  // font sizes
  h16: width * 0.034,
  h18: width * 0.038,
  h20: width * 0.042,
  h22: width * 0.048,
  h24: width * 0.055,
  body08: width * 0.024,
  body10: width * 0.028,
  body12: width * 0.032,
  body14: width * 0.036,
  body16: width * 0.04,
  body18: width * 0.045,
};

export const FONTS = {
  boldFont16: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h16,
    color: COLORS.black,
    fontWeight: '700',
  },
  boldFont18: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  boldFont20: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  boldFont22: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  boldFont24: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  semiBoldFont16: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h16,
    color: COLORS.black,
  },
  semiBoldFont18: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h18,
    color: COLORS.black,
  },
  semiBoldFont20: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h20,
    color: COLORS.black,
  },
  semiBoldFont22: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h22,
    color: COLORS.black,
  },
  semiBoldFont24: {
    fontFamily: FONTFAMILY.SemiBold,
    fontSize: SIZES.h24,
    color: COLORS.black,
  },
  mediumFont10: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body10},
  mediumFont12: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body12},
  mediumFont14: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body14},
  mediumFont16: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body16},
  mediumFont18: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body18},
  regularFont10: {fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body10},
  regularFont12: {fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body12},
  regularFont14: {fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body14},
  regularFont16: {fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body16},
  regularFont18: {fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body18},
  lightFont08: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body08},
  lightFont10: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body10},
  lightFont12: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body12},
  lightFont14: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body14},
  lightFont16: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body16},
  lightFont18: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body18},
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:
      Platform.OS === 'android'
        ? SIZES.fifteen * 1.2
        : getStatusBarHeight(true),
    backgroundColor: COLORS.white,
  },
  splashLogo: {
    width: SIZES.fifteen * 13,
    height: SIZES.fifteen * 13,
    alignSelf: 'center',
  },
  loginView: {
    flex: 1,
    width: '100%',
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
  },
  lightText: {
    fontFamily: FONTFAMILY.Light,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
  headingText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twenty + 5,
    color: COLORS.black,
  },
  paragraphText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.fifteen - 1,
    color: COLORS.black,
  },
  drawerItem: {
    alignItems: 'center',
    borderRadius: SIZES.fifteen,
    paddingVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.fifteen,
  },
  drawerIcon: {
    fontSize: SIZES.fifteen + 10,
  },
  drawerText: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    marginHorizontal: SIZES.fifteen - 5,
  },
  horLine: {
    height: 0.3,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.brownGrey,
  },
  shadow: {
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    shadowColor: COLORS.black,
    backgroundColor: COLORS.white,
  },
});

export const CONSTANTS = {
  Grocery: 'grocery',
  FoodDelievery: 'foodDelievery',
  PickUp: 'PickUp',
  VENDOR: 'VENDOR',
  USER: 'User',
  HUNGER: 'HUNGER',

  REDUX_ACTIONS: {
    ACCESSTOKEN: 'ACCESSTOKEN',
    LOGIN: 'LOGIN',
    AUTHENTICATE: 'AUTHENTICATE',
    LOGOUT: 'LOGOUT',
    SIGNUP: 'SIGNUP',

    SELECTEDSECTION: 'SELECTEDSECTION',
    PICKUP: 'PICKUP',
    GROCERY: 'GROCERY',
    DELIEVERY: 'DELIEVERY',
    SHOWALTER: 'SHOWALTER',
    SHOW_ERROR: 'SHOW_ERROR',
    SHOW_LOADER: 'SHOW_LOADER',
  },

  API_URLS: {
    BASE_VENDOR: 'http://chaperone2.reignsol.net/',
    IMAGE: 'http://chaperone2.reignsol.net/',

    LOGIN: 'api/v1/auth/login',
    LOGOUT: 'api/v1/auth/sign-out',
    SIGN_UP: 'api/v1/auth/register',
    VERIFY_OTP: 'api/v1/auth/verify-otp',
    FORGOT_PASSWORD: 'api/v1/auth/forgot-password',
    RESET_PASSWORD: 'api/v1/auth/reset-password',
    GET_PROFILE: 'api/v1/auth/get-profile',
    SEACRH: 'api/v1/vendors/jobs/search/',
    GET_CONTENT: 'api/v1/contents',
    UPDATE_PROFILE: 'update-profile',
    PAST_ORDERS: 'orders/past-orders',
    NEW_ORDERS: 'orders/new-orders',
    NEW_ORDERS_VIEW: 'orders/getOrderView',
    VIEW_ORDER: 'orders/view-order',
    GROCERY_CATEGORIES: 'items/getGroceryCategories',
    RESTAURANT_CATEGORIES: 'items/getRestaurantCategories',
    ITEMS_BY_CATEGORY: 'items/getByCategory',
    ITEM_CREATE: 'items/create',
    SAVE_DEVICE_TOKEN: '',
    COUPONS: 'coupons',
    CHANGE_ACTIVE_STATUS: 'customer/addRemove',
    ORDER_REJECT: 'orders/reject',
    ORDER_ACCEPT: 'orders/accept',
    ORDER_READY: 'orders/ready-order',
    ORDER_ASSIGN: 'orders/assign',
    ORDER_COMPLETE: 'orders/complete-order',
    GET_EXPERTISE: 'items/getAllExpertise',
    GET_PAYMENTS: 'orders/get-paymentDetails',
  },

  /* * FirebaseConstants * */
  FIREBASE: {
    CHAT: 'Chat',
    MESSAGES: 'messages',
    USERS: 'Users',
    CHATHEADS: 'ChatHeads',
    READ: 'read',
    TOKEN: 'Tokens',
    FCM: 'https://fcm.googleapis.com/fcm/send',
  },

  DESTINATIONS: {
    SIGN_UP: 'sign_up',
    FORGOT_PASSWORD: 'forgot_password',
  },

  CACHE_KEYS: {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    DEFAULT_USER: 'access_token',
    IS_FIRST_TIME: 'is_first_time',
  },
};
