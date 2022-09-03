import React, {useEffect, useState} from 'react';
import {
  LogBox,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {COLORS, FONTS, IMAGES, SIZES} from './src/constants';
import {Icon, IconType} from './src/components';
import AddButton from './src/components/AddButton';
import FlashMessage from 'react-native-flash-message';
import MainNavigation from './src/navigation/MainNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import {NativeBaseProvider} from 'native-base';

const App = () => {
  const [networkState, setNetworkState] = useState(true);

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(async state => {
      setTimeout(() => {
        if (
          state.isInternetReachable !== null &&
          state.isInternetReachable !== undefined
        ) {
          setNetworkState(state.isInternetReachable);
        }
      }, 1000);
    });

    return () => {
      unsubscribe();
    };
  });
  const FlashMessageRef = React.useRef();
  return (
    <NativeBaseProvider>
      <View style={styles.safeAreaView}>
        <StatusBar
          backgroundColor={COLORS.primary}
          translucent={Platform.OS === 'android'}
          barStyle={
            Platform.OS === 'android' ? 'light-content' : 'dark-content'
          }
        />
        {networkState ? (
          <Provider store={store}>
            <FlashMessage
              ref={FlashMessageRef}
              duration={2000}
              backgroundColor={COLORS.primary}
              floating
              position="top"
            />
            <MainNavigation />
          </Provider>
        ) : (
          <View style={styles.noInternetView}>
            <View style={styles.imgStyle}>
              <Icon
                type={IconType.Feather}
                name={'wifi-off'}
                size={SIZES.fifty * 1.75}
                color={COLORS.primary}
              />
            </View>
            {/* <Image source={IMAGES.noWifi} style={styles.imgStyle} /> */}
            <Text style={[FONTS.boldFont22, styles.headingStyle]}>
              No Internet
            </Text>
            <Text style={[FONTS.boldFont22, styles.headingStyle]}>
              Connection Available
            </Text>
            <View style={{marginTop: SIZES.twenty}}>
              <Text style={[FONTS.mediumFont14, styles.textStyle]}>
                Your device is not connected to internet.
              </Text>
              <Text style={[FONTS.mediumFont14, styles.textStyle]}>
                Please make sure your connection is working.
              </Text>
            </View>
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    // backgroundColor: COLORS.primary,
  },
  noInternetView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.twentyFive,
  },
  imgStyle: {
    marginBottom: SIZES.twentyFive,
  },
  textStyle: {
    textAlign: 'center',
    color: COLORS.textGrey,
  },
  headingStyle: {
    color: COLORS.primary,
  },
});

export default App;
