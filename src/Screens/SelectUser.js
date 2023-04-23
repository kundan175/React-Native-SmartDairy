import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CustomHeader from "../Components/CustomHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useTranslation } from "react-i18next";
import { COLORS } from "../config/Constant";

const SelectUser = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title={"Smart Dairy"} />
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: wp(5),
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterUser")}
            style={styles.userType}
          >
            <Text style={styles.userText}>{t("Dairy Owner")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterUser")}
            style={styles.userType}
          >
            <Text style={styles.userText}>{t("Dairy User")}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: wp(10), width: wp(80) }} />
      </View>
    </SafeAreaView>
  );
};

export default SelectUser;

const styles = StyleSheet.create({
  userType: {
    height: hp(6),
    width: wp(90),
    borderWidth: wp(0.5),
    borderColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp(2),
    marginVertical: wp(4),
  },
  userText: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.black,
  },
});
