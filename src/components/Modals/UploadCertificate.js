import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ReactNativeModal from "react-native-modal";
import { COLORS, FONTS, height, SIZES } from "../../constants/theme";
import MyTouchableOpacity from "../MyTouchableOpacity";
import Icon, { IconType } from "../Icons";
import moment from "moment";
import Row from "../Row";
import { useDispatch, useSelector } from "react-redux";
import { closeDocModal } from "../../redux/Slices/Utiltities";

export default function UploadCertificate() {
  const { UploadDocVisible } = useSelector((state) => state.utiltities);
  const dispacth = useDispatch();

  const DateBox = ({ item1, item2, title }) => {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: SIZES.ten,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              borderRadius: SIZES.ten,
              borderWidth: 1,
              padding: SIZES.twenty,
              borderColor: COLORS.primary,
              marginHorizontal: SIZES.five,
            }}
          >
            <Text style={[FONTS.boldFont18]}>{item1}</Text>
          </View>
          <View
            style={{
              borderRadius: SIZES.ten,
              borderWidth: 1,
              padding: SIZES.twenty,
              borderColor: COLORS.primary,
              marginHorizontal: SIZES.five,
            }}
          >
            <Text style={[FONTS.boldFont18]}>{item2}</Text>
          </View>
        </View>
        <Text
          style={[
            FONTS.mediumFont14,
            { marginTop: SIZES.five, color: COLORS.gray },
          ]}
        >
          {title}
        </Text>
      </View>
    );
  };

  return (
    <ReactNativeModal
      isVisible={UploadDocVisible}
      style={{
        margin: 0,
        justifyContent: "flex-end",
      }}
      animationIn={"slideInUp"}
      animationInTiming={450}
      animationOutTiming={450}
      hideModalContentWhileAnimating
      statusBarTranslucent
      deviceHeight={height * height}
      coverScreen
      animationOut={"slideOutDown"}
    >
      <MyTouchableOpacity
        onPress={() => {
          dispacth(closeDocModal());
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: SIZES.fifteen,
        }}
      >
        <View style={styles.modalstyle}>
          <Text
            style={[
              FONTS.boldFont20,
              { color: COLORS.black, marginVertical: SIZES.fifteen },
            ]}
          >
            6 days left to submit the certification
          </Text>

          <Text
            style={[
              FONTS.mediumFont14,
              {
                color: COLORS.brownGray,
                marginBottom: SIZES.ten,
                textAlign: "justify",
              },
            ]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor ut labore et dolore magna aliqua.
          </Text>
          <Row>
            <DateBox item1={"0"} item2={"6"} title={"Days"} />
            <DateBox item1={"2"} item2={"3"} title={"Hours"} />
            <DateBox item1={"0"} item2={"4"} title={"Minuts"} />
          </Row>
          <MyTouchableOpacity style={styles.uploadBtn}>
            <Icon
              type={IconType.MaterialCommunityIcons}
              name={"cloud-upload"}
              color={COLORS.primary}
              size={SIZES.twentyFive * 4}
            />
            <Text style={[FONTS.boldFont16]}>Add Certificate Photo</Text>
            <Text style={[FONTS.mediumFont12, { color: COLORS.gray }]}>
              Please Upload clear and Hige Quality Photo
            </Text>
          </MyTouchableOpacity>
        </View>
      </MyTouchableOpacity>
    </ReactNativeModal>
  );
}

const styles = StyleSheet.create({
  modalstyle: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.twenty,
    alignItems: "center",
    padding: SIZES.twenty,
    justifyContent: "center",
  },
  uploadBtn: {
    marginTop: SIZES.twenty,
    borderRadius: SIZES.fifteen,
    borderWidth: 1,
    alignItems: "center",
    borderStyle: "dashed",
    borderColor: COLORS.gray,
    paddingHorizontal: SIZES.twenty,
    paddingVertical: SIZES.twenty,
  },
});
