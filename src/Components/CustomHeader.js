import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const CustomHeader = ({
  title,
  headerColor,
  textColor,
  textStyle,
  headerStyle,
  image,
  imageStyle,
  onPress,
  viewStyle,
}) => {
  return (
    <View
      style={{
        ...styles.headerContainer,
        ...headerStyle,
        backgroundColor: headerColor || "#002047",
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={{ ...imageStyle }} />
      </TouchableOpacity>
      <Text
        style={{
          ...styles.textStyle,
          ...textStyle,
          color: textColor || "#FFFFFF",
        }}
      >
        {title}
      </Text>
      <View style={{ ...viewStyle }} />
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
