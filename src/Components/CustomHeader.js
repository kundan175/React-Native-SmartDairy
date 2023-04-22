import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomHeader = ({
  title,
  headerColor,
  textColor,
  textStyle,
  headerStyle,
}) => {
  return (
    <View
      style={{
        ...styles.headerContainer,
        ...headerStyle,
        backgroundColor: headerColor || "#002047",
      }}
    >
      <Text
        style={{
          ...styles.textStyle,
          ...textStyle,
          color: textColor || "#FFFFFF",
        }}
      >
        {title}
      </Text>
    </View>
  );
};
export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 22,
    fontWeight: "700",
  },
});
