import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import SmartDairyButton from "../Components/SmartButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustomHeader from "../Components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import TextInputField from "../Components/TextInputField";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DeviceInfo from "react-native-device-info";
import Api from "../config/Api";
import { useTranslation } from "react-i18next";

const RegisterUser = () => {
  const navigation = useNavigation();
  const deviceId = DeviceInfo.getUniqueId();
  const [userName, setUserName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const { t, i18n } = useTranslation();

  const OtpSendApi = () => {
    let phoneRegex = /^[0-9]{10,13}$/;
    if (userName == "") {
      Alert.alert("Please Enter Name");
    } else if (mobileNo == "") {
      Alert.alert("Please Enter Mobile Number");
    } else if (phoneRegex.test(mobileNo) === false) {
      Alert.alert("Please Enter Valid Mobile Number");
    } else {
      Api.call(
        `http://saylussapidev.bancplus.in/api/CustomerRegisterSendOTP?Mobile=${mobileNo}&DeviceId=abc1234&Hash=1234`,
        "POST",
        null,
        true
      ).then((res) => {
        console.log("response ->", res);
        if (res) {
          navigation.navigate("OtpVerification", {
            mobileNumber: mobileNo,
            name: userName,
          });
        }
      });
    }
  };
  // const api = async() => {
  //   await fetch(`http://saylussapidev.bancplus.in/api/CustomerRegisterSendOTP?Mobile=${mobileNo}&DeviceId=abc1234&Hash=1234`,{
  //     method:'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'token'
  //     },
  //     body:null
  //   }).then(response => response.json())
  //   .then(res => {
  //     console.log('res',res)
  //   })
  // }
  // const changePlaceholderColor = (text) => {
  //   if(text.length ==0){

  //   }else{
  //     setPlaceholderColor('red')
  //   }
  // }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Register" />
      {/* <ScrollView contentContainerStyle={{flex:1,justifyContent:'space-around',}}> */}
      <KeyboardAwareScrollView
        contentContainerStyle={{ flex: 1, justifyContent: "space-around" }}
      >
        <View style={styles.textField}>
          <TextInputField
            placeHolder={t("Your Name")}
            value={userName}
            returnKeyType="next"
            // blurOnSubmit={false}
            onChangeText={(value) => {
              setUserName();
              // value.trim()
            }}
            onFocus={() => setPlaceholderColor("red")}
          />

          {/* <View style={styles.textField}> */}
          <TextInputField
            placeHolder={t("Mobile Number")}
            value={mobileNo}
            returnKeyType="next"
            keyboardType="numeric"
            // blurOnSubmit={false}
            onChangeText={(value) => {
              setMobileNo(value.trim());
            }}
          />
          {/* </View> */}
        </View>
        <View style={{ alignItems: "center", marginBottom: wp(10) }}>
          <SmartDairyButton
            title={t("Send OTP")}
            buttonStyle={{ height: wp(14) }}
            onPress={() => OtpSendApi()}
          />
        </View>
      </KeyboardAwareScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default RegisterUser;
const styles = StyleSheet.create({
  textField: {
    marginTop: wp(8),
  },
});
