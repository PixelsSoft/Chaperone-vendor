import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import PhoneInput from 'react-native-phone-number-input';
import {COLORS, FONTS, SIZES} from '../constants';
import {useSelector} from 'react-redux';

const PhoneNumberInput = React.forwardRef((props, ref) => {
  const ProfileData = useSelector(state => state.profile.Data);

  const {phoneInput, phoneRef} = ref.current;

  const [phone, setPhone] = React.useState('');
  const [flag, setFlag] = React.useState(ProfileData?.records?.country_code);
  const [borderColor, setBorderColor] = React.useState(COLORS.brownGray);
  const [focus, setFocus] = React.useState(false);

  const onSelect = country => {
    console.log('country.callingCode[0], ', country.callingCode[0]);
    setFlag(
      !country.callingCode[0].includes('+')
        ? `+${country.callingCode[0]}`
        : country.callingCode[0],
    );

    props.onSelect(
      !country.callingCode[0].includes('+')
        ? `+${country.callingCode[0]}`
        : country.callingCode[0],
    );
  };

  return (
    <PhoneInput
      ref={phoneInput}
      defaultCode="US"
      layout="first"
      defaultValue={props.value}
      onChangeCountry={onSelect}
      onChangeText={text => {
        props.onChangeText(text);
      }}
      textInputProps={{
        ref: phoneRef,
        onBlur: () => {
          setFocus(false);
          setBorderColor(COLORS.brownGray);
        },
        onFocus: () => {
          setFocus(true);
          setBorderColor(COLORS.primary);
        },
        style: [
          FONTS.mediumFont14,
          {
            flex: 1,
            color: !phoneInput.current?.isValidNumber(props.value)
              ? 'red'
              : borderColor,
            height: SIZES.fifty,
          },
        ],
        keyboardType: 'phone-pad',
        returnKeyType: 'done',
        onSubmitEditing: () => {
          props.onSubmitEditing();
        },
      }}
      textInputStyle={{padding: 0}}
      countryPickerButtonStyle={{
        borderRadius: SIZES.fifty,
      }}
      textContainerStyle={{
        borderRadius: SIZES.fifty,
        backgroundColor: 'transparent',
        paddingHorizontal: SIZES.fifteen,
        height: SIZES.fifty,
        borderRadius: SIZES.ten,
      }}
      containerStyle={{
        height: SIZES.fifty,
        width: '100%',
        borderRadius: SIZES.ten,
        borderWidth: 1,
        borderColor:
          props.value.length > 5 &&
          !phoneInput.current?.isValidNumber(props.value)
            ? 'red'
            : borderColor,
        marginTop: SIZES.fifteen * 2.3,
      }}
    />
  );
});

const styles = StyleSheet.create({});

export default PhoneNumberInput;
