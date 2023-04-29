import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import SmartDairyButton from "../Components/SmartButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustomHeader from "../Components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import TextInputField from "../Components/TextInputField";
import { useTranslation } from "react-i18next";
import { Loader } from "../Components/Loader";
import { Dropdown } from "react-native-element-dropdown";

const CreateDairy = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();
const [dairyName, setDiaryName] = useState('')
const [mobileNo, setMobileNo] = useState('')
const [state, setState] = useState('')
const [city, setCity] = useState('')
const [isLoading, setIsLoading] = useState(false);
const [stateCity, setStateCity] = useState([])
const [selectedOption, setSelectedOption] = useState(null);

console.log('stateCity--------',stateCity)

useEffect(() => {
  getStateCIty()
},[])

const getStateCIty = () => {
const formData = new FormData();
formData.append('ClientName', 'SmartDairy');
formData.append('sprocname', 'App_GetStateCity');
formData.append('DeviceID', 'qwert1234');
formData.append('JsonData', JSON.stringify({
  nCtgid: '2',
  nParentid:null
  
}));
    Api.call(
      `/api/DataAdd`,
      "POST",
      formData,
      true
    )
      .then((res) => {
        // console.log("response ->", res?.Data[0]?.List);
        if (res) {
          setIsLoading(false);
          setStateCity(res?.Data[0]?.List)
        }
      })
      .catch(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onSave = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Create Diary" />
      <View style={styles.container}></View>
      <View style={{marginTop:wp(6)}}>
        <TextInputField label={"Name of Dairy"} placeHolder={"Dairy Name "}
                textInputStyle={styles.textInputPlaceholderStyle}
                value={dairyName}
                returnKeyType="next"
                onChangeText={(value) => {
                  setDiaryName(value.trim());
                }}
                />
        <TextInputField label={"Mobile No."} placeHolder={"Mobile Number"}
                textInputStyle={styles.textInputPlaceholderStyle}
                value={mobileNo}
                returnKeyType="next"
                onChangeText={(value) => {
                  setMobileNo(value.trim());
                }}
                />
        <TextInputField
          label={"State"}
          placeHolder={"Type or choose your state"}
          textInputStyle={styles.textInputPlaceholderStyle}
          value={state}
          returnKeyType="next"
          onChangeText={(value) => {
            setState(value.trim());
          }}

        />
                <Dropdown
          style={{ marginHorizontal: wp(0) }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateCity}
          labelField="Code"
          valueField="Code"
          // placeholder={"Select"}
          value={selectedOption}
          onChange={(data) => {
            setSelectedOption(data.value);
          }}
      


          // value={value}
          // //   onFocus={() => setIsFocus(true)}
          // //   onBlur={() => setIsFocus(false)}
          // onChange={(item) => {
          //   i18n.changeLanguage(item.value);
          //   setValue(item.value);
          //   // setIsFocus(false);
          // }}
        />
        <TextInputField
          label={"City"}
          placeHolder={"Type or choose your city"}
          textInputStyle={styles.textInputPlaceholderStyle}
          value={city}
          returnKeyType="next"
          onChangeText={(value) => {
            setCity(value.trim());
          }}

        />
         <Dropdown
          style={{ marginHorizontal: wp(0) }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateCity}
          labelField="Code"
          valueField="Code"
          placeholder={"Select"}
          value={selectedOption}
          onChange={(data) => {
            setSelectedOption(data.value);
          }}
      


          // value={value}
          // //   onFocus={() => setIsFocus(true)}
          // //   onBlur={() => setIsFocus(false)}
          // onChange={(item) => {
          //   i18n.changeLanguage(item.value);
          //   setValue(item.value);
          //   // setIsFocus(false);
          // }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: wp(40),
          }}
        >
          <SmartDairyButton
            title="Save"
            buttonStyle={{ height: wp(13), width: wp(40) }}
            onPress={() => onSave()}
          />
        </View>
      </View>
      <Loader modalVisible={isLoading} />

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
  textInputPlaceholderStyle:{
    height:wp(7),marginLeft:wp(2)
},  dropdown: {
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
    fontWeight: "600",
    color: "#002047",
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: wp(4),
    color: "#002047",
    fontWeight: "600",
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
