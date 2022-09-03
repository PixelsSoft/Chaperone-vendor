import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
  COLORS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from "../../constants/theme";
import CustomHeader from "../../components/CustomHeader";
import CircularImage from "../../components/CircularImage";
import Row from "../../components/Row";
import Icon, { IconType } from "../../components/Icons";
import CustomButton from "../../components/CustomButton";
import StarRating from "react-native-star-rating";
import MyTouchableOpacity from "../../components/MyTouchableOpacity";

export default function Rating(props) {
  const { navigation } = props;
  const [starCount, setStarCount] = useState(2);
  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title={"Rate Now"} />
      <View
        style={{
          paddingHorizontal: SIZES.twentyFive,
          marginTop: SIZES.twentyFive,
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
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={[FONTS.boldFont22, { marginTop: SIZES.twentyFive * 2 }]}>
          How your experience?
        </Text>
        <Text
          style={[
            FONTS.boldFont18,
            { marginVertical: SIZES.twenty, color: COLORS.gray },
          ]}
        >
          Tell us about your experience rate now
        </Text>

        <StarRating
          animation="bounce"
          disabled={false}
          emptyStar={"star-o"}
          fullStar={"star"}
          halfStar={"star-half"}
          iconSet={"FontAwesome"}
          maxStars={5}
          rating={starCount}
          starStyle={{
            margin: SIZES.fifteen,
            marginVertical: SIZES.twentyFive,
          }}
          selectedStar={(rating) => setStarCount(rating)}
          fullStarColor={COLORS.primary}
        />
        <TextInput
          placeholder="Type here"
          style={{
            borderWidth: 1,
            width: "90%",
            height: SIZES.fifty * 2,
            borderRadius: SIZES.twenty,
            borderColor: COLORS.gray,
            padding: SIZES.fifteen,
            textAlignVertical: "top",
            fontWeight: "500",
          }}
        />
      </View>
      <CustomButton
        onPress={() => {
          navigation.navigate(SCREENS.UserMainLayout);
        }}
        title={"Submit"}
        btnStyle={{ margin: SIZES.twentyFive }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
