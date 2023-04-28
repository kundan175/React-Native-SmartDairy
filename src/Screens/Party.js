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


const Party = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const dispatch = useDispatch();

const DATA = [
    {
        id:0,
        title:'ABC Company 1',
        Address: 'Address',
        addressAnswer : '#01 nagar road',
        mobile: 'Mobile No.',
        mobileNumber: '-9874563210'
    },
    {
        id:1,
        title:'ABC Company 1',
        Address: 'Address',
        addressAnswer : '#01 nagar road',
        mobile: 'Mobile No.',
        mobileNumber: '-9874563210'
    },
    {
        id:2,
        title:'ABC Company 1',
        Address: 'Address',
        addressAnswer : '#01 nagar road',
        mobile: 'Mobile No.',
        mobileNumber: '-9874563210'
    },
    {
        id:3,
        title:'ABC Company 1',
        Address: 'Address',
        addressAnswer : '#01 nagar road',
        mobile: 'Mobile No.',
        mobileNumber: '-9874563210'
    },
    {
        id:4,
        title:'ABC Company 1',
        Address: 'Address',
        addressAnswer : '#01 nagar road',
        mobile: 'Mobile No.',
        mobileNumber: '-9874563210'
    },
    {
        id:5,
        title:'ABC Company 1',
        Address: 'Address',
        addressAnswer : '#01 nagar road',
        mobile: 'Mobile No.',
        mobileNumber: '-9874563210'
    },
    {
        id:6,
        title:'ABC Company 1',
        Address: 'Address',
        addressAnswer : '#01 nagar road',
        mobile: 'Mobile No.',
        mobileNumber: '-9874563210'
    },
]

const renderItem = ({item}) => {
  return(
    <View style={styles.itemStyle}>
        <View style={{height:wp(13),width:wp(13),borderRadius:wp(10),backgroundColor:'white',justifyContent:'center',alignItems:'center',marginRight:wp(3)}}>
<Text style={{color:COLORS.MainHeaderColor,fontWeight:'600'}}>ABC</Text>
        </View>
<View>
        <Text style={styles.itemTitle}>{item.title}</Text>
<View style={{flexDirection:'row'}}>
    <Text style={styles.itemSubTitle}>{item.Address}</Text>
    <Text style={styles.itemSubTitle}>{item.addressAnswer}</Text>

</View>
<View style={{flexDirection:'row'}}>
    <Text style={styles.itemSubTitle}>{item?.mobile}</Text>
    <Text style={{fontWeight:'500',color:COLORS.MainHeaderColor,fontSize:14}}>{item.mobileNumber}</Text>

</View>
</View>
    
    </View>
     )

}


  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:COLORS.white,}}>
      {/* <CustomHeader title="Smart Dairy" /> */}
      
      <View style={styles.headerView}>
    <View style={styles.leftHeaderView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source = {require('../assets/icons/backArrow.png')}/>
      </TouchableOpacity>
        <View style={{marginLeft:wp(5)}}>
        <Text style={styles.headingText}>All Parties</Text>
        <Text style={styles.subHeadiingText}>Dairy Name</Text>
        </View>

    </View>
        <Image source = {require('../assets/icons/threeDots.png')}/>
</View>




<View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000',marginTop:wp(1)}}/>

<View style={styles.textinputView}>
    <TextInput
    placeholder="Search"
    />
    <Image source={require('../assets/icons/searchIcon.png')}/>
</View>
{/* <View style={{marginTop:wp(3)}}> */}
<FlatList
data={DATA}
renderItem={renderItem}
/>
{/* </View> */}
<View style={styles.buttonView}>
      <SmartDairyButton
                title={t("Add Party")}
                buttonStyle={styles.CustomButtonStyle}
            image = {require('../assets/icons/addUser.png')}
            textStyle={{marginHorizontal:wp(3),fontSize:17,fontWeight:'600'}}
              />
           
      </View>

    </SafeAreaView>
  );
};

export default Party;
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
itemStyle:{
  padding:wp(3),
  borderWidth:wp(0.2),
  marginHorizontal:wp(5),
  marginTop:wp(3),
  borderColor:'gray',
  borderRadius:wp(2),
  backgroundColor:'#F5FAFF',flexDirection:'row'
},
itemTitle:{
  color:COLORS.MainHeaderColor,fontSize:15,fontWeight:'600'
},
itemSubTitle:{
  color:COLORS.MainHeaderColor,fontSize:14
},
textinputView:{
  padding:wp(3),borderWidth:wp(0.2),marginTop:wp(5),marginHorizontal:wp(5),borderColor:'gray',flexDirection:'row',justifyContent:'space-between'
},
CustomButtonStyle:{
  height: wp(12), width: wp(40),borderRadius:wp(10),flexDirection:'row'
},
buttonView:{
  alignItems:'flex-end',marginRight:wp(10),marginTop:wp(4)
}
});
