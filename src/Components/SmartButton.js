import react from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const SmartDairyButton = ({
  title,
  onPress,
  buttonStyle,
  buttonColor,
  textStyle,
  textColor,
  image
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || "#002047",
      }}
      onPress={onPress}
    >
                <Image source={image} />
      <Text
        style={{
          ...styles.title,
          ...textStyle,
          color: textColor || "#FFFFFF",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SmartDairyButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#002047",
    alignItems: "center",
    justifyContent: "center",
    height: wp(8),
    width: wp(80),
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
});
