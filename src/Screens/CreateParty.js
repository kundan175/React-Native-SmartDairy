import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Alert,Image, TextInput, FlatList
} from "react-native";
import SmartDairyButton from "../Components/SmartButton";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustomHeader from "../Components/CustomHeader";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import { useTranslation } from "react-i18next";
import { COLORS } from "../config/Constant";
import { useDispatch } from "react-redux";
import TextInputField from "../Components/TextInputField";



const CreateParty = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
const [typeIndex, setTypeIndex] = useState(0)


  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:COLORS.white,}}>
      
<View style={styles.headerView}>
    <View style={styles.leftHeaderView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source = {require('../assets/icons/backArrow.png')}/>
      </TouchableOpacity>
        <View style={{marginLeft:wp(5)}}>
        <Text style={styles.headingText}>Customize Price</Text>
        <Text style={styles.subHeadiingText}>Dairy Name</Text>
        </View>

    </View>
        <Image source = {require('../assets/icons/threeDots.png')}/>
</View>

<View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(1)}}/>

<View style={styles.selectTypeView}>
    <Text style={{marginLeft:wp(2)}}>Select Type</Text>
    <View style={styles.threeButtonView}>

    <TouchableOpacity onPress={() => setTypeIndex(0)} style={{backgroundColor: typeIndex == 0 ? COLORS.MainHeaderColor : COLORS.white,height:wp(10),width:wp(30),justifyContent:'center',alignItems:'center',borderRadius:wp(1),borderWidth:wp(0.2),borderColor:'gray'}}>
<Text style={{color: typeIndex == 0 ?COLORS.white : COLORS.MainHeaderColor,fontWeight:'600',fontSize:15}}>Normal</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setTypeIndex(1)} style={{backgroundColor:typeIndex == 1 ? COLORS.MainHeaderColor : COLORS.white ,height:wp(10),width:wp(30),justifyContent:'center',alignItems:'center',borderRadius:wp(1),marginHorizontal:wp(1),borderWidth:wp(0.2),borderColor:'gray'}}>
<Text style={{color:typeIndex == 1 ?COLORS.white : COLORS.MainHeaderColor,fontWeight:'600',fontSize:15}}>Dairy</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setTypeIndex(2)} style={{backgroundColor:typeIndex == 2 ? COLORS.MainHeaderColor : COLORS.white ,height:wp(10),width:wp(30),justifyContent:'center',alignItems:'center',borderRadius:wp(1),borderWidth:wp(0.2),borderColor:'gray'}}>
<Text style={{color:typeIndex == 2 ?COLORS.white : COLORS.MainHeaderColor,fontWeight:'600',fontSize:15}}>Bank</Text>
    </TouchableOpacity>
    </View>
</View>
<View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(2)}}/>

<TextInputField label={"Name of Party"} placeHolder={"Party Name "} 
 textInputStyle={styles.textInputPlaceholderStyle}
 underlinestyle={styles.textinputUnderline}/>
 <View style={{marginTop:wp(2)}}>
        <TextInputField label={"Mobile No."} placeHolder={"Mobile Number"}
        textInputStyle={styles.textInputPlaceholderStyle}
        underlinestyle={styles.textinputUnderline} />
</View>
<View style={styles.unerLine}/>


{/* <View style={{alignItems:'flex-end',marginRight:wp(10),marginTop:wp(4)}}> */}
      <SmartDairyButton
                title={t("Set Customize Price")}
                buttonColor="white"
                buttonStyle={styles.priceButtonStyle}
            textStyle={{fontSize:15,fontWeight:'600'}}
            textColor='#002047'
              />
           
      {/* </View> */}

      <View style={styles.saveButtonView}>
      <SmartDairyButton
                title={t("Save")}
                buttonStyle={styles.saveButtonStyle}
            textStyle={{marginHorizontal:wp(2)}}
              />
           
      </View>
    </SafeAreaView>
  );
};

export default CreateParty;
const styles = StyleSheet.create({
  headerView:{
    flexDirection:'row',justifyContent:'space-between',marginTop:wp(2),marginHorizontal:wp(3),alignItems:'center'
  },
  leftHeaderView:{
    flexDirection:'row',alignItems:'center',marginBottom:wp(2)
  },
headingText :{
  color:COLORS.MainHeaderColor,fontWeight:'600',fontSize:wp(5)
},
subHeadiingText:{
 color: COLORS.marginHorizontal,fontWeight:'500'
},

unerLine:{
    width:wp(100),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(5)
},
saveButtonStyle:{
    height: wp(12), width: wp(35),borderRadius:wp(2),borderWidth:wp(0.2),borderColor:COLORS.MainHeaderColor,alignSelf:'center',marginBottom:wp(4)
},
saveButtonView:{
    alignItems:'flex-end',justifyContent:'flex-end',flex:1
},
priceButtonStyle:{
    height: wp(12), width: wp(50),borderRadius:wp(2),borderWidth:wp(0.2),borderColor:COLORS.MainHeaderColor,alignSelf:'center',marginTop:wp(8)
},
textInputPlaceholderStyle:{
    height:wp(6),marginLeft:wp(2)
},
textinputUnderline:{
    backgroundColor:'gray',opacity:0.5
},
selectTypeView:{
    marginTop:wp(5),marginHorizontal:wp(2),padding:wp(2)
},
threeButtonView:{
    flexDirection:'row',justifyContent:'space-evenly',marginTop:wp(3)
}




});
