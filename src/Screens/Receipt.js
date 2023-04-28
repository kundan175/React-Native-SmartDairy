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
import { alertShowNow } from "../store/counterSlice";
import CustomDrawerContent from "../Components/CustomDrawer";
import { DrawerActions } from '@react-navigation/native';
import TextInputField from "../Components/TextInputField";


const Receipt = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const dispatch = useDispatch();






  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:COLORS.white}}>
      {/* <CustomHeader title="Smart Dairy" /> */}
      
<View style={styles.headerView}>
    <View style={styles.leftHeaderView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source = {require('../assets/icons/backArrow.png')}/>
      </TouchableOpacity>
        <View style={{marginLeft:wp(5)}}>
        <Text style={styles.headingText}>Receive</Text>
        <Text style={styles.subHeadiingText}>Dairy Name</Text>
        </View>
    </View>
  
</View>
        <View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(2)}}/>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:wp(4)}}>
    <View style={{alignItems:'center',marginLeft:wp(3)}}>
        <TextInput
        placeholder="Customer Name/Mobile No."
        />
                <View style={{width:wp(50),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(2)}}/>

{/* <TextInputField
            placeHolder={t("Customer Name/Mobile No.")}
            // value={mobileNo}
            returnKeyType="next"
            // keyboardType="numeric"
            maxLength={10}
            // onChangeText={(value) => {
            //   setMobileNo(value.trim());
            // }}
            underlinestyle={{width:wp(60)}}
          /> */}
          </View>
          <TouchableOpacity>
          <Image source={require('../assets/icons/searchIcon.png')}/>
          </TouchableOpacity>
  <SmartDairyButton
                title={t("Add  +")}
                buttonStyle={{ height: wp(14), width: wp(32),borderTopLeftRadius:wp(2),borderBottomLeftRadius:wp(2)}}
            // image = {require('../assets/icons/addUser.png')}
            textStyle={{marginRight:wp(3)}}
              />          
</View>
<View style={{borderWidth:wp(0.2),borderColor:'gray',flexDirection:'row',paddingHorizontal:wp(4),justifyContent:'space-between',marginHorizontal:wp(5),marginTop:wp(4),paddingVertical:wp(4),borderRadius:wp(2)}}>
    <View>
        <Text style={{fontSize:18,fontWeight:'600',color:COLORS.MainHeaderColor}}>ABC Company</Text>
        <Text  style={{fontSize:14,fontWeight:'300',color:COLORS.MainHeaderColor}}>+91 9876435271</Text>
        <Text style={{fontSize:14,fontWeight:'300',color:COLORS.MainHeaderColor}}>#01 nagar road</Text>

    </View>
    <View>
        <Text style={{fontSize:22,fontWeight:'700',color:'#3F8D39'}}>999.00 CR</Text>
        <Text style={{fontSize:19,fontWeight:'600',color:'#3F8D39',textAlign:'center'}}>Fat Rate: 7</Text>

    </View>
</View>
<View style={{flexDirection:'row',marginHorizontal:wp(19),justifyContent:'space-between',marginTop:wp(4),marginBottom:wp(1)}}>
    <View style={{alignItems:'center'}}>
        <Image source={require('../assets/icons/Book.png')}/>
        <Text style={{fontSize:14,fontWeight:'300',color:COLORS.MainHeaderColor,marginTop:wp(2)}}>Current Ledger</Text>
    </View>
    <View style={{alignItems:'center'}}>
        <Image source={require('../assets/icons/editUser.png')}/>
        <Text style={{fontSize:14,fontWeight:'300',color:COLORS.MainHeaderColor,marginTop:wp(2)}}>Edit Party</Text>
    </View>
</View>
<View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(2)}}/>
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:wp(6),marginHorizontal:wp(10)}}>
    <View style={{alignItems:'center',marginLeft:wp(3)}}>
        {/* <TextInput
        placeholder="Customer Name/Mobile No."
        /> */}
        <Text style={{fontSize:17,fontWeight:'500',color:COLORS.MainHeaderColor}}>23 Jan 2023 07:15 AM</Text>
                <View style={{width:wp(60),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(2)}}/>

{/* <TextInputField
            placeHolder={t("Customer Name/Mobile No.")}
            // value={mobileNo}
            returnKeyType="next"
            // keyboardType="numeric"
            maxLength={10}
            // onChangeText={(value) => {
            //   setMobileNo(value.trim());
            // }}
            underlinestyle={{width:wp(60)}}
          /> */}
          </View>
          <TouchableOpacity>
          <Image source={require('../assets/icons/calender.png')}/>
          </TouchableOpacity>
       
</View>
<View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(5)}}/>


<View style={{flexDirection:'row',marginHorizontal:wp(5),justifyContent:'space-evenly',marginTop:wp(5)}}>
<SmartDairyButton
                title={t("Cash")}
                buttonStyle={{ height: wp(14), width: wp(40),borderRadius:wp(2),flexDirection:'row' }}
              />
               <SmartDairyButton
                title={t("Bank")}
                buttonColor='white'
                buttonStyle={{ height: wp(14), width: wp(40),borderRadius:wp(2),flexDirection:'row',borderWidth:wp(0.2) }}
                textColor= 'black'
              />
</View>
<View>
<TextInputField label={"Amount"}
titleTextStyle={{marginTop:wp(7)}}
 textInputStyle={{height:wp(8)}} /> 
<TextInputField label={"Remark"} 
titleTextStyle={{marginTop:wp(7)}}

textInputStyle={{height:wp(8)}} />   
</View>
<View style={{justifyContent:'flex-end',flex:1,marginBottom:wp(2)}}>
<SmartDairyButton
                title={t("Save")}
                buttonStyle={{ height: wp(16), width: wp(100) }}
              />
</View>
    </SafeAreaView>
  );
};

export default Receipt;
const styles = StyleSheet.create({
  headerView:{
    flexDirection:'row',justifyContent:'space-between',marginTop:wp(2),marginHorizontal:wp(3)
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
boxDataView:{
  borderColor:'#000000',borderWidth:0.5,paddingHorizontal:wp(2),marginHorizontal:wp(4),marginTop:wp(4),borderRadius:wp(4)
},
textBox:{
  color:'#002047',opacity:0.7,marginVertical:wp(2)
},
textBox1:{
  color:COLORS.black ,marginVertical:wp(1),fontWeight:'700'
},
textBox1red:{
  color:'red' ,marginVertical:wp(1),fontWeight:'700'
},
adminView:{
  padding:2,borderWidth:0.5,borderColor:'#000000',paddingHorizontal:wp(4),marginHorizontal:wp(4),marginTop:wp(4),borderRadius:wp(1.5),paddingVertical:wp(4)
},
textinput:{
 marginHorizontal:wp(2),marginTop:wp(6),paddingVertical:wp(3),flexDirection:'row',justifyContent:'space-between'

},bottomText:{
  color:COLORS.MainHeaderColor,fontSize:15,fontWeight:'600',marginTop:wp(1)
},bottomTabView:{
  flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(4)
},
bottomView:{
  alignItems:'center'
}
});
