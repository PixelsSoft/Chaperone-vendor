import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import React, {useState} from 'react';
import {
  COLORS,
  CONSTANTS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
} from '../../constants/theme';

import CircularImage from '../../components/CircularImage';
import Row from '../../components/Row';
import Icon, {IconType} from '../../components/Icons';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import {OpenDocModal, openFilters} from '../../redux/Slices/Utiltities';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import JobCards from '../../components/JobCards';

export default function Home(props) {
  const dispacth = useDispatch();
  // const { navigation } = props;
  const navigation = useNavigation();
  const ProfileData = useSelector(state => state.profile.Data);

  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={IMAGES.HomeBackgroung}
      resizeMode="stretch"
      style={{
        flex: 1,
        paddingTop: SIZES.ten,
        backgroundColor: COLORS.primary,
      }}>
      {/* <View style={{flex: 1, backgroundColor: COLORS.primary}}> */}
      {/* ///////////////header/////////////// */}
      <View
        style={{
          flex: 0.3,
          height: SIZES.twentyFive * 5,
          paddingVertical: SIZES.twenty * 2,
          // paddingBottom: SIZES.twentyFive * 3,
        }}>
        <Row style={[styles.header]}>
          <Row style={{alignItems: 'center', justifyContent: 'center'}}>
            <CircularImage
              image={{
                uri: CONSTANTS.API_URLS.IMAGE + ProfileData?.records?.image,
              }}
              imageStyle={{
                height: SIZES.fifteen * 4,
                width: SIZES.fifteen * 4,
                borderColor: COLORS.white,
                borderWidth: 1,
              }}
            />
            <View
              style={{
                justifyContent: 'center',
                paddingHorizontal: SIZES.fifteen,
              }}>
              <Text style={[FONTS.mediumFont12, {color: COLORS.black}]}>
                {ProfileData?.records?.name}
              </Text>
              <Text style={[FONTS.mediumFont12, {color: COLORS.brownGray}]}>
                {ProfileData?.records?.address}
              </Text>
            </View>
          </Row>
          <Row style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={[FONTS.boldFont16]}>6 Days</Text>
              <Text style={[FONTS.mediumFont10, {color: COLORS.black}]}>
                Remaining
              </Text>
            </View>
            <MyTouchableOpacity
              style={[
                styles.uploadCertificatebtn,
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: COLORS.orange,
                },
              ]}
              onPress={() => {
                dispatch(OpenDocModal());
              }}>
              <Icon
                name="plus"
                type={IconType.AntDesign}
                color={COLORS.white}
                size={SIZES.fifteen}
              />
              <Text style={[FONTS.mediumFont10, {color: COLORS.white}]}>
                {' '}
                Upload
              </Text>
            </MyTouchableOpacity>
          </Row>
        </Row>
        <MyTouchableOpacity onPress={() => navigation.navigate(SCREENS.Seacrh)}>
          <View
            style={{
              marginHorizontal: SIZES.fifteen,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: COLORS.transparent,
              borderRadius: SIZES.ten,
              padding: SIZES.ten,
            }}>
            <Icon
              name={'search1'}
              type={IconType.AntDesign}
              color={COLORS.black}
            />
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.black,
                  flex: 1,
                  marginHorizontal: SIZES.ten,
                },
              ]}>
              Search here...
            </Text>

            <MyTouchableOpacity
              style={{padding: SIZES.ten}}
              onPress={() => {
                dispatch(openFilters());
              }}>
              <Image
                source={IMAGES.IconFilter}
                style={{
                  height: SIZES.twenty,
                  width: SIZES.twenty,
                }}
                resizeMode={'contain'}
              />
            </MyTouchableOpacity>
          </View>
        </MyTouchableOpacity>
      </View>

      {/* ==========================body================= */}
      <View style={[styles.detailSection]}>
        {/* =================browse Category============ */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: SIZES.five}}>
          {/* ================= Job for You============ */}
          <Row
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: SIZES.fifteen,
              paddingHorizontal: SIZES.fifteen,
            }}>
            <Text style={[FONTS.boldFont18, {fontWeight: '700'}]}>
              Jobs For you
            </Text>
            <Text style={[FONTS.boldFont16, {color: COLORS.gray}]}>
              See all
            </Text>
          </Row>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          {vendors.map(item => {
            return <JobCards item={item} data={vendors} />;
          })}
          {/* </ScrollView> */}
        </ScrollView>
      </View>
      {/* </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    height: height * 0.1,
    padding: SIZES.twenty,
    justifyContent: 'space-between',
    marginBottom: SIZES.fifteen,
  },
  detailSection: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.twentyFive * 2,
    borderTopLeftRadius: SIZES.twentyFive * 2,
    paddingTop: SIZES.twentyFive * 2,
    // paddingVertical: SIZES.twentyFive * 2,
    // paddingBottom: 100,
    // paddingVertical: SIZES.fifteen * 2,
    // marginBottom: SIZES.twentyFive * 2,
  },
  categorystyle: {
    backgroundColor: COLORS.charcoalGrey,
    margin: SIZES.fifteen,
    height: SIZES.fifty,
    width: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.ten,
  },
  categorySelectedStyle: {
    backgroundColor: COLORS.primary,
    margin: SIZES.fifteen,
    height: SIZES.fifty,
    width: SIZES.fifty,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.ten,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: COLORS.blackWithopacity,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  uploadCertificatebtn: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    borderRadius: SIZES.ten,
    borderWidth: 1,
    borderColor: COLORS.white,
    marginLeft: SIZES.ten,
    padding: SIZES.ten,
    borderStyle: 'dashed',
  },
});

const vendors = [
  {
    id: '1',
    image: IMAGES.User,
    title: 'Car Mechanic',

    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '2',
    image: IMAGES.User,
    title: 'Car Mechanic',
    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '3',
    image: IMAGES.User,
    title: 'Car Mechanic',
    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '4',
    image: IMAGES.User,
    title: 'Car Mechanic',

    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '5',
    image: IMAGES.User,
    title: 'Car Mechanic',

    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
];
