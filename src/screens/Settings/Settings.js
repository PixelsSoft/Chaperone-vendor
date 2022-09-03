import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {COLORS, FONTS, IMAGES, SCREENS, SIZES, STYLES} from '../../constants';
import Row from '../../components/Row';
import CustomHeader from '../../components/CustomHeader';
import CircularImage from '../../components/CircularImage';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';

export default function Settings(props) {
  const {navigation} = props;

  const DetailBox = ({item}) => {
    return (
      <MyTouchableOpacity
        onPress={() => navigation.navigate(item.Screen)}
        style={{
          borderRadius: SIZES.twenty,
          borderColor: COLORS.primary,
          borderWidth: 1,
          paddingVertical: SIZES.twenty,
          paddingHorizontal: SIZES.fifteen,
          marginVertical: SIZES.fifteen,
        }}>
        <Text style={[FONTS.mediumFont12, {color: COLORS.black}]}>
          {item.Name}
        </Text>
      </MyTouchableOpacity>
    );
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow showEditIcon title={'Settings'} />
      <Row style={styles.header}>
        <CircularImage
          image={IMAGES.User}
          imageStyle={{
            height: SIZES.twenty * 4,
            width: SIZES.twenty * 4,
            borderColor: COLORS.primary,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            justifyContent: 'center',
            paddingHorizontal: SIZES.fifteen,
          }}>
          <Text style={[FONTS.mediumFont14, {color: COLORS.black}]}>
            David John
          </Text>
          <Text style={[FONTS.mediumFont14, {color: COLORS.primary}]}>
            New York , USA
          </Text>
        </View>
      </Row>
      <View style={styles.detailSection}>
        <FlatList
          bounces={false}
          overScrollMode={'never'}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={data}
          renderItem={DetailBox}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: SIZES.twenty,
  },
  detailSection: {
    flex: 1,
    // marginTop: SIZES.twenty,
    // backgroundColor: "red",
    borderTopRightRadius: SIZES.twentyFive * 2,
    borderTopLeftRadius: SIZES.twentyFive * 2,
    paddingHorizontal: SIZES.twenty,
    paddingVertical: SIZES.twentyFive * 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
const data = [
  {
    id: '1',
    Name: 'Notification Settings',
    Screen: SCREENS.NotificationSetting,
  },
  {
    id: '2',
    Name: 'About App ',
    Screen: SCREENS.AboutApp,
  },
  {
    id: '3',
    Name: 'Privacy and Policy',
    Screen: SCREENS.PrivacyAndPolicy,
  },
];
