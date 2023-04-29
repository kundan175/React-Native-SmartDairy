import React, { useEffect, useState } from "react";
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
import { Loader } from "../Components/Loader";
import { alertShowNow } from "../store/counterSlice";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterUser = () => {
  const navigation = useNavigation();
  const deviceId = DeviceInfo.getUniqueId();
  const [userName, setUserName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
const [otpId, setOtpId] = useState('')

useEffect(() => {
  userDeviceId()
},[])
const userDeviceId = async() => {
  var id = await AsyncStorage.getItem('deviceId')
  // console.log('idd',id)
}
  const OtpSendApi = () => {
    let phoneRegex = /^[0-9]{10,13}$/;
    if (userName == "") {
      dispatch(alertShowNow({ title: "Please Enter Name" }));
    } else if (mobileNo == "") {
      dispatch(alertShowNow({ title: "Please Enter Mobile Number" }));
    } else if (phoneRegex.test(mobileNo) === false) {
      dispatch(alertShowNow({ title: "Please Enter Valid Mobile Number" }));
    } else {
      setIsLoading(true);
    
     let body=
      JSON.stringify({
        ClientName: 'SmartDairy',
   sprocname: 'App_UserRegister',
   JsonData:{"cMobile":"9517361074","cDeviceid":"F1938310-23AD-4D23-A42B-F233CA9809E1","Parent":1},
      })
//   const formData = new FormData();

//   formData.append('ClientName', 'SmartDairy');
//   formData.append('sprocname', 'App_UserRegister');
//   formData.append('JsonData', JSON.stringify({
//   cMobile: '9517361074',
//   cDeviceid: 'F1938310-23AD-4D23-A42B-F233CA9809E1',
//   Parent: 1,
// }));
      Api.call(
        `/api/DataAdd?Deviceid='F1938310-23AD-4D23-A42B-F233CA9809E1'`,
        "POST",
        body,
        true
      )
        .then((res) => {
          console.log("response ->", res);
          if (res) {
            setIsLoading(false);
            setOtpId(res?.data?.id)
            navigation.navigate("OtpVerification", {
              mobileNumber: mobileNo,
              name: userName,
              id:otpId
            });
          }
        })
        .catch(() => {
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Register" />
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
              setUserName(value);
              // value.trim()
            }}
            onFocus={() => setPlaceholderColor("red")}
          />

          <TextInputField
            placeHolder={t("Mobile Number")}
            value={mobileNo}
            returnKeyType="next"
            keyboardType="numeric"
            maxLength={10}
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
      <Loader modalVisible={isLoading} />
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
