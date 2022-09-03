import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Row from '../../components/Row';
import CircularImage from '../../components/CircularImage';
import {IMAGES} from '../../constants';
import {COLORS, FONTS, SIZES, STYLES} from '../../constants/theme';
import Icon, {IconType} from '../../components/Icons';
import moment from 'moment';
import {useSelector} from 'react-redux';

export default function Reviews() {
  const ProfileData = useSelector(state => state.profile.Data);
  // console.log('profile data =========>', ProfileData?.records?.reviews);

  const ReviewCard = ({item}) => {
    // console.log('itemmmmmms==========>', item);
    return (
      <Row
        style={{
          borderBottomWidth: 0.5,
          borderColor: COLORS.gray,
          flex: 1,
          paddingBottom: SIZES.five,
          marginBottom: SIZES.fifteen,
          justifyContent: 'flex-start',
        }}>
        <CircularImage
          image={IMAGES.User}
          imageStyle={{
            width: SIZES.fifty,
            height: SIZES.fifty,
            borderColor: COLORS.primary,
          }}
        />
        <View style={{marginHorizontal: SIZES.ten, flex: 1}}>
          <Text
            numberOfLines={3}
            style={[FONTS.boldFont16, {marginBottom: SIZES.ten, flex: 1}]}>
            John Deen
          </Text>
          <Text style={[FONTS.mediumFont10, {color: COLORS.gray + 98}]}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deser unt mollit anim id est laborum.
          </Text>
          <Text
            style={[
              FONTS.mediumFont10,
              {marginVertical: SIZES.ten, color: COLORS.brownGray},
            ]}>
            {moment(new Date()).format('ll')}
          </Text>
        </View>
      </Row>
    );
  };
  return (
    <SafeAreaView style={STYLES.container}>
      <FlatList
        contentContainerStyle={{padding: SIZES.twenty}}
        data={ProfileData?.records?.reviews}
        renderItem={ReviewCard}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   style={{
    //     padding: SIZES.twenty,
    //   }}>
    //   {Review.map(item => {
    //     return <ReviewCard />;
    //   })}
    // </ScrollView>
  );
}
const Review = [
  {
    id: '1',
  },
  {
    id: '2',
  },
  {
    id: '3',
  },
  {
    id: '4',
  },
  {
    id: '5',
  },
  {
    id: '6',
  },
];

const styles = StyleSheet.create({});
