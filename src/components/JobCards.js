import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS, IMAGES, SCREENS, SIZES, width} from '../constants';
import CircularImage from './CircularImage';
import MyTouchableOpacity from './MyTouchableOpacity';
import {useNavigation} from '@react-navigation/core';
import Row from './Row';
import Icon, {IconType} from './Icons';

export default function JobCards(props) {
  const {item} = props;
  const navigation = useNavigation();

  return (
    <MyTouchableOpacity
      onPress={() => props.onPress || navigation.navigate(SCREENS.ViewJob)}>
      <View
        style={[
          styles.card,
          {
            padding: SIZES.fifteen,

            marginHorizontal: SIZES.fifteen,
            marginBottom: SIZES.twenty,
            marginTop: SIZES.five,
          },
          props.style,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Row style={{alignItems: 'center'}}>
            <View style={styles.circleCard}>
              <CircularImage
                image={item.image}
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
                FONTS.boldFont18,
                {
                  color: COLORS.black,
                  marginStart: SIZES.five * 1.5,
                  fontSize: 14,
                },
              ]}>
              David John
            </Text>
          </Row>
          <Text
            numberOfLines={1}
            style={[
              FONTS.boldFont18,
              {
                color: COLORS.primary,
                marginStart: SIZES.five * 1.5,
                fontSize: 12,
              },
            ]}>
            $24/hours
          </Text>
        </View>

        <View style={{marginStart: SIZES.ten}}>
          <Text
            style={[
              FONTS.mediumFont14,
              {
                color: COLORS.black,
                marginTop: 10,
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
                {color: COLORS.trueGreen, marginHorizontal: SIZES.ten},
              ]}>
              Verified
            </Text>
          </Row>

          <Text
            style={[
              FONTS.mediumFont12,
              {
                textAlign: 'justify',
                marginVertical: SIZES.five,
                color: COLORS.gray,
              },
            ]}>
            {item.dec}
          </Text>

          <Row
            style={{
              alignItems: 'center',
              marginVertical: SIZES.five,
            }}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name={'location-pin'}
                type={IconType.Entypo}
                size={SIZES.twenty}
                color={COLORS.primary}
                style={{marginBottom: SIZES.ten}}
              />
              <Icon
                name={'clockcircleo'}
                type={IconType.AntDesign}
                size={SIZES.fifteen}
                color={COLORS.primary}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={[
                  FONTS.mediumFont12,
                  {
                    color: COLORS.gray,
                    marginHorizontal: SIZES.ten,
                    marginBottom: SIZES.ten,
                  },
                ]}>
                Car Mechanic, NY (2km)
              </Text>
              <Text
                style={[
                  FONTS.mediumFont12,
                  {color: COLORS.gray, marginHorizontal: SIZES.ten},
                ]}>
                12:00 to 3:00
              </Text>
            </View>
          </Row>
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
