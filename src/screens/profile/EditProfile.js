import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  COLORS,
  CONSTANTS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from '../../constants/theme';
import CustomHeader from '../../components/CustomHeader';
import Row from '../../components/Row';
import CircularImage from '../../components/CircularImage';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import Icon, {IconType} from '../../components/Icons';
import EditText from '../../components/EditText';
import CustomButton from '../../components/CustomButton';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import UploadPhotoModal from '../../components/Modals/UploadPhotoModal';
import {useSelector} from 'react-redux';

export default function EditProfile(props) {
  const ProfileData = useSelector(state => state.profile.Data);
  const [name, setname] = React.useState(__DEV__ ? 'taimoor' : '');
  const [address, setaddress] = React.useState(__DEV__ ? 'abc street' : '');
  const [email, setemail] = React.useState(
    __DEV__ ? ProfileData?.records?.email : '',
  );
  const [uploadImage, setUploadImage] = React.useState(false);
  const [profileImage, setProfileImage] = React.useState('');
  const [uploadProfile, setUploadProfile] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState();
  const [Certificate, setCertificate] = React.useState([
    {
      Certificate_img: '',
    },
  ]);
  const {navigation} = props;
  const [phone, setPhone] = React.useState('');
  const [flag, setFlag] = React.useState('');
  const phoneInput = React.useRef(null);
  const phoneRef = React.useRef(null);
  const phoneParentRef = React.useRef({phoneInput, phoneRef});
  const nameRef = React.createRef(null);
  const emailRef = React.createRef(null);
  const addressRef = React.createRef(null);

  useEffect(() => {
    if (phoneInput.current?.isValidNumber(phone)) {
      addressRef.current.focus();
    }
  }, [phone]);

  const addMoreCertificate = () => {
    const temp = [...Certificate];
    temp.push({Certificate_img: ''});
    setCertificate(temp);
  };

  const onChangeDetails = (index, text) => {
    const temp = [...Certificate];
    temp[index]['Certificate_img'] = text;
    setCertificate(temp);
  };

  const onImageSelected = image => {
    // console.log('imagessssss ==========>', image.sourceURL);
    onChangeDetails(currentIndex, `data:image/png;base64,${image?.data}`);
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={'Edit Profile'} />
      <Row style={styles.header}>
        <MyTouchableOpacity>
          <CircularImage
            image={{
              uri:
                profileImage ||
                CONSTANTS.API_URLS.IMAGE + ProfileData?.records?.image,
            }}
            imageStyle={{
              height: SIZES.twenty * 4,
              width: SIZES.twenty * 4,
              borderColor: COLORS.primary,
              borderWidth: 1,
            }}
          />
          <MyTouchableOpacity
            style={styles.iconstyle}
            onPress={() => setUploadProfile(true)}>
            <Icon
              name={'camera'}
              type={IconType.Entypo}
              size={SIZES.fifteen}
              color={COLORS.white}
            />
          </MyTouchableOpacity>
        </MyTouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: SIZES.fifteen,
          }}>
          <Text style={[FONTS.mediumFont14, {color: COLORS.black}]}>
            {ProfileData?.records?.name}
          </Text>
          <Text style={[FONTS.mediumFont14, {color: COLORS.primary}]}>
            {ProfileData?.records?.address}
          </Text>
        </View>
      </Row>
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
            // emailRef.current.focus();
            phoneParentRef.current.phoneRef.current.focus();
          }}
        />
        <EditText
          value={email}
          onChangeText={text => setemail(text)}
          ref={emailRef}
          placeholder={'Email'}
          editable={false}
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
            addressRef.current.focus();
          }}
        />
        <EditText
          placeholder={'Address'}
          ref={addressRef}
          value={address}
          onChangeText={text => setaddress(text)}
        />
        {/* <EditText placeholder={'Password'} password />
        <EditText placeholder={'Confirm Password'} password /> */}
        {Certificate.map((item, index) => [
          <View key={index}>
            {item.Certificate_img === '' ? (
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
                source={{uri: item.Certificate_img}}
                style={styles.imageStyle}
                resizeMode={'cover'}
              />
            )}
          </View>,
        ])}
        <MyTouchableOpacity onPress={addMoreCertificate}>
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
          title={'Save & Continue'}
          onPress={() => {
            navigation.goBack();
          }}
          btnStyle={{marginVertical: SIZES.twentyFive}}
        />
      </ScrollView>
      <UploadPhotoModal
        visibility={uploadImage}
        setVisibility={setUploadImage}
        onImageSelected={onImageSelected}
      />
      <UploadPhotoModal
        visibility={uploadProfile}
        setVisibility={setUploadProfile}
        onImageSelected={image =>
          setProfileImage(`data:image/png;base64,${image?.data}`)
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: SIZES.twenty,
  },
  iconstyle: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    position: 'absolute',
    padding: SIZES.ten * 0.8,
    borderRadius: width,
    bottom: 0,
    right: 0,
  },
  uploadBtn: {
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
