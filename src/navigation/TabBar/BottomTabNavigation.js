import React from 'react';
import {Image, StyleSheet, Platform, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, IMAGES, SCREENS, SIZES} from '../../constants';
import Notifications from '../../screens/Notifications/Notification';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/VendorProfile';
import DashBoard from '../../screens/dashBoard/DashBoard';
import Icon, {IconType} from '../../components/Icons';
const screenOptions = {
  headerShown: false,
  animation: 'slide_from_right',
};

const MenuScreen = () => {
  return <View />;
};

const tabs = [
  {
    id: 0,
    name: 'HomeScreen',
    initialRoute: SCREENS.Home,
    component: Home,
    icon: 'home-outline',
  },
  {
    id: 1,
    name: 'NotificationScreen',
    initialRoute: SCREENS.Noitification,
    component: Notifications,
    icon: 'ios-notifications-outline',
  },
  {
    id: 2,
    name: 'DashBoardScreen',
    initialRoute: SCREENS.Dashboard,
    component: DashBoard,
    icon: 'add-outline',
  },
  {
    id: 3,
    name: 'ProfileScreen',
    initialRoute: SCREENS.Profile,
    component: Profile,
    icon: 'ios-person-outline',
  },
  {
    id: 4,
    name: 'MenuScreen',
    initialRoute: '',
    component: MenuScreen,
    icon: 'menu-outline',
  },
];

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarInactiveTintColor: COLORS.halfWhite,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <LinearGradient
            start={{x: 0, y: 3}}
            end={{x: 1, y: 0}}
            colors={['#FCF6BA', COLORS.primary, '#BF953F']}
            style={[StyleSheet.absoluteFill]}
          />
        ),
      }}>
      {tabs.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={({}) => ({
            tabBarIcon: ({focused, color}) => (
              <View
                style={[
                  item.initialRoute === SCREENS.Dashboard && styles.centertab,
                ]}>
                <Icon
                  name={item.icon}
                  type={IconType.Ionicons}
                  color={focused ? COLORS.gray : COLORS.black}
                />
              </View>
            ),
          })}
          listeners={({navigation}) => ({
            tabPress: e => {
              if (item.name === 'MenuScreen') {
                e.preventDefault();
                navigation.toggleDrawer();
              }
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopWidth: 0,
    position: 'absolute',
    height: SIZES.fifty * 1.1,
    backgroundColor: COLORS.black,
    paddingTop: Platform.OS === 'android' ? 0 : SIZES.fifteen,
  },
  centertab: {
    height: SIZES.twentyFive * 1.8,
    width: SIZES.twentyFive * 1.8,
    borderWidth: 1,
    borderRadius: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
