import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  COLORS,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from '../../constants/theme';
import CustomHeader from '../../components/CustomHeader';
import CircularImage from '../../components/CircularImage';
import Row from '../../components/Row';
import Icon, {IconType} from '../../components/Icons';
import CustomButton from '../../components/CustomButton';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {CommonActions} from '@react-navigation/core';

export default function Booking(props) {
  const {navigation} = props;
  const _map = React.useRef(null);
  const Cordinates = [
    {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
    {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
  ];

  const [region, setRegion] = useState({
    latitude: 22.6345648,
    longitude: 88.4377279,
    latitudeDelta: 0.01486419044303443,
    longitudeDelta: 0.0140142817690068,
  });

  const GOOGLE_MAP_APIKEY = 'AIzaSyB0-X70PeO1P4ofM9vdRSOTjJlOUSjO48g';
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={'View Job'} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: SIZES.twenty,
          marginTop: SIZES.twenty,
        }}>
        <Row style={{justifyContent: 'space-between', alignItems: 'center'}}>
          <Row style={{alignItems: 'center'}}>
            <CircularImage image={IMAGES.User} />
            <Text
              style={{
                marginHorizontal: SIZES.ten,
                fontWeight: '600',
                color: COLORS.black,
              }}>
              David John
            </Text>
          </Row>

          <Text style={{fontWeight: '600', color: COLORS.primary}}>
            $24/hour
          </Text>
        </Row>
        <Text
          style={[
            FONTS.mediumFont12,
            {color: COLORS.brownGray, marginVertical: SIZES.ten},
          ]}>
          Car Mechanic
        </Text>
        <Row style={{alignItems: 'center'}}>
          <Icon
            name={'shield'}
            type={IconType.Entypo}
            size={SIZES.twenty}
            color={COLORS.trueGreen}
          />
          <Text
            style={[
              FONTS.mediumFont10,
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
          Looking for a car mechanic that can look into the battery setup. The
          car is in a still position & would require some man power
        </Text>
        <Row style={{alignItems: 'center', marginVertical: SIZES.five}}>
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
        <View
          style={{
            marginTop: SIZES.fifteen,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MapView
            initialRegion={region}
            scrollEnabled={false}
            zoomEnabled={false}
            ref={_map}
            style={{
              width: width * 0.9,
              height: width * 0.6,
              // backgroundColor: COLORS.Red,
            }}>
            <Marker coordinate={Cordinates[0]} />
            <Marker coordinate={Cordinates[1]} />
            <MapViewDirections
              origin={Cordinates[0]}
              destination={Cordinates[1]}
              apikey={GOOGLE_MAP_APIKEY}
              strokeWidth={2}
              strokeColor="red"
            />
          </MapView>
        </View>
      </ScrollView>
      <CustomButton
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: SCREENS.DrawerNavigator}],
            }),
          );
        }}
        title={'Contact'}
        btnStyle={{
          position: 'absolute',
          bottom: SIZES.fifteen,
          width: '95%',
          alignSelf: 'center',
          margin: SIZES.fifteen,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  datepicker: {
    backgroundColor: COLORS.white,
    height: Platform.OS === 'android' ? height * 0.15 : height * 0.18,
    width: width - SIZES.twenty * SIZES.five,
    marginVertical: SIZES.five,
  },
});
