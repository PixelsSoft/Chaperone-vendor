import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';
import {
  COLORS,
  CONSTANTS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from '../../constants/theme';
import CircularImage from '../../components/CircularImage';
import Row from '../../components/Row';
import CustomHeader from '../../components/CustomHeader';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {ScrollTabBar} from '../../components/ScrollTabBar';
import personal from './PersonalInfo';
import Reviews from './Reviews';
import Icon, {IconType} from '../../components/Icons';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export default function VendorProfile(props) {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const ProfileData = useSelector(state => state.profile.Data);
  // console.log('profile data =========>', ProfileData?.records?.reviews);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Personal Info'},
    {key: 'second', title: 'Reviews'},
  ]);

  const renderScene = SceneMap({
    first: personal,
    second: Reviews,
  });

  return (
    <View style={STYLES.container}>
      <Row
        style={{
          padding: SIZES.twenty,
          marginTop: SIZES.twentyFive,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Row>
          <CircularImage
            image={{
              uri: CONSTANTS.API_URLS.IMAGE + ProfileData?.records?.image,
            }}
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
              {ProfileData?.records?.name}
            </Text>
            <Text style={[FONTS.mediumFont14, {color: COLORS.primary}]}>
              {ProfileData?.records?.address}
            </Text>
          </View>
        </Row>

        <Icon
          onPress={() => navigation.navigate(SCREENS.EditProfile)}
          name="edit"
          type={IconType.AntDesign}
          color={COLORS.black}
          size={SIZES.twentyFive}
        />
      </Row>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={ScrollTabBar}
      />
    </View>
  );
}
