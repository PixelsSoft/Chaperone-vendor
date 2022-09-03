import React from 'react';
import {Text, StyleSheet} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import {COLORS, FONTS, SIZES} from '../constants';
import Icon, {IconType} from './Icons';

export default function RadiusButton(props) {
  const {
    title,
    btnStyle,
    titleStyle,
    onPress,
    disabled,
    hasForwordArrow,
    mediumText,
  } = props;

  return (
    <MyTouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        {
          backgroundColor: disabled ? COLORS.gray : COLORS.primary,
          // paddingVertical: SIZES.twentyFive,
          // backgroundColor: 'red',
        },
        btnStyle,
      ]}>
      <Text
        style={[
          mediumText ? FONTS.mediumFont14 : FONTS.boldFont18,
          // { fontWeight: "900" },
          styles.textStyle,
          titleStyle,
        ]}>
        {title}
      </Text>
      {hasForwordArrow && (
        <Icon
          name="right"
          type={IconType.AntDesign}
          size={SIZES.twenty}
          color={COLORS.white}
          style={styles.iconStyle}
        />
      )}
    </MyTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    // paddingVertical: SIZES.fifteen * 1.3,
    borderRadius: SIZES.fifteen,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.twenty,
  },
  textStyle: {
    color: COLORS.white,
  },
  iconStyle: {
    right: SIZES.fifteen,
    position: 'absolute',
  },
});
