import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomHeader from '../../components/CustomHeader';
import CommonButton from '../../components/CustomButton';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  height,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from '../../constants';
import {resetPassword} from '../../redux/Slices/Auth';
import {useDispatch} from 'react-redux';
import {hide, show} from '../../redux/Slices/Loader';
import EditText from '../../components/EditText';
import utils from '../../utils';

export default function ResetPassword(props) {
  const dispatcher = useDispatch();

  const {navigation, route} = props;
  const {email} = route?.params;
  const [code, setcode] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focusField(0);
    }, 500);
  }, []);

  const onResetPassword = () => {
    const data = {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };

    if (email === '') {
      utils.errorAlert('Please enter Email ');
    } else {
      dispatcher(show());
      dispatcher(resetPassword(data))
        .unwrap()
        .then(_response => {
          dispatcher(hide(''));
          console.log('============_response', _response.message);
          utils.successAlert(_response?.message);
          navigation.navigate(SCREENS.Login);
        })
        .catch(err => {
          dispatcher(hide(''));

          throw err;
        });
    }
  };

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <CustomHeader hasBackArrow />
        <Image
          source={IMAGES.Logo}
          resizeMode="contain"
          style={{
            alignSelf: 'center',
            height: SIZES.twenty * 5,

            width: SIZES.twenty * 11,
          }}
        />
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.twenty,
          }}>
          <Text
            style={[
              {
                fontFamily: FONTFAMILY.Bold,
                fontSize: SIZES.twentyFive * 1.1,
                color: COLORS.black,
                textAlign: 'center',
                marginTop: SIZES.twentyFive * 1.3,
              },
            ]}>
            Reset password
          </Text>

          <Text
            style={[
              FONTS.mediumFont14,
              {
                alignSelf: 'center',
                textAlign: 'center',
                paddingHorizontal: SIZES.twenty,
                marginVertical: SIZES.fifteen,
                color: COLORS.brownGray,
              },
            ]}>
            Enter new Password
          </Text>

          <View style={{paddingTop: SIZES.twentyFive * 1.45, flex: 1}}>
            <EditText
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder={'New Password'}
              password
            />
            <EditText
              value={password_confirmation}
              onChangeText={text => setPassword_confirmation(text)}
              placeholder={'Confirm Password'}
              password
            />
          </View>
          <CommonButton
            btnStyle={{
              marginTop: SIZES.fifty * 2,
              bottom: height * 0.035,
              width: width * 0.9,
              alignSelf: 'center',
            }}
            title="Continue"
            onPress={() => {
              onResetPassword();
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  otp: {
    borderRadius: SIZES.fifteen,
    height: SIZES.twenty * 3,
    width: SIZES.twenty * 3,
    fontSize: SIZES.twenty,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.blackWithopacity,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.blackWithopacity,
    borderRadius: SIZES.ten,
    shadowColor: '#00000035',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 8.3,
    elevation: 13,
  },
  otpSelected: {
    borderRadius: SIZES.fifteen,
    height: SIZES.twenty * 3,
    width: SIZES.twenty * 3,
    fontSize: SIZES.twenty,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.blackWithopacity,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    borderRadius: SIZES.ten,
    shadowColor: '#00000035',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 8.3,

    elevation: 13,
  },
  container: {
    width: '95%',
    height: SIZES.twentyFive * 6,
    marginBottom: SIZES.fifty,
    alignSelf: 'center',
  },
});
