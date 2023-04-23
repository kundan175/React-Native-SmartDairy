import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../config/Constant";
import SmartDairyButton from "./SmartButton";

const CustomAlert = ({
  visible,
  heading,
  text,
  setVisisble,
  title,
  onPress,
}) => {
  return (
    <View>
      <Modal
        transparent={true}
        visible={visible}
        // onRequestClose={() => { setVisisble(false) }}
      >
        <View
          onPress={() => setVisisble(!modalVisible)}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
        >
          <View
            style={{
              width: wp(80),
              backgroundColor: COLORS.white,
              borderRadius: 20,
              paddingHorizontal: 4,
              paddingVertical: 15,
              alignItems: "center",
              borderWidth: 0.5,
              borderColor: "#FFFFFF",
            }}
          >
            <View style={{ marginLeft: 10, alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {heading}
              </Text>
              <View
                style={{
                  marginTop: 5,
                  alignItems: "center",
                  width: wp(48),
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: COLORS.black,
                    textAlign: "center",
                    fontWeight: "500",
                  }}
                >
                  {text}
                </Text>
              </View>
            </View>
            <SmartDairyButton
              buttonStyle={{ height: wp(10), width: wp(20), borderRadius: 10 }}
              onPress={onPress}
              title={title}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default CustomAlert;
