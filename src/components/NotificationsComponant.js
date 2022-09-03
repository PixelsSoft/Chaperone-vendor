import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  STYLES,
  SIZES,
  height,
  width,
} from '../constants';
import CircularImage from './CircularImage';

import Row from './Row';
import LinearGradient from 'react-native-linear-gradient';
import Icon, {IconType} from './Icons';

const NotificationsComponant = props => {
  const [cardshadow, setcardshadow] = useState(true);
  // console.log("propsss dataaaa", props.data);
  const leftSwipe = (progress, dragX) => {
    return (
      <LinearGradient
        start={{x: 0, y: 2}}
        end={{x: 5, y: 1}}
        colors={['#FCF6BA', COLORS.primary, '#BF953F']}
        style={styles.deletButton}>
        <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.7}>
          <Icon
            type={IconType.Ionicons}
            name="ios-trash-outline"
            style={{
              color: COLORS.black,
              alignSelf: 'center',
              fontSize: SIZES.twentyFive,
            }}
          />
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  return (
    <View>
      <Swipeable
        renderRightActions={leftSwipe}
        childrenContainerStyle={{}}
        containerStyle={{
          position: 'relative',
          overflow: 'scroll',
          paddingVertical: SIZES.ten,
          borderRadius: SIZES.fifteen,
        }}
        onSwipeableWillClose={() => {
          setcardshadow(true);
        }}
        onSwipeableRightWillOpen={() => {
          setcardshadow(false);
        }}>
        <View style={[cardshadow ? styles.card : styles.shadow, {}]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <CircularImage image={IMAGES.User} />
            <View style={{flex: 1, marginHorizontal: SIZES.ten}}>
              <Text
                style={[FONTS.mediumFont14, {color: COLORS.black}]}
                numberOfLines={1}>
                {props.data?.name}
              </Text>
              <Text
                style={[FONTS.mediumFont12, {color: COLORS.gray}]}
                numberOfLines={2}>
                {props.data?.dec ||
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
              </Text>
            </View>
          </View>
        </View>
      </Swipeable>
      <View
        style={[
          STYLES.horLine,
          {
            height: StyleSheet.hairlineWidth,
            backgroundColor: COLORS.brownGray + 35,
            marginVertical: 0,
          },
        ]}
      />
    </View>
  );
};

export default NotificationsComponant;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.ten,
  },
  shadow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.ten,
  },
  deletButton: {
    paddingHorizontal: SIZES.ten,
    marginVertical: SIZES.ten,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: SIZES.fifteen,
    borderTopLeftRadius: SIZES.fifteen,
    backgroundColor: COLORS.secondary,
  },
});
