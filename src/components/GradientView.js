import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../constants';
const GradientView = props => {
  return (
    <LinearGradient
      start={{x: -2, y: 2}}
      end={{x: 5, y: 8}}
      style={props.style}
      // colors={['#BF953F',  '#FCF6BA']}
      colors={['#FCF6BA', COLORS.primary, '#BF953F']}>
      {props.children}
    </LinearGradient>
  );
};

export default GradientView;
