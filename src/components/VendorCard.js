import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, IMAGES, SCREENS, SIZES, width} from '../constants';
import CircularImage from './CircularImage';
import MyTouchableOpacity from './MyTouchableOpacity';
import {useNavigation} from '@react-navigation/core';
import Row from './Row';
import Icon, {IconType} from './Icons';

export default function VendorCard(props) {
  const {item} = props;
  const navigation = useNavigation();

  return (
    <MyTouchableOpacity
      onPress={() => props.onPress || navigation.navigate(SCREENS.ViewJob)}>
      <View
        style={[
          styles.card,
          {
            padding: SIZES.ten,
            marginHorizontal: SIZES.fifteen,
            marginBottom: SIZES.twenty,
            marginTop: SIZES.five,
            width: width * 0.65,
          },
          props.style,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.circleCard}>
            <CircularImage
              image={IMAGES.User}
              imageStyle={{
                height: SIZES.fifteen * 3.5,
                width: SIZES.fifteen * 3.5,
                borderColor: COLORS.primary,
                borderWidth: 1,
              }}
            />
          </View>
          <Text
            numberOfLines={1}
            style={[
              FONTS.boldFont16,
              {
                color: COLORS.black,
                marginStart: SIZES.five * 1.5,
                textTransform: 'capitalize',
              },
            ]}>
            David John
          </Text>
        </View>
        <View style={{marginStart: SIZES.ten}}>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.black,
                marginTop: 10,
                fontSize: 14,
                textTransform: 'capitalize',
              },
            ]}>
            {item.title}
          </Text>
          <Row style={{alignItems: 'center', marginVertical: SIZES.five}}>
            <Icon
              name={'shield'}
              type={IconType.Entypo}
              size={SIZES.fifteen}
              color={COLORS.trueGreen}
            />
            <Text
              style={[
                FONTS.mediumFont12,
                {color: COLORS.trueGreen, marginHorizontal: SIZES.five},
              ]}>
              Verified
            </Text>
          </Row>

          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.gray,
                marginVertical: SIZES.five,
                marginRight: SIZES.ten,
                textTransform: 'capitalize',
              },
            ]}>
            {item.type}
          </Text>
          <Text style={[FONTS.mediumFont14, {color: COLORS.primary}]}>
            {item.ratings}
          </Text>
        </View>
      </View>
    </MyTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleCard: {
    borderRadius: SIZES.twenty,
    shadowColor: COLORS.blackWithopacity,
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 10,
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
});
