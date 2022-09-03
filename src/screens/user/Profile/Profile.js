import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import {
  COLORS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from "../../../constants/theme";
import CustomHeader from "../../../components/CustomHeader";
import Row from "../../../components/Row";
import CircularImage from "../../../components/CircularImage";
import { TabView, SceneMap } from "react-native-tab-view";
import CustomButton from "../../../components/CustomButton";

import EditText from "../../../components/EditText";
import { useNavigation } from "@react-navigation/native";
export default function Profile(props) {
  // const { navigation } = props;
  const navigation = useNavigation();
  const DetailBox = ({ text }) => {
    return (
      <View
        style={{
          borderRadius: SIZES.twenty,
          borderColor: COLORS.primary,
          borderWidth: 1,
          paddingVertical: SIZES.twenty,
          paddingHorizontal: SIZES.fifteen,
          marginVertical: SIZES.fifteen,
        }}
      >
        <Text style={[FONTS.mediumFont16, { color: COLORS.black }]}>
          {text}
        </Text>
      </View>
    );
  };
  return (
    <View style={STYLES.container}>
      <CustomHeader
        showEditIcon
        containerStyle={{ paddingVertical: SIZES.twenty }}
        title={"Profile"}
      />
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
            justifyContent: "center",
            paddingHorizontal: SIZES.fifteen,
          }}
        >
          <Text style={[FONTS.mediumFont14, { color: COLORS.black }]}>
            David John
          </Text>
          <Text style={[FONTS.mediumFont14, { color: COLORS.primary }]}>
            New York , USA
          </Text>
        </View>
      </Row>
      <View style={styles.detailSection}>
        <Text
          style={[
            FONTS.mediumFont16,
            { color: COLORS.primary, fontWeight: "700" },
          ]}
        >
          Personal Info
        </Text>
        <DetailBox text="Alexa John" />
        <DetailBox text="alexa@abc.com" />
        <DetailBox text="+12 3456789" />
        <DetailBox text="New York,USA" />
        <CustomButton
          onPress={() => {
            navigation.navigate(SCREENS.Login);
          }}
          title={"Deactivate"}
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
    marginTop: SIZES.twenty,
    // backgroundColor: "red",
    borderTopRightRadius: SIZES.twentyFive * 2,
    borderTopLeftRadius: SIZES.twentyFive * 2,
    paddingHorizontal: SIZES.twenty,
    paddingVertical: SIZES.twentyFive * 2,
    backgroundColor: COLORS.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
