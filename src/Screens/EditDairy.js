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

const EditDairy = () => {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Edit Diary"
            headerStyle={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}
            
                  image = {require('../assets/icons/whitebackArrow.png')}
                  viewStyle={{height:wp(6),width:wp(8),}}
      />
      <View style={styles.container}></View>
      <View style={{marginTop:wp(5)}}>
        {/* <TextInputField label={"Name of Dairy"} placeHolder={"Dairy Name "} /> */}
        <View style={{marginTop:wp(2)}}>
        <TextInputField label={"Name of Dairy"} placeHolder={"Dairy Name"}
        textInputStyle={styles.textInputPlaceholderStyle}
         />
</View>
        <View style={{marginTop:wp(2)}}>
        <TextInputField label={"Mobile No."} placeHolder={"Mobile Number"}
        textInputStyle={styles.textInputPlaceholderStyle}
         />
</View>
<View style={{marginTop:wp(2)}}>
        <TextInputField label={"State"} placeHolder={"Type or choose your state"}
        textInputStyle={styles.textInputPlaceholderStyle}
         />
</View>
<View style={{marginTop:wp(2)}}>
        <TextInputField label={"City"} placeHolder={"Type or choose your city"}
        textInputStyle={styles.textInputPlaceholderStyle}
         />
</View>
        {/* <TextInputField
          label={"State"}
          placeHolder={"Type or choose your state"}
        />
        <TextInputField
          label={"City"}
          placeHolder={"Type or choose your city"}
        /> */}
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
          buttonStyle={{ height: hp(6), width: wp(40) }}
          onPress={() => navigation.navigate("SelectUser")}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditDairy;
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
    height:wp(6),marginLeft:wp(2)
},
});
