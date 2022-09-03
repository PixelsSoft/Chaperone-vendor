import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import {STYLES} from '../../constants';
import CustomHeader from '../../components/CustomHeader';
import CustomButton from '../../components/CustomButton';
import EditText from '../../components/EditText';
import Icon, {IconType} from '../../components/Icons';
import {
  COLORS,
  CONSTANTS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
} from '../../constants/theme';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import Row from '../../components/Row';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import utils from '../../utils';
import {hide, show} from '../../redux/Slices/Loader';
import {login} from '../../redux/Slices/Auth';

export default function Login(props) {
  const {route, navigation} = props;
  const dispatcher = useDispatch();

  const [email, setEmail] = useState(__DEV__ ? 'messy@chaperone.com' : '');
  const [password, setPassword] = useState(__DEV__ ? '12345678' : '');
  const passwordRef = React.createRef(null);
  const userType = useSelector(state => state.UserType.value);

  const onLoginClick = () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    if (email === '' || password === '') {
      utils.errorAlert('Please enter Email or Password');
    } else {
      dispatcher(show());
      dispatcher(login(formData))
        .unwrap()
        .then(_response => {
          dispatcher(hide(''));

          // console.log('_response', _response?.data?.token);

          utils.successAlert(_response?.message);

          // if (_response?.status === 2) {
          //   navigation.navigate(SCREENS.Verification, {
          //     email: email,
          //   });
          // }
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
        <CustomHeader hasBackArrow title="Log In" />
        <Image
          source={IMAGES.Logo}
          resizeMode="contain"
          style={{
            alignSelf: 'center',
            height: SIZES.twenty * 5,

            width: SIZES.twenty * 11,
          }}
        />
        <View style={styles.inputfiled}>
          <EditText
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder={'Email'}
            onSubmitEditing={() => {
              passwordRef.current.focus();
            }}
          />
          <EditText
            value={password}
            onChangeText={text => setPassword(text)}
            ref={passwordRef}
            placeholder={'Password'}
            password
          />
          <MyTouchableOpacity
            style={{alignSelf: 'flex-end', marginVertical: SIZES.twentyFive}}
            onPress={() => {
              navigation.navigate(SCREENS.ForgotPassword, {
                data: props.value,
              });
            }}>
            <Text
              style={[
                FONTS.mediumFont14,
                {
                  color: COLORS.primary,

                  alignSelf: 'flex-end',
                },
              ]}>
              Forgot Password?
            </Text>
          </MyTouchableOpacity>
          <CustomButton
            onPress={() => {
              onLoginClick();
            }}
            title={'Log In'}
            btnStyle={{marginVertical: SIZES.twentyFive}}
          />

          <View style={{alignItems: 'center', marginBottom: SIZES.twenty}}>
            <MyTouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => navigation.navigate(SCREENS.SignUpVendor)}>
              <Text style={[FONTS.mediumFont14, {color: COLORS.brownGray}]}>
                Don't have any account?
              </Text>
              <Text
                style={[
                  FONTS.mediumFont14,
                  {color: COLORS.primary, marginStart: 3},
                ]}>
                Sign Up
              </Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputfiled: {
    paddingHorizontal: SIZES.twenty,
  },
  Socialbuton: {
    width: SIZES.twentyFive * 3,
    height: SIZES.twentyFive * 3,
    borderRadius: SIZES.twentyFive * 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AppleButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.black,
    paddingHorizontal: SIZES.fifteen * 1.5,
    // width: SIZES.twentyFive * 6.8,
    height: SIZES.twentyFive * 3,
    borderRadius: SIZES.twentyFive * 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
