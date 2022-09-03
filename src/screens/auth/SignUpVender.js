import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, FONTS, height, SCREENS, SIZES, STYLES} from '../../constants';
import CustomHeader from '../../components/CustomHeader';
import EditText from '../../components/EditText';
import CustomButton from '../../components/CustomButton';
import Row from '../../components/Row';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import Icon, {IconType} from '../../components/Icons';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {signup} from '../../redux/Slices/Auth';
import {show, hide} from '../../redux/Slices/Loader';
import UploadPhotoModal from '../../components/Modals/UploadPhotoModal';
import utils from '../../utils';

export default function SignUpUser(props) {
  const navigation = useNavigation();
  const dispatcher = useDispatch();
  const [phone, setPhone] = React.useState(__DEV__ ? '123456855' : '');
  const [name, setname] = React.useState(__DEV__ ? 'taimoor' : '');
  const [address, setaddress] = React.useState(__DEV__ ? 'abc street' : '');
  const [email, setemail] = React.useState(
    __DEV__ ? 'taimoor1@yopmail.com' : '',
  );
  const [uploadImage, setUploadImage] = React.useState(false);
  const [Certificate, setCertificate] = React.useState([
    {
      certification: '',
      year: '',
      certificate_image: '',
    },
  ]);
  const [currentIndex, setCurrentIndex] = React.useState();
  const [password, setpassword] = React.useState(__DEV__ ? '12345678' : '');

  const [confirmPassword, setconfirmPassword] = React.useState(
    __DEV__ ? '12345678' : '',
  );
  const phoneInput = React.useRef(null);
  const phoneRef = React.useRef(null);
  const phoneParentRef = React.useRef({phoneInput, phoneRef});

  const [flag, setFlag] = React.useState('+1');

  const [borderColor, setBorderColor] = React.useState(COLORS.brownGray);
  const [focus, setFocus] = React.useState(false);

  const nameRef = React.createRef(null);
  const emailRef = React.createRef(null);
  const addressRef = React.createRef(null);
  const passwordRef = React.createRef(null);
  const ConfirmPasswordRef = React.createRef(null);

  useEffect(() => {
    if (phoneInput.current?.isValidNumber(phone)) {
      addressRef.current.focus();
    }
  }, [phone]);

  const addCertificate = () => {
    const temp = [...Certificate];
    temp.push({
      name: '',
      year: '',
      Certificate_img: '',
    });
    setCertificate(temp);
  };

  const onChangeDetails = (index, field, text) => {
    const temp = [...Certificate];
    temp[index][field] = text;
    setCertificate(temp);
  };

  const onImageSelected = image => {
    // console.log('imagessssss ==========>', image.sourceURL);
    onChangeDetails(
      currentIndex,
      'certificate_image',
      `data:image/png;base64,${image?.data}`,
    );
  };

  const onSignUpClick = () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      country_code: flag,
      password: password,
      password_confirmation: confirmPassword,
      verified_by: 'email',
      type: 'vendor',
      certificates: Certificate,
    };

    if (name === '') {
      utils.errorAlert('Kindly Enter name');
    } else if (email === '') {
      utils.errorAlert('Kindly Enter Email');
    } else if (phone === '') {
      utils.errorAlert('Kindly Enter Phone');
    } else if (address === '') {
      utils.errorAlert('Kindly Enter Address');
    } else if (password === '') {
      utils.errorAlert('Kindly Enter Password');
    } else if (confirmPassword === '') {
      utils.errorAlert('Kindly Enter Confirm');
    } else {
      // console.log(' data', data);

      dispatcher(show(''));
      dispatcher(signup(data))
        .unwrap()
        .then(_response => {
          // console.log(' _response', _response);
          utils.successAlert(_response?.message);
          navigation.navigate(SCREENS.Verification, {
            email: email,
            ScreenName: SCREENS.SignUpVendor,
          });
          dispatcher(hide(''));
          console.log('responseeee=========>', _response);
        })
        .catch(err => {
          dispatcher(hide(''));
        });
    }
  };
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={'Sign Up'} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.twenty,
          flexGrow: 1,
        }}>
        <EditText
          value={name}
          onChangeText={text => setname(text)}
          ref={nameRef}
          placeholder={'Name'}
          onSubmitEditing={() => {
            emailRef.current.focus();
          }}
        />
        <EditText
          value={email}
          onChangeText={text => setemail(text)}
          ref={emailRef}
          placeholder={'Email'}
          onSubmitEditing={() => {
            phoneParentRef.current.phoneRef.current.focus();
          }}
        />
        <PhoneNumberInput
          ref={phoneParentRef}
          defaultCode="US"
          layout="first"
          value={phone}
          onSelect={flag => {
            setFlag(flag);
          }}
          onChangeText={text => {
            setPhone(text);
          }}
          onSubmitEditing={() => {
            phoneRef.current.focus();
          }}
        />

        <EditText
          value={address}
          onChangeText={text => setaddress(text)}
          ref={addressRef}
          placeholder={'Address'}
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
        />
        <EditText
          value={password}
          onChangeText={text => setpassword(text)}
          ref={passwordRef}
          placeholder={'Password'}
          password
          onSubmitEditing={() => {
            ConfirmPasswordRef.current.focus();
          }}
        />
        <EditText
          value={confirmPassword}
          onChangeText={text => setconfirmPassword(text)}
          ref={ConfirmPasswordRef}
          placeholder={'Confirm Password'}
          password
        />
        {Certificate.map((item, index) => (
          <View key={index}>
            <Row
              style={{
                justifyContent: 'space-between',
                marginTop: SIZES.fifteen,
              }}>
              <View style={{width: '60%'}}>
                <Text style={[FONTS.boldFont18]}>Certification</Text>
                <EditText
                  value={item.certification}
                  onChangeText={text =>
                    onChangeDetails(index, 'certification', text)
                  }
                  placeholder={'Certification'}
                />
              </View>
              <View style={{width: '35%'}}>
                <Text style={[FONTS.boldFont18]}>Year</Text>
                <EditText
                  value={item.year}
                  placeholder={'Year'}
                  onChangeText={text => onChangeDetails(index, 'year', text)}
                />
              </View>
            </Row>

            {item.certificate_image === '' ? (
              <MyTouchableOpacity
                style={styles.uploadBtn}
                onPress={() => {
                  setCurrentIndex(index);
                  setUploadImage(true);
                }}>
                <Icon
                  type={IconType.MaterialCommunityIcons}
                  name={'cloud-upload'}
                  color={COLORS.primary}
                  size={SIZES.twentyFive * 4}
                />
                <Text style={[FONTS.boldFont18]}>Add Certificate Photo</Text>
                <Text style={[FONTS.mediumFont12, {color: COLORS.gray}]}>
                  Please Upload clear and Hige Quality Photo
                </Text>
              </MyTouchableOpacity>
            ) : (
              <Image
                style={styles.imageStyle}
                source={{uri: item.certificate_image}}
                resizeMode={'cover'}
              />
            )}
          </View>
        ))}

        <MyTouchableOpacity onPress={addCertificate}>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.black,
                textAlign: 'center',
                marginTop: SIZES.twenty,
                textDecorationLine: 'underline',
              },
            ]}>
            + Add More Certificate
          </Text>
        </MyTouchableOpacity>

        <CustomButton
          onPress={
            () => onSignUpClick()

            // navigation.navigate(SCREENS.Verification)
          }
          title={'Sign Up'}
          btnStyle={{marginVertical: SIZES.twentyFive}}
        />
      </ScrollView>

      <UploadPhotoModal
        visibility={uploadImage}
        setVisibility={setUploadImage}
        onImageSelected={onImageSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  uploadBtn: {
    height: height * 0.22,
    marginTop: SIZES.twenty,
    borderRadius: SIZES.fifteen,
    borderWidth: 1,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: COLORS.gray,
    paddingHorizontal: SIZES.twenty,
    paddingVertical: SIZES.twenty,
  },
  imageStyle: {
    marginTop: SIZES.twenty,
    height: height * 0.22,
    borderRadius: SIZES.fifteen,
    borderWidth: 1,
  },
});
