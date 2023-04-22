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
import { Dropdown } from "react-native-element-dropdown";
import COLORS from "../config/Constant";
import { useTranslation } from "react-i18next";

const LanguageSelection = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const Data = [
    { label: "English", value: "en" },
    { label: "हिंदी", value: "hi" },
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Smart Dairy" />
      <View style={styles.container}>
        <Dropdown
          style={{ marginHorizontal: wp(0) }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={Data}
          labelField="label"
          valueField="value"
          placeholder={"Select language"}
          //   value={value}
          //   onFocus={() => setIsFocus(true)}
          //   onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            i18n.changeLanguage(item.value);
            // setValue(item.value);
            // setIsFocus(false);
          }}
        />
      </View>
      {/* <View style={{backgroundColor:'#002047',padding:30,justifyContent:'center',alignItems:'center'}}>

            <Text style={{color:'#FFFFFF',fontWeight:'700',fontSize:20}}>Smart Diary</Text>
            </View> */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: hp(10),
        }}
      >
        <SmartDairyButton
          title={t("Next")}
          buttonStyle={{ height: wp(14), width: wp(40) }}
          onPress={() => navigation.navigate("SelectUser")}
        />
      </View>
      {/* <TouchableOpacity style={{backgroundColor:'#002047',}}>
<Text>Next</Text>
            </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default LanguageSelection;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(6),
    borderWidth: wp(0.5),
    borderColor: COLORS.MainHeaderColor,
    marginTop: wp(15),
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    marginLeft: wp(4),
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: wp(4),
  },
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
