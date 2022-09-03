import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';
import CustomButton from '../../components/CustomButton';
import RadiusButton from '../../components/RadiusButton';

import {useFocusEffect} from '@react-navigation/core';

export default function Splash(props) {
  const {navigation} = props;

  useFocusEffect(
    React.useCallback(() => {
      if (Platform.OS === 'ios') {
        StatusBar.setBarStyle('light-content');
      }

      return () => {
        if (Platform.OS === 'ios') {
          StatusBar.setBarStyle('dark-content');
        }
      };
    }, []),
  );
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={IMAGES.Splash}
        style={{
          paddingHorizontal: SIZES.twenty,
          flex: 1,
        }}
        resizeMode="stretch">
        <View
          style={{
            flex: 1,

            justifyContent: 'center',
          }}>
          <Image
            source={IMAGES.Logo}
            style={{
              width: '80%',
              height: SIZES.twenty * 6,
            }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.footer}>
          <Text
            style={[
              FONTS.boldFont16,
              {
                color: COLORS.black,
                fontSize: height * 0.02,
                textAlign: 'justify',
                alignSelf: 'baseline',
              },
            ]}>
            Welcome to
          </Text>
          <Text
            style={[
              FONTS.boldFont24,
              {
                color: COLORS.black,
                fontSize: height * 0.04,
                textAlign: 'justify',
                alignSelf: 'baseline',
              },
            ]}>
            Chaperone
          </Text>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                maxWidth: '73%',
                marginVertical: SIZES.fifteen,
                marginBottom: SIZES.twentyFive,
                color: COLORS.black,
                textAlign: 'justify',
              },
            ]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>
          <RadiusButton
            onPress={() => {
              navigation.navigate(SCREENS.Login);
            }}
            title="Login"
            titleStyle={{
              color: COLORS.black,
            }}
            btnStyle={{
              marginVertical: SIZES.ten,
              backgroundColor: COLORS.transparent,
              borderColor: COLORS.black,
              borderWidth: 1,
            }}
          />
          <RadiusButton
            onPress={() => {
              navigation.navigate(SCREENS.SignUpVendor);
            }}
            title="Sign Up"
            btnStyle={{
              marginVertical: SIZES.ten,
              backgroundColor: COLORS.black,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    bottom: SIZES.twenty,

    justifyContent: 'flex-end',
  },
});
