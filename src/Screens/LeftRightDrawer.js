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


const LeftRightDrawer = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const dispatch = useDispatch();


  const DATA = [
    {
      id:0,
      price:'20000'
    },
    {
      id:1,
      // price:'20000'
    },
    {
      id:2,
      // price:'20000'
    },
  ];

  const renderItem = ({item}) => {
    return(
      <View style={{ paddingVertical:wp(2)
    }}>
      <Text style={{marginVertical:wp(4),marginHorizontal:wp(3)}}>{item?.price}</Text>
      <View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000'}}/>

      </View>
    )
  }

  // const handle = () => {
  //   navigation.dispatch(DrawerActions.toggleDrawer())
  // }
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
      {/* <CustomHeader title="Smart Dairy" /> */}
      
<View style={styles.headerView}>
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.leftHeaderView}>
      <Image source = {require('../assets/icons/locationIcon.png')}/>
        <View style={{marginLeft:5}}>
        <Text style={styles.headingText}>Dairy 1</Text>
        <Text style={styles.subHeadiingText}>Maharastra India, India</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <Image source = {require('../assets/icons/userProfile.png')}/>
    </TouchableOpacity>
</View>
<View style={styles.boxDataView}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(3)}}>
  <Text style={styles.textBox}>Purchase</Text> 
  <Text style={styles.textBox}>Sales</Text>
  <Text style={styles.textBox}>Balance (7.5)</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(3)}}>
  <Text style={styles.textBox1}>1209.98 Ltr</Text> 
  <Text style={styles.textBox1}>300.08 Ltr</Text>
  <Text style={styles.textBox1red}>909.08 Ltr</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(3)}}>
  <Text style={styles.textBox}>Collection</Text> 
  <Text style={styles.textBox}>Payment</Text>
  <Text style={styles.textBox}>Cash in Hand</Text>
</View>

<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(3),marginBottom:wp(3)}}>
  <Text style={styles.textBox1}>23000.00</Text> 
  <Text style={styles.textBox1}>3400.00</Text>
  <Text style={styles.textBox1red}>19600.00</Text>
</View>
</View>
<View style={styles.adminView}>
  <Text>Admin report</Text>
</View>
   <View style={styles.textinput}>
    <View style={{flexDirection:'row'}}>
    <Image source = {require('../assets/icons/searchIcon.png')} style={{marginRight:wp(5),marginLeft:wp(2)}}/>
    <TextInput
    placeholder="Search Parties"
    />
    </View>
    <View style={{flexDirection:'row'}}>
      <Image source ={require('../assets/icons/orangeTie.png')}style={{marginHorizontal:wp(2)}}/>
      <Image source ={require('../assets/icons/pdfIcon.png')} style={{marginHorizontal:wp(2)}}/>

    </View>
   </View>
   <View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000'}}/>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      />

      <View style={{alignItems:'flex-end',marginBottom:hp(10),marginRight:wp(5)}}>
      <SmartDairyButton
                title={t("Add Party")}
                buttonStyle={{ height: wp(14), width: wp(40),borderRadius:wp(10),flexDirection:'row' }}
            image = {require('../assets/icons/addUser.png')}
            textStyle={{marginHorizontal:wp(2)}}
              />
      </View>
      <View style={styles.bottomTabView}> 
      <TouchableOpacity onPress={() => navigation.navigate('Receipt')} style={styles.bottomView}>
      <Image source = {require('../assets/icons/receipt.png')}/>
      <Text style={styles.bottomText}>Receipt</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Payment')} style={styles.bottomView}>
      <Image source = {require('../assets/icons/payment.png')}/>
      <Text style={styles.bottomText}>payment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Sales')} style={styles.bottomView}>
      <Image source = {require('../assets/icons/sales.png')}/>
      <Text style={styles.bottomText}>Sale</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Purchase')} style={styles.bottomView}>
      <Image source = {require('../assets/icons/purchase.png')}/>
      <Text style={styles.bottomText}>Purchase</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LeftRightDrawer;
const styles = StyleSheet.create({
  headerView:{
    flexDirection:'row',justifyContent:'space-between',marginTop:wp(2),marginHorizontal:wp(3)
  },
  leftHeaderView:{
    flexDirection:'row',alignItems:'center'
  },
headingText :{
  color:COLORS.MainHeaderColor,fontWeight:'600',fontSize:wp(5)
},
subHeadiingText:{
 color: '#002047',opacity:0.7
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
