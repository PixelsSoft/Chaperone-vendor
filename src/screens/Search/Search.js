import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  COLORS,
  CONSTANTS,
  height,
  IMAGES,
  SIZES,
  STYLES,
} from '../../constants/theme';
import Row from '../../components/Row';
import Icon, {IconType} from '../../components/Icons';
import CustomHeader from '../../components/CustomHeader';
import SearchBar from 'react-native-dynamic-search-bar';
import VendorCard from '../../components/VendorCard';
import JobCards from '../../components/JobCards';
import {hide, show} from '../../redux/Slices/Loader';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {store} from '../../redux/store';

export default function Search() {
  const [filters, setFilter] = useState('');
  const dispatcher = useDispatch();

  const [seacrhData, setSeacrhData] = useState([]);
  const [spinnerVisibility, setSpinnerVisibility] = useState(true);
  const [filterData, setFilterData] = useState(null);

  const result = vendors.filter(item => {
    return item.title.includes(filters);
  });

  useEffect(() => {
    seacrhJobs();
  }, [filters]);

  const seacrhJobs = () => {
    dispatcher(show());
    return axios
      .get(
        CONSTANTS.API_URLS.BASE_VENDOR + CONSTANTS.API_URLS.SEACRH + filters,

        {
          headers: {
            Authorization: store?.getState()?.auth?.accessToken,
          },
        },
      )

      .then(respone => {
        dispatcher(hide());
        console.log('response=================>', respone?.data);
      })
      .catch(err => {
        dispatcher(hide());
        console.log(err);
      });
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title="Search " />
      <SearchBar
        placeholder="Search here..."
        onChangeText={text => setFilter(text)}
        onSearchPress={() => console.log('Search Icon is pressed')}
        onClearPress={() => setFilter('')}
        style={{backgroundColor: COLORS.halfWhite, height: 60}}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: SIZES.ten,
          // alignItems: "center",
          justifyContent: 'center',
        }}>
        {seacrhData.map(item => {
          return <View style={{backgroundColor: 'red'}} />;
        })}
        {/* {filters === ''
          ? vendors.map(item => {
              return <JobCards item={item} style={{width: '90%'}} />;
            })
          : result.map(item => {
              return <JobCards item={item} style={{width: '90%'}} />;
            })} */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

const vendors = [
  {
    id: '1',
    image: IMAGES.User,
    title: 'Car Mechanic',

    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '2',
    image: IMAGES.User,
    title: 'Car Mechanic',
    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '3',
    image: IMAGES.User,
    title: 'Car Mechanic',
    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '4',
    image: IMAGES.User,
    title: 'Car Mechanic',

    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
  {
    id: '5',
    image: IMAGES.User,
    title: 'Car Mechanic',

    dec: 'Looking for a car mechanic that can look into the battery setup. The car is in a still position & wouldrequire some man power',
  },
];
