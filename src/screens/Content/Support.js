import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";

import {
  COLORS,
  IMAGES,
  FONTFAMILY,
  SCREENS,
  STYLES,
  SIZES,
  FONTS,
} from "../../constants";

import MyTouchableOpacity from "../../components/MyTouchableOpacity";
import CircularImage from "../../components/CircularImage";
import Row from "../../components/Row";
import CustomHeader from "../../components/CustomHeader";
import Icon, { IconType } from "../../components/Icons";

export default function Support({ navigation }) {
  const [message, setmessage] = useState();

  const messages = [
    {
      user: {
        image: IMAGES.user1,
        id: 1,
      },
      message: {
        text: "Hi Ankur! ",
        date: "14:26 PM",
      },
    },
  ];

  const renderSupportItem = ({ item }) => {
    return (
      <View
        style={{
          marginVertical: SIZES.five,
          alignSelf: "baseline",
          flexDirection: "row",
          marginTop: SIZES.fifteen,
        }}
      >
        <CircularImage
          image={IMAGES.User}
          style={{
            height: SIZES.twenty * 3,
            width: SIZES.twenty * 3,
          }}
        />
        <View style={{ marginStart: SIZES.ten }}>
          <View
            style={{
              backgroundColor: COLORS.primary,
              borderTopLeftRadius: SIZES.ten,
              borderTopRightRadius: SIZES.ten,
              borderBottomRightRadius: SIZES.ten,
            }}
          >
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  textAlign: "center",
                  color: COLORS.white,
                  padding: SIZES.ten,
                },
              ]}
            >
              {item.message.text}
            </Text>
          </View>
          <Text
            style={[
              FONTS.lightFont10,
              {
                color: COLORS.brownGray,
              },
            ]}
          >
            {item.message.date}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[STYLES.container]}>
      <CustomHeader hasBackArrow title={"Help/Support"} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.twenty,
        }}
      >
        <View style={{ flex: 1, paddingTop: 1 }}>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderSupportItem}
          />
        </View>

        <Row
          style={[
            STYLES.shadow,
            {
              alignItems: "center",
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              paddingVertical: SIZES.five,
              paddingHorizontal: SIZES.twenty,
              backgroundColor: COLORS.white,
              borderTopLeftRadius: SIZES.twentyFive,
              borderTopRightRadius: SIZES.twentyFive,
            },
          ]}
        >
          <TextInput
            placeholder={"Type Your Message"}
            placeholderTextColor={COLORS.brownGray}
            value={message}
            style={[FONTS.mediumFont12, styles.textInput]}
            onChangeText={(text) => setmessage(text)}
          />
          <MyTouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              paddingHorizontal: SIZES.ten,
              paddingVertical: SIZES.ten,
              borderRadius: SIZES.fifteen,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              type={IconType.Ionicons}
              name={"paper-plane-outline"}
              style={{
                fontSize: SIZES.twentyFive,
                color: COLORS.white,
              }}
            />
          </MyTouchableOpacity>
        </Row>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shodow: {
    shadowColor: "#5f6168",
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textInput: {
    flex: 1,
    marginHorizontal: SIZES.five,
    height: SIZES.fifty,
    color: COLORS.black,
  },
  container: {
    // flexDirection: 'row',
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.ten,
    borderBottomLeftRadius: SIZES.twenty,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.secondary,
    height: SIZES.twenty * 1.8,
    width: SIZES.twenty * 1.8,
    borderRadius: SIZES.ten,
  },
});
