import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect } from "react";
import {
  COLORS,
  CONSTANTS,
  FONTS,
  SCREENS,
  SIZES,
  STYLES,
} from "../../constants";
import CustomHeader from "../../components/CustomHeader";
import EditText from "../../components/EditText";
import CustomButton from "../../components/CustomButton";
import PhoneInput from "react-native-phone-number-input";

import Row from "../../components/Row";
import PhoneNumberInput from "../../components/PhoneNumberInput";

export default function SignUpUser(props) {
  const { route, navigation } = props;
  const [phone, setPhone] = React.useState("");
  const [flag, setFlag] = React.useState("");

  const phoneInput = React.useRef(null);
  const phoneRef = React.useRef(null);

  const phoneParentRef = React.useRef({ phoneInput, phoneRef });
  const [borderColor, setBorderColor] = React.useState(COLORS.brownGray);
  const [focus, setFocus] = React.useState(false);

  const nameRef = React.createRef(null);
  const emailRef = React.createRef(null);
  const addressRef = React.createRef(null);
  const passwordRef = React.createRef(null);
  const ConfirmPasswordRef = React.createRef(null);

  useEffect(() => {
    if (phoneInput.current?.isValidNumber(phone)) {
      addressRef.current.focus();
    }
  }, [phone]);

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={"Sign Up"} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: SIZES.twenty,
          flexGrow: 1,
          paddingBottom: 100,
        }}
      >
        <EditText
          ref={nameRef}
          placeholder={"Name"}
          onSubmitEditing={() => {
            emailRef.current.focus();
          }}
        />
        <EditText
          ref={emailRef}
          placeholder={"Email"}
          onSubmitEditing={() => {
            phoneParentRef.current.phoneRef.current.focus();
          }}
        />
        <PhoneNumberInput
          ref={phoneParentRef}
          defaultCode="US"
          layout="first"
          value={phone}
          onSelect={(flag) => {
            setFlag(flag);
          }}
          onChangeText={(text) => {
            setPhone(text);
          }}
          onSubmitEditing={() => {
            phoneRef.current.focus();
          }}
        />

        <EditText
          ref={addressRef}
          placeholder={"Address"}
          onSubmitEditing={() => {
            passwordRef.current.focus();
          }}
        />
        <EditText
          ref={passwordRef}
          placeholder={"Password"}
          password
          onSubmitEditing={() => {
            ConfirmPasswordRef.current.focus();
          }}
        />
        <EditText
          ref={ConfirmPasswordRef}
          placeholder={"Confirm Password"}
          password
        />

        <CustomButton
          title={"Sign Up"}
          onPress={() => {
            navigation.navigate(SCREENS.Verification, {
              from: CONSTANTS.DESTINATIONS.SIGN_UP,
            });
          }}
          btnStyle={{ marginVertical: SIZES.twentyFive }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
