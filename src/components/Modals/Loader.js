import React from 'react';
import {StyleSheet, Modal, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {COLORS, IMAGES, SIZES} from '../../constants';

export default function Loader(props) {
  return (
    <Modal
      statusBarTranslucent
      animationType="fade"
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}
      visible={props.visibility}
      transparent={true}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: `${COLORS.black}25`,
        }}>
        <LottieView
          source={IMAGES.Loader}
          autoPlay
          loop
          style={[styles.loaderStyle]}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  loaderStyle: {
    width: SIZES.fifty * 3,
    height: SIZES.fifty * 3,
    borderRadius: SIZES.twentyFive,
  },
});
