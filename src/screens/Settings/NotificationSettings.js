import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Switch } from "react-native";
import CustomHeader from "../../components/CustomHeader";
import Icon, { IconType } from "../../components/Icons";
import { STYLES, SIZES, FONTS, COLORS, width } from "../../constants";

const data = [
  {
    id: "1",
    name: "Email Notification",
    icon: "mail",
    type: IconType.Feather,
    status: false,
  },
  {
    id: "2",
    name: "Phone Notification",
    icon: "phone-call",
    type: IconType.Feather,
    status: false,
  },

  {
    id: "3",
    name: "Phone Update ",
    icon: "history",
    type: IconType.MaterialCommunityIcons,
    status: false,
  },
];

export default function NotificationSettings(props) {
  const [select, setSelect] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [DATA, setDATA] = useState([...data]);

  const toggleSwitch = (index) => {
    const temp = [...DATA];
    temp[index].status = !temp[index].status;
    setDATA(temp);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.itemContainer,

          { borderColor: item.status ? COLORS.primary : COLORS.gray },
        ]}
      >
        <Icon
          name={item.icon}
          type={item.type}
          color={item.status ? COLORS.primary : COLORS.gray}
          size={SIZES.twentyFive}
        />

        <Text
          style={[
            FONTS.mediumFont14,
            {
              flex: 1,
              alignSelf: "center",
              color: COLORS.black,
              paddingHorizontal: SIZES.twenty,
            },
          ]}
        >
          {item.name}
        </Text>

        <Switch
          trackColor={{ false: COLORS.gray, true: COLORS.gray }}
          thumbColor={item.status ? COLORS.primary : COLORS.gray}
          onValueChange={() => toggleSwitch(index)}
          value={item.status}
        />
      </View>
    );
  };

  return (
    <View style={STYLES.container}>
      <CustomHeader hasBackArrow title="Notification Settings" />
      <View style={{ marginTop: SIZES.twenty }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          key={(item) => item}
          contentContainerStyle={{
            paddingHorizontal: SIZES.fifteen,
            paddingTop: SIZES.twentyFive,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: SIZES.ten * 1.3,
    paddingHorizontal: SIZES.twenty,
    marginVertical: SIZES.fifteen,
    borderColor: COLORS.primary,
    borderRadius: SIZES.fifteen,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  shodow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 9,
    elevation: 4,
  },
});
