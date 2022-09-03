import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {COLORS, FONTS, height, SIZES, width} from '../../constants';
import EditText from '../EditText';
import CustomButton from '../CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {closeQuickServiceSheet} from '../../redux/Slices/Utiltities';

export default function QuickServiceSheet(props) {
  const {quickServiceSheet} = useSelector(state => state.utiltities);
  const dispacth = useDispatch();

  return (
    <ReactNativeModal
      isVisible={quickServiceSheet}
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
          height: height * 0.92,
        }}>
        <View
          style={{
            height: 5,
            width: width * 0.25,
            backgroundColor: COLORS.gray + 65,
            alignSelf: 'center',
            borderRadius: SIZES.ten,
            marginVertical: SIZES.fifteen,
          }}
        />
        <Text
          style={[
            FONTS.boldFont18,
            {
              color: COLORS.black,
              marginVertical: SIZES.ten,
              paddingHorizontal: SIZES.fifteen,
            },
          ]}>
          Quick Service
        </Text>
        <ScrollView
          style={{}}
          contentContainerStyle={{paddingHorizontal: SIZES.fifteen}}>
          <View style={{marginVertical: SIZES.ten}}>
            <Text style={[FONTS.mediumFont12, {color: COLORS.primary}]}>
              Select Service
            </Text>
            <EditText
              placeholder={'Service'}
              styleContainer={{marginTop: -SIZES.ten * 1.3}}
            />
          </View>
          <View style={{marginVertical: SIZES.ten}}>
            <Text style={[FONTS.mediumFont12, {color: COLORS.primary}]}>
              Rate Required
            </Text>
            <EditText
              placeholder={'Rate'}
              styleContainer={{marginTop: -SIZES.ten * 1.3}}
            />
          </View>
          <View style={{marginVertical: SIZES.ten}}>
            <Text style={[FONTS.mediumFont12, {color: COLORS.primary}]}>
              Location
            </Text>
            <EditText
              placeholder={'Location'}
              styleContainer={{marginTop: -SIZES.ten * 1.3}}
            />
          </View>
          <View style={{marginVertical: SIZES.ten}}>
            <Text style={[FONTS.mediumFont12, {color: COLORS.primary}]}>
              Address
            </Text>
            <EditText
              placeholder={'Address'}
              styleContainer={{marginTop: -SIZES.ten * 1.3}}
            />
          </View>
          <View style={{marginVertical: SIZES.ten}}>
            <Text style={[FONTS.mediumFont12, {color: COLORS.primary}]}>
              Exact Time
            </Text>
            <EditText
              placeholder={'Time'}
              styleContainer={{marginTop: -SIZES.ten * 1.3}}
            />
          </View>

          <CustomButton
            onPress={() => {
              props?.onClose?.();
              dispacth(closeQuickServiceSheet());
            }}
            title={'Quick Notify'}
            btnStyle={{marginVertical: SIZES.twentyFive}}
          />
        </ScrollView>
      </View>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({});
