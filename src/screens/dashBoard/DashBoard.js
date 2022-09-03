import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {
  STYLES,
  SIZES,
  FONTS,
  COLORS,
  IMAGES,
  width,
  SCREENS,
} from '../../constants/theme';
import CustomHeader from '../../components/CustomHeader';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import Row from '../../components/Row';
import CustomButton from '../../components/CustomButton';

import Icon, {IconType} from '../../components/Icons';
import JobCards from '../../components/JobCards';
import {useNavigation} from '@react-navigation/native';

export default function Dashboard(props) {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView style={[STYLES.container]}>
      <CustomHeader
        title={'Dashboard'}
        showWithdrawbtn
        // containerStyle={{paddingVertical: SIZES.twentyFive}}
      />
      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}>
        <Row
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            // marginBottom: SIZES.fifteen,
          }}>
          <Text style={[FONTS.boldFont20, {paddingHorizontal: SIZES.twenty}]}>
            Total Earning
          </Text>
          <Text
            style={[
              FONTS.mediumFont16,
              {paddingHorizontal: SIZES.twenty, color: COLORS.primary},
            ]}>
            USD 2456
          </Text>
        </Row>
        {/* <CustomButton
          title={'USD 2456'}
          btnStyle={{margin: SIZES.twentyFive}}
        /> */}
        <Text
          style={[
            FONTS.boldFont20,
            {color: COLORS.primary, paddingHorizontal: SIZES.twenty},
          ]}>
          Quick Job
        </Text>
        <MyTouchableOpacity
          style={styles.quickJobBTn}
          onPress={() =>
            // navigate(SCREENS.Noitification)
            {}
          }>
          <Row
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: SIZES.ten,
            }}>
            <Text style={[FONTS.mediumFont14]}>
              1 job is avaiable in your Notifications
            </Text>
            <Icon
              name={'bell'}
              type={IconType.Feather}
              color={COLORS.primary}
            />
          </Row>
        </MyTouchableOpacity>
        <Text
          style={[
            FONTS.boldFont20,
            {paddingHorizontal: SIZES.twenty, marginBottom: SIZES.ten},
          ]}>
          Complete Job
        </Text>
        <ScrollView
          decelerationRate={0.5}
          snapToInterval={width * 0.8 + SIZES.twenty}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: SIZES.fifteen,
          }}>
          {vendors.map(item => {
            return (
              <JobCards
                item={item}
                data={vendors}
                style={{width: width * 0.8}}
              />
            );
          })}
        </ScrollView>
        <Text
          style={[
            FONTS.boldFont20,
            {paddingHorizontal: SIZES.twenty, marginBottom: SIZES.ten},
          ]}>
          In Progress Job
        </Text>
        <ScrollView
          decelerationRate={0.5}
          snapToInterval={width * 0.8 + SIZES.twenty}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: SIZES.fifteen}}>
          {vendors.map(item => {
            return (
              <JobCards
                item={item}
                data={vendors}
                style={{width: width * 0.8}}
              />
            );
          })}
        </ScrollView>
        <Text
          style={[
            FONTS.boldFont20,
            {paddingHorizontal: SIZES.twenty, marginBottom: SIZES.ten},
          ]}>
          Pending Job
        </Text>
        <ScrollView
          decelerationRate={0.5}
          snapToInterval={width * 0.8 + SIZES.twenty}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: SIZES.fifteen}}>
          {vendors.map(item => {
            return (
              <JobCards
                item={item}
                data={vendors}
                style={{width: width * 0.8}}
              />
            );
          })}
        </ScrollView>
        <Text
          style={[
            FONTS.boldFont20,
            {paddingHorizontal: SIZES.twenty, marginBottom: SIZES.ten},
          ]}>
          Total Earning
        </Text>
        <CustomButton title={'$' + ' 233'} btnStyle={{margin: SIZES.twenty}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  quickJobBTn: {
    borderRadius: SIZES.twenty,
    borderWidth: 2,
    paddingVertical: SIZES.twenty,
    marginVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.ten,
    marginHorizontal: SIZES.twenty,
    borderColor: COLORS.primary,
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
    image: IMAGES.User1,
    title: 'Car Mechanic',
    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '3',
    image: IMAGES.User2,
    title: 'Car Mechanic',
    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '4',
    image: IMAGES.User1,
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
