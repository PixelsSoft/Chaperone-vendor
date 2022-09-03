import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import Slider from '@react-native-community/slider';
import {COLORS, FONTS, height, SIZES, width} from '../../constants';
import Icon, {IconType} from '../Icons';
import MyTouchableOpacity from '../MyTouchableOpacity';
import CustomButton from '../CustomButton';
import Row from '../Row';
import {useDispatch, useSelector} from 'react-redux';
import {closeFilters} from '../../redux/Slices/Utiltities';

export default function FilterSheet(props) {
  const {filterSheet} = useSelector(state => state.utiltities);
  const dispacth = useDispatch();

  return (
    <ReactNativeModal
      isVisible={filterSheet}
      style={{margin: 0, justifyContent: 'flex-end'}}
      animationIn={'slideInUp'}
      animationInTiming={450}
      animationOutTiming={450}
      hideModalContentWhileAnimating
      deviceHeight={height * height}
      coverScreen
      animationOut={'slideOutDown'}>
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopRightRadius: SIZES.twentyFive,
          borderTopLeftRadius: SIZES.twentyFive,
          height: height * 0.9,
        }}>
        <Row
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.ten,
            marginVertical: SIZES.ten,
          }}>
          <MyTouchableOpacity
            style={{
              padding: SIZES.five,
            }}
            onPress={() => {
              dispacth(closeFilters());
            }}>
            <Icon
              type={IconType.Ionicons}
              name={'ios-close-sharp'}
              size={SIZES.twentyFive * 1.25}
            />
          </MyTouchableOpacity>

          <Text style={[FONTS.boldFont20, {color: COLORS.black}]}>Filters</Text>
          <MyTouchableOpacity
            style={{
              padding: SIZES.five,
            }}>
            <Text
              style={[
                FONTS.mediumFont10,
                {color: COLORS.brownGray, textDecorationLine: 'underline'},
              ]}>
              Reset
            </Text>
          </MyTouchableOpacity>
        </Row>

        <ScrollView
          style={{}}
          contentContainerStyle={{
            paddingHorizontal: SIZES.fifteen,
            flexGrow: 1,
          }}>
          <View style={{marginVertical: SIZES.twentyFive}}>
            <Row
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={[FONTS.mediumFont14, {color: COLORS.black}]}>
                Distance (km)
              </Text>
              <Text style={[FONTS.mediumFont10, {color: COLORS.brownGray}]}>
                100km
              </Text>
            </Row>
            <Slider
              step={1}
              maximumValue={100}
              thumbTintColor={COLORS.primary}
              trackStyle={{backgroundColor: 'red'}}
              style={{marginVertical: SIZES.twenty}}
            />
            <Row
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={[FONTS.mediumFont10, {color: COLORS.brownGray}]}>
                0 km
              </Text>
              <Text style={[FONTS.mediumFont10, {color: COLORS.brownGray}]}>
                100km
              </Text>
            </Row>
          </View>

          <View style={{marginVertical: SIZES.twentyFive}}>
            <Text style={[FONTS.mediumFont14, {color: COLORS.black}]}>
              Industry
            </Text>
            <ScrollView>
              <Row
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginVertical: SIZES.twenty,
                }}>
                {[0, 1, 2, 3].map(index => {
                  return (
                    <MyTouchableOpacity
                      style={{
                        marginRight: SIZES.fifteen,
                      }}>
                      <Row
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            padding: SIZES.ten,
                            backgroundColor: 'transparent',
                            borderRadius: width,
                            borderWidth: 1,
                          }}
                        />
                        <Text
                          style={[
                            FONTS.mediumFont12,
                            {color: COLORS.black, marginStart: SIZES.five},
                          ]}>
                          Mechanic
                        </Text>
                      </Row>
                    </MyTouchableOpacity>
                  );
                })}
              </Row>
            </ScrollView>
          </View>

          <View style={{marginVertical: SIZES.twentyFive}}>
            <Row
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={[FONTS.mediumFont14, {color: COLORS.black}]}>
                Distance (km)
              </Text>
              <Text style={[FONTS.mediumFont10, {color: COLORS.brownGray}]}>
                18 - 26
              </Text>
            </Row>
            <Slider
              step={1}
              maximumValue={100}
              thumbTintColor={COLORS.primary}
              trackStyle={{backgroundColor: 'red'}}
            />
          </View>

          <View style={{marginVertical: SIZES.twentyFive}}>
            <Row
              style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={[FONTS.mediumFont14, {color: COLORS.black}]}>
                Price ($)
              </Text>
            </Row>
            <Slider
              step={1}
              maximumValue={100}
              thumbTintColor={COLORS.primary}
              trackStyle={{backgroundColor: 'red'}}
            />
          </View>
        </ScrollView>
        <CustomButton
          onPress={() => {
            dispacth(closeFilters());
          }}
          title={'Apply'}
          btnStyle={{
            marginVertical: SIZES.twentyFive,
            position: 'absolute',
            width: width * 0.95,
            bottom: 0,
            alignSelf: 'center',
            marginHorizontal: SIZES.fifteen,
          }}
        />
      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({});
