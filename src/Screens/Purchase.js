import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Alert,Image, TextInput, FlatList, ScrollView
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

import TextInputField from "../Components/TextInputField";
import { TabView, SceneMap } from 'react-native-tab-view';


const Purchase = () => {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const navigation = useNavigation()
  const [routes] = useState([
    { key: 'first', title: 'Milk' },
    { key: 'second', title: 'Others' },
  ]);

  const Data = [
    { label: "Curd", value: "en" },
    { label: "Milk", value: "hi" },
  ];
  console.log(index)
  const FirstRoute = () => (
    <ScrollView>
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



<View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
<TextInputField label={"Fat"}
underlinestyle={{width:wp(40)}}
titleTextStyle={{marginTop:wp(7)}}
 textInputStyle={{height:wp(8),width:wp(40)}} /> 


 <TextInputField label={"Qty."}
underlinestyle={{width:wp(40)}}
titleTextStyle={{marginTop:wp(7)}}
 textInputStyle={{height:wp(8),width:wp(40)}} /> 
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:wp(6),marginHorizontal:wp(13)}}>
<Text style={{fontSize:22,color:COLORS.MainHeaderColor,fontWeight:'600',marginRight:wp(2)}}>
    Rate
</Text>
<Text style={{fontSize:22,color:COLORS.MainHeaderColor,fontWeight:'600',marginRight:wp(6)}}>Amount</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:wp(5),marginHorizontal:wp(15)}}>
<Text style={{fontSize:18,color:COLORS.MainHeaderColor,fontWeight:'400'}}>
    40.50 Rs
</Text>
<Text  style={{fontSize:18,color:COLORS.MainHeaderColor,fontWeight:'400',marginRight:wp(4)}}>403.5 Rs</Text>
</View>
<TextInputField label={"Remark"} 
titleTextStyle={{marginTop:wp(7)}}

textInputStyle={{height:wp(8)}} />   
<View style={{marginTop:wp(7)}}>
<SmartDairyButton
                title={t("Submit")}
                buttonStyle={{ height: wp(16), width: wp(100) }}
              />
</View>
    </ScrollView>
  );
  
  const SecondRoute = () => (
    <ScrollView>
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



<View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
{/* <TextInputField label={"Item"}
underlinestyle={{width:wp(40)}}
titleTextStyle={{marginTop:wp(7)}}
 textInputStyle={{height:wp(8),width:wp(40)}} />  */}
<View style={{marginTop:wp(5)}}>
<Text style={{fontSize:20,color:COLORS.MainHeaderColor,fontWeight:'600',marginLeft:wp(6)}}>Item</Text>
<TouchableOpacity style={{height:wp(8),width:wp(35),}}>
<Dropdown
          style={{ marginHorizontal: wp(0) }}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={Data}
          labelField="label"
          valueField="value"
          placeholder={''}
        //   value={value}
          //   onFocus={() => setIsFocus(true)}
          //   onBlur={() => setIsFocus(false)}
        //   onChange={(item) => {
        //     i18n.changeLanguage(item.value);
        //     setValue(item.value);
        //     // setIsFocus(false);
        //   }}
        />
</TouchableOpacity>
<View style={{width:wp(40),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(2)}}/>
</View>
 <TextInputField label={"Qty."}
underlinestyle={{width:wp(40)}}
titleTextStyle={{marginTop:wp(7)}}
 textInputStyle={{height:wp(8),width:wp(40)}} /> 
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:wp(6),marginHorizontal:wp(13)}}>
<Text style={{fontSize:22,color:COLORS.MainHeaderColor,fontWeight:'600',marginRight:wp(2)}}>
    Rate
</Text>
<Text style={{fontSize:22,color:COLORS.MainHeaderColor,fontWeight:'600',marginRight:wp(6)}}>Amount</Text>
</View>
<View style={{flexDirection:'row',justifyContent:'space-between',marginTop:wp(5),marginHorizontal:wp(15)}}>
<Text style={{fontSize:18,color:COLORS.MainHeaderColor,fontWeight:'400'}}>
    40.50 Rs
</Text>
<Text  style={{fontSize:18,color:COLORS.MainHeaderColor,fontWeight:'400',marginRight:wp(4)}}>403.5 Rs</Text>
</View>
<TextInputField label={"Remark"} 
titleTextStyle={{marginTop:wp(7)}}

textInputStyle={{height:wp(8)}} />   
<View style={{marginTop:wp(7)}}>
<SmartDairyButton
                title={t("Submit")}
                buttonStyle={{ height: wp(16), width: wp(100) }}
              />
</View>
    </ScrollView>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
 
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:COLORS.white }}>
      {/* <CustomHeader title="Smart Dairy" /> */}
   
<View style={styles.headerView}>
    <View style={styles.leftHeaderView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source = {require('../assets/icons/backArrow.png')}/>
      </TouchableOpacity>
        <View style={{marginLeft:wp(5)}}>
            {index == 0 ?
        <Text style={styles.headingText}>Purchase-Milk</Text>:
        <Text style={styles.headingText}>Purchase-Others</Text>

    }
        <Text style={styles.subHeadiingText}>Dairy Name</Text>
        </View>
    </View>
  
</View>
        <View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(2)}}/>
        <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    //   initialLayout={{ width: layout.width }}
    />
    </SafeAreaView>
  );
};

export default Purchase;
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
