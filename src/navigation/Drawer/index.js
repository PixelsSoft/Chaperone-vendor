import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TransitionPresets} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS, SCREENS, SIZES} from '../../constants';
import DrawerScreen from './DrawerScreen';
// import Home from "../../screen/User/home";
// import Profile from "../../screen/User/profile";
// import Notifications from "../../screen/User/notifications/Notifications";
// import Settings from "../../screen/User/settings/Settings";
import Animated from 'react-native-reanimated';

// import VendorMainLayout from "../../navigation/TabBar/MainActivity";
import BottomTabNavigation from '../../navigation/TabBar/BottomTabNavigation';
import {Text, View} from 'react-native';
import QuickServiceSheet from '../../components/Modals/QuickServiceSheet';
// import Support from "../../screen/User/content/Support";
// import AboutApp from "../../screen/User/content/AboutApp";
// import TermsAndConditions from "./../../screen/User/content/TermsAndConditions";
// import NearByMapView from "../../screen/User/nearby/NearByMapView";
// import AppliedJob from "../../screen/Vendor/AppliedJob";

// import * as TabAction from "../../store/Action/TabAction";

const Drawer = createDrawerNavigator();

export function ScreenHybhaiYe() {
  return (
    <View>
      <Text>Screeeeeen hyyy yar</Text>
    </View>
  );
}

export default function DrawerNavigator(props) {
  const USERTYPE = useSelector(state => state.UserType.value);
  const [SELECTEDTAB, SetSELECTEDTAB] = useState();
  const [quickService, setQuickService] = React.useState(false);

  const dispatcher = useDispatch();
  const [progress, setProgress] = useState(new Animated.Value(0));

  // console.log("props.route.params.userType", props.route.params.userType);
  // const scale = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 25],
  });

  const animatedStyle = {
    borderTopRightRadius: borderRadius,
    borderTopLeftRadius: borderRadius,
    transform: [{scale}],
  };

  useEffect(() => {
    // if (props.route.params.userType === "user") {
    //   setSelectestab(SCREENS.PostJob);
    // } else {
    //   setSelectestab(SCREENS.Home);
    // }
    if (USERTYPE === 'User') {
      setSelectestab(SCREENS.UserHome);
    } else {
      setSelectestab(SCREENS.Home);
    }
  }, []);

  const setSelectestab = async item => {
    SetSELECTEDTAB(item);
  };

  return (
    <>
      <Drawer.Navigator
        initialRouteName={SCREENS.VendorMainLayout}
        overlayColor={COLORS.transparent}
        drawerType={'slide'}
        drawerStyle={{
          width: '60%',
          backgroundColor: COLORS.transparent,
        }}
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
          headerShown: false,
          gestureEnabled: true,
          swipeEnabled: false,
        }}
        drawerContent={props => {
          setTimeout(() => {
            setProgress(props.progress);
          }, 0);
          return <DrawerScreen {...props} drawerAnimation={animatedStyle} />;
        }}>
        <Drawer.Screen name={SCREENS.VendorMainLayout}>
          {props => (
            <BottomTabNavigation {...props} drawerAnimation={animatedStyle} />
          )}
        </Drawer.Screen>

        {/* <Drawer.Screen name={SCREENS.BottomBar} component={BottomBar} /> */}
        {/* 
      <Drawer.Screen name={SCREENS.NearByMapView} component={ScreenHybhaiYe} />
      <Drawer.Screen name={SCREENS.Noitification} component={ScreenHybhaiYe} />
      <Drawer.Screen name={SCREENS.Profile} component={ScreenHybhaiYe} />
      <Drawer.Screen name={SCREENS.Setting} component={ScreenHybhaiYe} />
      <Drawer.Screen name={SCREENS.AppliedJob} component={ScreenHybhaiYe} />
      <Drawer.Screen
        name={SCREENS.TermsAndConditions}
        component={ScreenHybhaiYe}
      />
      <Drawer.Screen name={SCREENS.AboutApp} component={ScreenHybhaiYe} />
      <Drawer.Screen name={SCREENS.HelpAndSupport} component={ScreenHybhaiYe} /> */}
      </Drawer.Navigator>
      <QuickServiceSheet
        isVisible={quickService}
        onClose={() => setQuickService(false)}
      />
    </>
  );
}
