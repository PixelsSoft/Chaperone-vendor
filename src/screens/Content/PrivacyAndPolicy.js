import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, STYLES } from "../../constants";
import CustomHeader from "../../components/CustomHeader";

export default function PrivacyAndPolicy() {
  const Item = ({ answer, question }) => {
    return (
      <View style={styles.ItemContainer}>
        <Text style={[FONTS.mediumFont16, styles.question]}>{question}</Text>
        <Text style={[FONTS.mediumFont14, styles.answer]}>{answer}</Text>
      </View>
    );
  };
  return (
    <View style={STYLES.container}>
      <CustomHeader title={"Privacy & Policy"} hasBackArrow />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: SIZES.fifteen }}
      >
        <Item
          question={"Adipsicing Eluit Sed Colara?"}
          answer={
            "Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur." +
            "Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur." +
            "Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur." +
            "Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur." +
            "Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur." +
            "Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur.Duis aute irure dolor in reprehenderit in volu ptate velit esse cillum dolore eu fugiat nulla pariatur."
          }
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
    textAlign: "justify",
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
