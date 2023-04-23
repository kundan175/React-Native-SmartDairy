import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import SmartDairyButton from "../Components/SmartButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustomHeader from "../Components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import TextInputField from "../Components/TextInputField";
import { useTranslation } from "react-i18next";

const CreateDairy = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Create Diary" />
      <View style={styles.container}></View>
      <View>
        <TextInputField label={"Name of Dairy"} placeHolder={"Dairy Name "} />
        <TextInputField label={"Mobile No."} placeHolder={"Mobile Number"} />
        <TextInputField
          label={"State"}
          placeHolder={"Type or choose your state"}
        />
        <TextInputField
          label={"City"}
          placeHolder={"Type or choose your city"}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: hp(10),
        }}
      >
        <SmartDairyButton
          title="Save"
          buttonStyle={{ height: hp(8), width: wp(50) }}
          onPress={() => navigation.navigate("SelectUser")}
        />
      </View>
    </SafeAreaView>
  );
};

export default CreateDairy;
const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: wp(2),
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
