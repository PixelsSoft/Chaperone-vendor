import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONSTANTS, SCREENS} from '../constants';
import Login from '../screens/auth/Login';
import Splash from '../screens/auth/Splash';
import Verification from '../screens/auth/Verification';
import ForgetPassword from '../screens/auth/ForgetPassword';
import SignUpVender from '../screens/auth/SignUpVender';
import DrawerNavigator from './Drawer/index';
import EditProfile from '../screens/profile/EditProfile';
import TermAndCondition from '../screens/Content/TermAndCondition';
import NotificationSettings from '../screens/Settings/NotificationSettings';
import Settings from '../screens/Settings/Settings';
import AboutApp from '../screens/Content/AboutApp';
import Support from '../screens/Content/Support';
import Booking from '../screens/Booking/Booking';
import BookingConfirm from '../screens/Booking/BookingConfirm';
import Rating from '../screens/Booking/Rating';
import VendorProfile from '../screens/profile/VendorProfile';
import Nearby from '../screens/NearBy/Nearby';
import Search from '../screens/Search/Search';
import PrivacyAndPolicy from '../screens/Content/PrivacyAndPolicy';
import Notifications from '../screens/Notifications/Notification';
import MainLayout from './TabBar/MainActivity';
import BlockScreen from '../screens/blockScreen/BlockScreen';
import FilterSheet from '../components/Modals/FilterSheet';
import UploadCertificate from '../components/Modals/UploadCertificate';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Modals/Loader';
import ResetPassword from '../screens/auth/ResetPassword';
import {saveAccessToken} from '../redux/Slices/Auth';
import {useState} from 'react';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProfile} from '../redux/Slices/Profile';
import {getContent} from '../redux/Slices/Content';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

export default function (props) {
  const Loading = useSelector(state => state.Loader.Loading);
  const dispatcher = useDispatch();
  const token = useSelector(state => state.auth.accessToken);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    getUserAccessToken();
  }, [token]);

  const getUserAccessToken = async () => {
    if (token !== null && token !== undefined) {
      await dispatcher(saveAccessToken(token));
      getProfileData();
    } else {
      setTimeout(() => {
        setAppLoading(false);
      }, 2000);
    }
  };

  const getProfileData = async () => {
    dispatcher(getProfile(''))
      .unwrap()
      .then(response => {
        // console.log('getProfile response: ', response);
        dispatcher(getContent(''));
        setAppLoading(false);
      })
      .catch(error => {
        console.log('getProfile error: ', error);
      });
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {appLoading ? (
        <Loader visible={appLoading} />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={screenOptions}
            // initialRouteName={SCREENS.Splash}
          >
            {token === null || token === undefined ? (
              <>
                <Stack.Screen name={SCREENS.Splash} component={Splash} />
                <Stack.Screen name={SCREENS.Login} component={Login} />

                <Stack.Screen
                  name={SCREENS.Verification}
                  component={Verification}
                />
                <Stack.Screen
                  name={SCREENS.SignUpVendor}
                  component={SignUpVender}
                />
                <Stack.Screen
                  name={SCREENS.ResetPassword}
                  component={ResetPassword}
                />
                <Stack.Screen
                  name={SCREENS.ForgotPassword}
                  component={ForgetPassword}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name={SCREENS.DrawerNavigator}
                  component={DrawerNavigator}
                />
                <Stack.Screen
                  name={SCREENS.EditProfile}
                  component={EditProfile}
                />
                <Stack.Screen
                  name={SCREENS.VendorMainLayout}
                  component={MainLayout}
                />
                {/* <Stack.Screen name={SCREENS.UserHome} component={UserHome} /> */}

                <Stack.Screen
                  name={SCREENS.NotificationSetting}
                  component={NotificationSettings}
                />
                <Stack.Screen
                  name={SCREENS.TermsAndConditions}
                  component={TermAndCondition}
                />
                <Stack.Screen name={SCREENS.AboutApp} component={AboutApp} />
                <Stack.Screen
                  name={SCREENS.PrivacyAndPolicy}
                  component={PrivacyAndPolicy}
                />
                <Stack.Screen name={SCREENS.Setting} component={Settings} />
                <Stack.Screen
                  name={SCREENS.BlockScreen}
                  component={BlockScreen}
                />
                <Stack.Screen name={SCREENS.Seacrh} component={Search} />
                <Stack.Screen
                  name={SCREENS.HelpAndSupport}
                  component={Support}
                />
                <Stack.Screen name={SCREENS.ViewJob} component={Booking} />
                <Stack.Screen name={SCREENS.Rating} component={Rating} />
                <Stack.Screen name={SCREENS.NearByMapView} component={Nearby} />
                <Stack.Screen
                  name={SCREENS.Noitification}
                  component={Notifications}
                />
                <Stack.Screen
                  name={SCREENS.Profile}
                  component={VendorProfile}
                />
                <Stack.Screen
                  name={SCREENS.BookingConfirm}
                  component={BookingConfirm}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
      <FilterSheet />
      <UploadCertificate />
      <Loader visibility={Loading} />
    </>
  );
}

const styles = StyleSheet.create({});
