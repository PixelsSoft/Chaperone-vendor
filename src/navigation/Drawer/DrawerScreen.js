import React, {useState} from 'react';

import {CommonActions} from '@react-navigation/native';
import {View, Text, StyleSheet, Image} from 'react-native';
import Modal from 'react-native-modal';

import CircularImage from '../../components/CircularImage';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import Row from '../../components/Row';
import {
  COLORS,
  CONSTANTS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';

import Icon, {IconType} from '../../components/Icons';
import moment from 'moment';
import {hide, show} from '../../redux/Slices/Loader';
import {logout} from '../../redux/Slices/Auth';
import utils from '../../utils';

export default function More({navigation}) {
  const dispatcher = useDispatch();
  const token = useSelector(state => state.auth.accessToken);

  const [SELECTEDTAB, SetSELECTEDTAB] = useState();

  const navigateToNextScreen = screenName => {
    navigation.navigate(screenName);
  };

  const DrawerBtn = ({name, IconName, type, Screen}) => {
    return (
      <MyTouchableOpacity
        activeOpacity={1}
        style={[
          STYLES.drawerItem,
          {
            backgroundColor:
              SELECTEDTAB === name ? COLORS.primary : COLORS.white,
          },
        ]}
        // onPressIn={() => SetSELECTEDTAB(name)}
        onPressOut={() => SetSELECTEDTAB(' ')}
        onPress={() => {
          navigation.toggleDrawer();
          navigateToNextScreen(Screen);
          SetSELECTEDTAB(name);
        }}>
        <Row style={{alignSelf: 'flex-start', alignItems: 'center'}}>
          <Icon
            name={IconName}
            type={type}
            style={[
              STYLES.drawerIcon,
              {color: SELECTEDTAB === name ? COLORS.white : COLORS.black},
            ]}
          />
          <Text
            style={[
              STYLES.drawerText,
              {
                color: SELECTEDTAB === name ? COLORS.white : COLORS.black,
              },
            ]}>
            {name}
          </Text>
        </Row>
      </MyTouchableOpacity>
    );
  };

  const USERTYPE = useSelector(state => state.UserType.value);

  const [isLogoutModalVisible, setisLogoutModalVisible] = React.useState(false);

  const [logOutView, setLogOutView] = React.useState({
    textColor: COLORS.black,
    bgColor: COLORS.white,
  });

  const toggleModal = () => {
    setisLogoutModalVisible(!isLogoutModalVisible);
  };

  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: SCREENS.Login}],
  });

  const OnlogoutPress = () => {
    dispatcher(show());
    dispatcher(logout(token))
      .unwrap()
      .then(_response => {
        dispatcher(hide(''));
        toggleModal();
        console.log('responseeee=========>', _response?.status);
        utils.successAlert(_response?.message);
      })
      .catch(err => {
        dispatcher(hide(''));
        throw err;
      });
  };

  return (
    <View
      style={[
        STYLES.container,
        {
          flex: 1,
          backgroundColor: COLORS.white,
        },
      ]}>
      {/* Start of Top Container of User */}
      <MyTouchableOpacity
        activeOpacity={1}
        style={{
          paddingVertical: SIZES.fifteen * 2,
        }}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <View style={{paddingHorizontal: SIZES.twenty}}>
          <CircularImage
            image={IMAGES.User}
            style={{
              height: SIZES.fifty + 10,
              width: SIZES.fifty + 10,
              borderRadius: SIZES.fifty + 10,
            }}
            imageStyle={{
              height: SIZES.fifty + 10,
              width: SIZES.fifty + 10,
              borderRadius: SIZES.fifty + 10,
            }}
          />
          <View style={{marginHorizontal: SIZES.ten}}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.black}]}>
              {/* {Profile?.records?.name} */}
              John Doe
            </Text>
            <Text
              numberOfLines={1}
              style={[FONTS.mediumFont12, {color: COLORS.brownGray}]}>
              {moment().format('LL')}
            </Text>
          </View>
        </View>
      </MyTouchableOpacity>
      {/* End of Top Container of User */}

      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.ten,
          paddingTop: SIZES.ten,
        }}>
        <DrawerBtn
          name={'Near By'}
          IconName="location-outline"
          type={IconType.Ionicons}
          Screen={SCREENS.NearByMapView}
        />
        <DrawerBtn
          name={'Notification'}
          IconName="notifications-outline"
          type={IconType.Ionicons}
          Screen={SCREENS.NotificationSetting}
        />
        <DrawerBtn
          name={'Term And Condition'}
          IconName="file"
          type={IconType.Octicons}
          Screen={SCREENS.TermsAndConditions}
        />
        <DrawerBtn
          name={'Settings'}
          IconName="setting"
          type={IconType.AntDesign}
          Screen={SCREENS.Setting}
        />
        <DrawerBtn
          name={'Support'}
          IconName="questioncircleo"
          type={IconType.AntDesign}
          Screen={SCREENS.HelpAndSupport}
        />
      </View>

      {/* Start of Logout Container */}
      <MyTouchableOpacity
        activeOpacity={1}
        style={[
          STYLES.drawerItem,
          {
            // marginTop: SIZES.twentyFive * 11,
            marginBottom: SIZES.twenty,
            backgroundColor: logOutView.bgColor,
          },
        ]}
        onPress={() => {
          toggleModal();
          logout();
        }}
        onPressIn={() =>
          setLogOutView({textColor: COLORS.white, bgColor: COLORS.primary})
        }
        onPressOut={() =>
          setLogOutView({
            textColor: COLORS.black,
            bgColor: COLORS.white,
          })
        }>
        <Row style={{alignSelf: 'flex-start', alignItems: 'center'}}>
          <Icon
            name={'logout'}
            type={IconType.SimpleLineIcons}
            style={[STYLES.drawerIcon, {color: logOutView.textColor}]}
          />
          <Text style={[STYLES.drawerText, {color: logOutView.textColor}]}>
            Log Out
          </Text>
        </Row>
      </MyTouchableOpacity>
      {/* End of Logout Container */}

      {/* Start of Logout Modal */}
      <Modal
        isVisible={isLogoutModalVisible}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}>
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SIZES.ten * 2,
            borderRadius: SIZES.ten,
            borderWidth: 1.5,
            borderColor: COLORS.primary,
          }}>
          <Image
            source={IMAGES.Logo}
            resizeMode={'contain'}
            style={{
              alignSelf: 'center',
              width: SIZES.twentyFive * 6,
              height: SIZES.twentyFive * 3,
            }}
          />

          <Text
            style={[
              STYLES.mediumText,
              {
                marginVertical: SIZES.twenty,
                textAlign: 'center',
                color: COLORS.brownGray,
              },
            ]}>
            Are you sure you want to logout?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <MyTouchableOpacity
              onPress={() => {
                OnlogoutPress();
                // navigation.navigate(SCREENS.Splash);
              }}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: 'center',
                marginEnd: SIZES.five,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
              }}>
              <Text style={[STYLES.mediumText, {color: COLORS.white}]}>
                Yes
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              onPress={() => toggleModal()}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: 'center',
                marginStart: SIZES.five,
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.ten,
              }}>
              <Text style={[STYLES.mediumText, {color: COLORS.white}]}>No</Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* End of Logout Modal */}
    </View>
  );
}

const styles = StyleSheet.create({});
