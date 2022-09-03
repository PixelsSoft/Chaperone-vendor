import React from 'react';
import {Text} from 'react-native';
import {TabBar} from 'react-native-tab-view';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../constants';

export function ScrollTabBar(props) {
  return (
    <TabBar
      {...props}
      pressOpacity={0.85}
      scrollEnabled={true}
      labelStyle={FONTS.mediumFont14}
      pressColor={COLORS.primary}
      activeColor={COLORS.primary}
      inactiveColor={COLORS.brownGray}
      contentContainerStyle={{width: '100%'}}
      indicatorContainerStyle={{width: '100%'}}
      style={{backgroundColor: COLORS.white}}
      tabStyle={{
        paddingHorizontal: SIZES.twentyFive,
      }}
      indicatorStyle={{
        backgroundColor: COLORS.primary,
        marginLeft: SIZES.twenty,
      }}
      renderLabel={({route, focused, color}) => (
        <Text
          numberOfLines={1}
          style={[
            {
              fontSize: SIZES.body10,
              textTransform: 'capitalize',
              fontFamily: FONTFAMILY.Medium,
              color: focused ? COLORS.primary : COLORS.charcoalGrey,
            },
          ]}>
          {route.title}
        </Text>
      )}
    />
  );
}
