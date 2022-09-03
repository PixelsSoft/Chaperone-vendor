import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, STYLES} from '../../constants';
import CustomHeader from '../../components/CustomHeader';
import {useSelector} from 'react-redux';

export default function AboutApp() {
  const Content = useSelector(state => state.content.Data);
  // console.log('Content dataaa========>', Content);

  const Item = ({answer, question}) => {
    return (
      <View style={styles.ItemContainer}>
        <Text style={[FONTS.mediumFont16, styles.question]}>{question}</Text>
        <Text style={[FONTS.mediumFont14, styles.answer]}>{answer}</Text>
      </View>
    );
  };
  return (
    <View style={STYLES.container}>
      <CustomHeader title={Content?.about_us_title} hasBackArrow />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={'never'}
        contentContainerStyle={{flexGrow: 1, paddingBottom: SIZES.fifteen}}>
        <Item
          // question={'Adipsicing Eluit Sed Colara?'}
          answer={Content?.about_us_paragraph}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    color: COLORS.black,
  },
  answer: {
    color: COLORS.gray,
    marginTop: SIZES.ten,
    textAlign: 'justify',
  },
  ItemContainer: {
    marginHorizontal: SIZES.twentyFive,
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.twentyFive,
    backgroundColor: COLORS.purpleShade,
    borderRadius: SIZES.ten,
  },
});
