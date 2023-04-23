import React, { useState, useEffect } from "react";
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Api from "../config/Api";
import { useTranslation } from "react-i18next";
import OtpInputs from "react-native-otp-inputs";
import { COLORS } from "../config/Constant";

const OtpVerification = ({ route }) => {
  const userData = route.params;
  const navigation = useNavigation();
  const [value, setValue] = useState("");
  const { t, i18n } = useTranslation();
  const [seconds, setSeconds] = useState(600);

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds]);
  const pad = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const minutes = pad(Math.floor(seconds / 60));
  const remainingSeconds = pad(seconds % 60);
  const ConfirmOtp = () => {
    Api.call(
      `http://saylussapidev.bancplus.in/api/CustomerRegisterConfirmOTP?Mobile=${userData?.mobileNumber}&DeviceId=abc1234&COtp=${value}&OTPId=22`,
      "POST",
      null,
      true
    ).then((res) => {
      console.log("ressss", res);
    });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <CustomHeader title="Phone Verification" />
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.headlineText}>{t("OTP Verification")}</Text>
          <Text style={styles.text1}>
            {t("An authentication code has been sent to")}
          </Text>
          <Text style={styles.phoneNumber}>{userData?.mobileNumber}</Text>
        </View>
        <View style={{ marginBottom: wp(5) }}>
          <OtpInputs
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            cursorColor={COLORS.primary}
            inputContainerStyles={{
              backgroundColor: "#F4F5F7",
              margin: wp(2),
              borderRadius: 5,
              alignSelf: "center",
              alignItems: "center",
              width: wp(12),
              height: wp(12),
              borderColor: COLORS.gray,
              borderWidth: 0.6,
            }}
            inputStyles={{
              textAlign: "center",
              color: COLORS.black,
              top: Platform.OS == "ios" ? 1 : 3,
              padding: Platform.OS == "ios" ? 15 : 0,
              fontSize: 25,
            }}
            handleChange={(code) => setValue(code)}
            numberOfInputs={6}
          />
        </View>
        <View style={styles.container2}>
          <Text style={styles.text2}>
            {t("I didn't receive code")}.{" "}
            <Text
              onPress={() => {
                setSeconds(600);
              }}
              style={{ color: COLORS.blue, fontWeight: "700" }}
            >
              {t("Resend Code")}
            </Text>
          </Text>
          <Text style={styles.text3}>
            {`${minutes}:${remainingSeconds}`} left
          </Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginTop: wp(3), marginBottom: wp(5) }}
          >
            <Text style={styles.changeNumText}>
              {t("Change Mobile Number")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginBottom: wp(10) }}>
          <SmartDairyButton
            title={t("Verify Now")}
            buttonStyle={{ height: wp(14) }}
            onPress={() => ConfirmOtp()}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default OtpVerification;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: hp(5),
    marginBottom: wp(9),
  },
  headlineText: {
    fontWeight: "700",
    fontSize: 24,
    color: COLORS.primary,
  },
  text1: {
    color: COLORS.gray,
    fontSize: 16,
    marginTop: wp(2),
  },
  phoneNumber: {
    color: COLORS.gray,
    fontSize: 16,
  },
  text2: {
    fontSize: 17,
    color: COLORS.primary,
  },
  container2: {
    alignItems: "center",
  },
  text3: {
    fontSize: 17,
    marginTop: wp(2),
    fontWeight: "500",
  },
  changeNumText: {
    color: COLORS.blue,
    fontWeight: "600",
    fontSize: 16,
  },
});
