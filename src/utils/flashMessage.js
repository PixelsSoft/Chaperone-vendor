import {Platform, StatusBar} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {COLORS, width} from '../constants';

export const showSimpleMessage = (type = 'default', props = {}) => {
  const message = {
    type,
    ...props,
    // autoHide: false,
    // hideStatusBar: true,
    // style: {height: 80},
    onPress: () => {
      hideMessage();
    },
    backgroundColor: COLORS.primary,
    icon: {icon: 'auto', position: 'left'},
    message: props.message ? props.message : null || 'sdasdsaad',
    description: props.description ? props.description : null,
    style: [
      Platform.OS === 'android' ? {top: StatusBar.currentHeight} : {},
      {position: 'absolute', width: width, zIndex: 100000},
    ],
  };

  showMessage(message);
};
