import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  COLORS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from "../../constants/theme";
import CustomHeader from "../../components/CustomHeader";
import LottieView from "lottie-react-native";
import Row from "../../components/Row";
import Icon, { IconType } from "../../components/Icons";
import CircularImage from "../../components/CircularImage";
import CustomButton from "../../components/CustomButton";
import MyTouchableOpacity from "../../components/MyTouchableOpacity";

export default function BookingConfirm(props) {
  const { navigation } = props;
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={"Booking Confirmed"} />
      <View
        style={{
          paddingHorizontal: SIZES.twentyFive,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieView
          source={require("../../assets/images/Check.json")}
          autoPlay
          style={styles.checkAnim}
          loop
        />
        <Text style={[FONTS.boldFont22]}>Booking Confirmed</Text>
        <Text
          style={[
            FONTS.mediumFont16,
            {
              textAlign: "center",
              color: COLORS.gray,
              marginVertical: SIZES.twenty,
              fontWeight: "700",
            },
          ]}
        >
          Your booking has been confirmed for Mon 14 july, 2021 {"(10:30 PM)"}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: SIZES.twentyFive,
          marginTop: SIZES.twentyFive * 2,
          flex: 1,
        }}
      >
        <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Row style={{ alignItems: "center" }}>
            <CircularImage image={IMAGES.User} />
            <Text
              style={{
                marginHorizontal: SIZES.ten,
                fontWeight: "600",
                color: COLORS.black,
              }}
            >
              David John
            </Text>
          </Row>
          <MyTouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.VendorProfile);
            }}
          >
            <Text style={{ fontWeight: "600", color: COLORS.primary }}>
              View Profile
            </Text>
          </MyTouchableOpacity>
        </Row>
        <Text
          style={[
            FONTS.mediumFont12,
            { color: COLORS.brownGray, marginVertical: SIZES.ten },
          ]}
        >
          Car Mechanic
        </Text>
        <Row style={{ alignItems: "center" }}>
          <Icon
            name={"shield"}
            type={IconType.Entypo}
            size={SIZES.twenty}
            color={COLORS.trueGreen}
          />
          <Text
            style={[
              FONTS.mediumFont10,
              { color: COLORS.trueGreen, marginHorizontal: SIZES.ten },
            ]}
          >
            Verified
          </Text>
        </Row>
        <Text
          style={[
            FONTS.boldFont16,
            {
              color: COLORS.gray,
              marginVertical: SIZES.ten,
              marginRight: SIZES.ten,
            },
          ]}
        >
          Car Mechanic ,NY {"(2Km)"}
        </Text>
        <Text style={[FONTS.mediumFont12, { color: COLORS.primary }]}>
          1.6 ratings
        </Text>
      </View>
      <CustomButton
        onPress={() => {
          navigation.navigate(SCREENS.Rating);
        }}
        title={"Rate now"}
        btnStyle={{ margin: SIZES.twentyFive }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  checkAnim: {
    width: SIZES.fifty * 3,
  },
});
