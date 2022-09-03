import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import CustomHeader from '../../components/CustomHeader';
import {COLORS, FONTS, height, IMAGES, SIZES} from '../../constants';
import Icon, {IconType} from '../../components/Icons';
import Row from '../../components/Row';
import SearchBar from 'react-native-dynamic-search-bar';
import VendorCard from '../../components/VendorCard';
import CircularImage from '../../components/CircularImage';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function Nearby() {
  const [filters, setFilter] = useState('');

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  const result = vendors.filter(item => {
    return item.title.includes(filters);
  });
  const [region, setRegion] = useState({
    latitude: 22.6345648,
    longitude: 88.4377279,
    latitudeDelta: 0.01486419044303443,
    longitudeDelta: 0.0140142817690068,
  });

  const {width, height} = Dimensions.get('window');

  const CARD_WIDTH = width * 0.8;

  let mapAnimation = new Animated.Value(0);
  let mapIndex = 0;

  useEffect(() => {
    mapAnimation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item

      if (index >= vendors.length) {
        index = vendors.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const {coordinate} = vendors[index];

          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  });

  const interpolations = vendors.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });

    return {scale};
  });

  return (
    <View style={styles.container}>
      <CustomHeader
        hasBackArrow
        title="Nearby"
        containerStyle={{
          paddingVertical: SIZES.twentyFive,
          position: 'absolute',
          zIndex: 11,
          backgroundColor: COLORS.transparent,
        }}
      />
      <MapView style={styles.map} ref={_map} initialRegion={region}>
        {vendors.map(item => {
          return (
            <Marker coordinate={item.coordinate}>
              <CircularImage image={item.image} />
            </Marker>
          );
        })}
      </MapView>
      <SearchBar
        placeholder="Search here"
        // onChangeText={text => setFilter(text)}
        // onSearchPress={() => console.log('Search Icon is pressed')}
        // onClearPress={() => setFilter('')}
        style={{
          marginVertical: SIZES.twenty,
          backgroundColor: COLORS.halfWhite,
          height: 60,
          position: 'absolute',
          zIndex: 11,
          top:
            Platform.OS === 'android'
              ? SIZES.fifty * 1.3
              : getStatusBarHeight(true) * 1.75,
        }}
      />
      <View style={{position: 'absolute', zIndex: 1, bottom: SIZES.twenty}}>
        <MyTouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.fifteen,
            alignSelf: 'flex-end',
            marginRight: SIZES.twenty,
            width: SIZES.twentyFive * 1.75,
            height: SIZES.twentyFive * 1.75,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="my-location"
            type={IconType.MaterialIcons}
            size={SIZES.ten * 2.5}
            color={COLORS.white}
            style={{marginHorizontal: SIZES.ten}}
          />
        </MyTouchableOpacity>

        <Animated.ScrollView
          decelerationRate={0.5}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{paddingHorizontal: SIZES.twentyFive}}
          snapToInterval={width * 0.65}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: mapAnimation,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}>
          {
            // filters === '' &&
            // ? vendors.map(item => {
            //     return <VendorCard item={item} style={{width: CARD_WIDTH}} />;
            //   })
            result.map(item => {
              return <VendorCard item={item} />;
            })
          }
        </Animated.ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerStyle: {
    backgroundColor: COLORS.Red,
    borderRadius: SIZES.twentyFive,
  },
});

const vendors = [
  {
    id: '1',
    image: IMAGES.User,
    title: 'car Mechanic',
    type: 'Car Mechanic, NY (2km)',
    ratings: '1.0 ratings',
    coordinate: {
      latitude: 22.6345648,
      longitude: 88.4377279,
    },
  },
  {
    id: '2',
    image: IMAGES.User,
    title: 'cleaner',
    type: 'car Wash, NY (1km)',
    ratings: '1.1 ratings',
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
  },
  {
    id: '3',
    image: IMAGES.User,
    title: 'cleaner',
    type: 'Puncture, NY (1.2km)',
    ratings: '1.2 ratings',

    coordinate: {
      latitude: 22.6341137,
      longitude: 88.4497463,
    },
  },
  {
    id: '4',
    image: IMAGES.User,
    title: 'plumber',
    type: 'Plumber, NY (0.2km)',
    ratings: '1.3 ratings',
    coordinate: {
      latitude: 22.6292757,
      longitude: 88.444781,
    },
  },
  // {
  //   id: "5",
  //   image: IMAGES.User,
  //   title: "plumber",
  //   type: "Bike Electrician, NY (0.5km)",
  //   ratings: "1.4 ratings",
  // },
  // {
  //   id: "5",
  //   image: IMAGES.User,
  //   title: "Electric",
  //   type: "Bike Electrician, NY (0.5km)",
  //   ratings: "1.4 ratings",
  // },
  // {
  //   id: "5",
  //   image: IMAGES.User,
  //   title: "cleaner",
  //   type: "Bike Electrician, NY (0.5km)",
  //   ratings: "1.4 ratings",
  // },
];
