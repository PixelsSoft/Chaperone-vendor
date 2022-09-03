import { StyleSheet, Text, View, Image, Modal } from "react-native";
import React, { useState } from "react";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from "../../constants/theme";
import CustomHeader from "../../components/CustomHeader";
import MyTouchableOpacity from "../../components/MyTouchableOpacity";
import Icon, { IconType } from "../../components/Icons";
import CustomButton from "../../components/CustomButton";
import LottieView from "lottie-react-native";

export default function BlockScreen(props) {
  const { navigation } = props;
  const [visible, setVisible] = useState(false);
  return (
    <View style={STYLES.container}>
      <View
        style={{
          flex: 1,
          paddingTop: SIZES.twentyFive * 3,
          paddingHorizontal: SIZES.twenty,
        }}
      >
        <Image
          source={IMAGES.Logo}
          resizeMode="contain"
          style={{
            alignSelf: "center",
            height: SIZES.twenty * 5,

            width: SIZES.twenty * 11,
          }}
        />
        <Text
          style={[
            FONTS.boldFont18,
            {
              textAlign: "center",
              paddingHorizontal: SIZES.twenty,
              marginTop: SIZES.twentyFive,
            },
          ]}
        >
          Your account is on hold because the certification has not been
          submitted from your side.
        </Text>
        <MyTouchableOpacity style={styles.uploadBtn}>
          <Icon
            type={IconType.MaterialCommunityIcons}
            name={"cloud-upload"}
            color={COLORS.primary}
            size={SIZES.twentyFive * 4}
          />
          <Text style={[FONTS.boldFont18]}>Add Certificate Photo</Text>
          <Text style={[FONTS.mediumFont12, { color: COLORS.gray }]}>
            Please Upload clear and Hige Quality Photo
          </Text>
        </MyTouchableOpacity>
      </View>
      <CustomButton
        onPress={() => setVisible(true)}
        title={"Submit"}
        btnStyle={{ margin: SIZES.twentyFive }}
      />

      <Modal visible={visible} transparent={true}>
        <MyTouchableOpacity
          onPress={() => {
            setVisible(false);
            navigation.navigate(SCREENS.Login);
          }}
          style={[{ justifyContent: "center", alignItems: "center", flex: 1 }]}
        >
          <View style={styles.modalstyle}>
            <LottieView
              source={require("../../assets/images/Check.json")}
              autoPlay
              style={{ width: SIZES.fifty * 3 }}
              loop
            />
            <Text
              style={[
                FONTS.boldFont18,
                {
                  textAlign: "center",
                  paddingHorizontal: SIZES.twenty,
                },
              ]}
            >
              Thanks for submitting the certification, it will take 24 hours to
              review your document.
            </Text>
          </View>
        </MyTouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  uploadBtn: {
    marginTop: SIZES.twenty,
    borderRadius: SIZES.fifteen,
    borderWidth: 2,
    alignItems: "center",
    borderStyle: "dashed",
    borderColor: COLORS.gray,
    paddingVertical: SIZES.ten,
    marginHorizontal: SIZES.twentyFive,
  },
  modalstyle: {
    backgroundColor: COLORS.white,
    padding: SIZES.fifteen,
    marginHorizontal: SIZES.twentyFive,
    borderRadius: SIZES.twenty,
    alignItems: "center",
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
