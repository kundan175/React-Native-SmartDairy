import React from "react";
import { Modal, ActivityIndicator, View, Pressable, Text } from "react-native";

export const Loader = ({ modalVisible }) => {
  return (
    <Modal visible={modalVisible} transparent={true}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(42,44,43,0.61)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color={"#002047"} />
        </View>
      </View>
    </Modal>
  );
};
