import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
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
import { useDispatch } from "react-redux";
import { alertShowNow } from "../store/counterSlice";

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
const dispatch = useDispatch()
console.log('stateCity--------',stateCity)

useEffect(() => {
  getStateCIty()
},[])

// useEffect(() => {
//   createDiary()
// },[])

const createDiary = () => {
  let phoneRegex = /^[0-9]{10,13}$/;

  if(dairyName == ''){
    dispatch(alertShowNow({ title: "Please Enter Dairy Name" }));
  }else if (mobileNo == "") {
    dispatch(alertShowNow({ title: "Please Enter Mobile Number" }));
  } else if (phoneRegex.test(mobileNo) === false) {
    dispatch(alertShowNow({ title: "Please Enter Valid Mobile Number" }));
  } else if (state === '') {
    dispatch(alertShowNow({ title: "Please Enter State" }));
  } else if (city == '') {
    dispatch(alertShowNow({ title: "Please Enter City" }));
  } 
  else {
    setIsLoading(true);

const formData = new FormData();
formData.append('ClientName', 'SmartDairy');
formData.append('sprocname', 'App_AddDairy');
formData.append('DeviceID', 'qwert1234');
formData.append('Userid', '6');

formData.append('JsonData', JSON.stringify({
  cDairynm: dairyName,
  cMobile: mobileNo,
  nState:'2',
  nCity:'3',
  nUserid:'1',
  nDairyid:'1'
  
}));
    Api.call(
      `/api/DataAdd`,
      "POST",
      formData,
      true
    )
      .then((res) => {
        console.log("response ->", res);
        if (res) {
         navigation.navigate('LeftRightDrawer')
          setIsLoading(false);
        }
      })
      .catch(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }}

const getStateCIty = () => {  
const formData = new FormData();
formData.append('ClientName', 'SmartDairy');
formData.append('sprocname', 'App_GetStateCity');
formData.append('Deviceid', 'QW31023AD4D23-A42B-F233CA9809E1');
formData.append('Userid', '6');

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
        console.log("response ->", res?.Data);
        if (res) {
          setIsLoading(false);
          setStateCity(res?.Data)
        }
      })
      .catch(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // const handleStateChange = () => {
  //   setCity()
  // }
  // const onSave = () => {};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Create Dairy" />
      <View style={styles.container}></View>
      <View style={{marginTop:wp(6)}}>
        <TextInputField label={t("Name of Dairy")} placeHolder={t("Dairy Name")}
                textInputStyle={styles.textInputPlaceholderStyle}
                value={dairyName}
                returnKeyType="next"
                onChangeText={(value) => {
                  setDiaryName(value);
                }}
                />
        <TextInputField label={t("Mobile No.")} placeHolder={t("Mobile Number")}
                textInputStyle={styles.textInputPlaceholderStyle}
                value={mobileNo}
                returnKeyType="next"
                maxLength={10}
                onChangeText={(value) => {
                  setMobileNo(value.trim());
                }}
                />
        {/* <TextInputField
          label={"State"}
          placeHolder={"Type or choose your state"}
          textInputStyle={styles.textInputPlaceholderStyle}
          value={state}
          returnKeyType="next"
          onChangeText={(value) => {
            setState(value.trim());
          }}

        /> */}
        <View>
          <Text style={{fontWeight:'600', fontSize: 18,
            color: "black",
            marginLeft: wp(7),
            marginTop: wp(5),
            fontWeight: "600",}}>{t('State')}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(5),marginLeft:wp(8)}}>
          {/* <TextInput
          placeholder={t("Type or choose your state")}
          placeholderTextColor={'gray'}
          style={{width:wp(40),flex:1,height:wp(8)}}
          value={state}
          onChangeText={(value) => {
            setState(value);
          }}
          /> */}
       <Dropdown
          style={{flex:1}}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateCity}
          labelField="Code"
          valueField="Code"
          placeholder={"Type or choose your state"}
          value={state}
          onChange={(data) => {
            setState(data.value);
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
      
        </View>
  
        <View
          style={{
            alignSelf: "center",
            height: hp(0.1),
            width: wp(86),
            paddingHorizontal: 15,
            color: "gray",
            backgroundColor: "gray",
          }}
        ></View>
               </View>
        {/* <TextInputField
          label={t("City")}
          placeHolder={t("Type or choose your city")}
          textInputStyle={styles.textInputPlaceholderStyle}
          value={city}
          returnKeyType="next"
          onChangeText={(value) => {
            setCity(value);
          }}

        /> */}
         <View>
          <Text style={{fontWeight:'600', fontSize: 18,
            color: "black",
            marginLeft: wp(7),
            marginTop: wp(5),
            fontWeight: "600",}}>{t('City')}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(5),marginLeft:wp(8)}}>
          {/* <TextInput
          placeholder={t("Type or choose your state")}
          placeholderTextColor={'gray'}
          style={{width:wp(40),flex:1,height:wp(8)}}
          value={state}
          onChangeText={(value) => {
            setState(value);
          }}
          /> */}
       <Dropdown
          style={{flex:1}}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateCity}
          labelField="Code"
          valueField="Code"
          placeholder={"Type or choose your city"}
          value={city}
          onChange={(data) => {
            setCity(data.value);
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
      
        </View>
  
        <View
          style={{
            alignSelf: "center",
            height: hp(0.1),
            width: wp(86),
            paddingHorizontal: 15,
            color: "gray",
            backgroundColor: "gray",
          }}
        ></View>
               </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: wp(40),
          }}
        >
          <SmartDairyButton
            title={t("Save")}
            buttonStyle={{ height: wp(13), width: wp(40) }}
            onPress={() => createDiary()}
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
    fontSize: 14,
    marginLeft: wp(1),
    fontWeight: "600",
    color: "gray",
  },
  selectedTextStyle: {
    fontSize: 14,
    marginLeft: wp(1),
    color: "#002047",
    fontWeight: "500",
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: wp(3),
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
