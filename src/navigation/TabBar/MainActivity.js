import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {View, TouchableOpacity} from 'react-native';
import Notifications from '../../screens/Notifications/Notification';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/VendorProfile';
import DashBoard from '../../screens/dashBoard/DashBoard';
import Icon, {IconType} from '../../components/Icons';
import {COLORS, SCREENS, SIZES, width} from '../../constants';
import {useNavigation} from '@react-navigation/native';
// import More from "../../screens/more/More";

const tabs = {
  Home: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => <Icon name="home-outline" type={IconType.Ionicons} />,
      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
  Noitification: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => (
        <Icon name="ios-notifications-outline" type={IconType.Ionicons} />
      ),
      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
  Profile: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => (
        <Icon name="ios-person-outline" type={IconType.Ionicons} />
      ),
      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
  Dashboard: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => <Icon name="add-outline" type={IconType.Ionicons} />,
      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
  More: {
    labelStyle: {
      color: COLORS.black,
    },
    icon: {
      component: () => <Icon name="menu-outline" type={IconType.Ionicons} />,

      inactiveColor: 'rgba(0,0,0,1)',
    },
  },
};

const Tab = createBottomTabNavigator();

export default function MainActivity() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        headerStyle: {backgroundColor: COLORS.primary},
        tabBarStyle: {
          paddingVertical: SIZES.fifteen,
          backgroundColor: COLORS.primary,
        },
      }}
      initialRouteName={SCREENS.Home}
      tabBar={props => (
        <AnimatedTabBar
          style={{
            backgroundColor: COLORS.primary,
            padd: SIZES.ten,

            borderTopRightRadius: SIZES.twenty,
            borderTopLeftRadius: SIZES.twenty,
          }}
          preset="flashy"
          tabs={tabs}
          {...props}
        />
      )}>
      <Tab.Screen name={SCREENS.Home} component={Home} />
      <Tab.Screen name={SCREENS.Noitification} component={Notifications} />
      <Tab.Screen name={SCREENS.Dashboard} component={DashBoard} />
      <Tab.Screen name={SCREENS.Profile} component={Profile} />
      <Tab.Screen
        name={'More'}
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.toggleDrawer();
          },
        }}
        component={() => <View />}
      />
    </Tab.Navigator>
  );
}
