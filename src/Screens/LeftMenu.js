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


const LeftMenu = () => {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [value, setValue] = useState();
  const dispatch = useDispatch();


  const DATA = [
    {
      id:0,
     dairyName:'Dairy 1',
     location:'Jaipur, Rajasthan',
     image :require('../assets/icons/HomeIcon.png')
    },
    {
      id:1,
      dairyName:'Dairy 1',
      location:'Jaipur, Rajasthan',
      image :require('../assets/icons/HomeIcon.png')
    },
    {
      id:2,
      dairyName:'Dairy 1',
     location:'Jaipur, Rajasthan',
     image :require('../assets/icons/HomeIcon.png')
    },
  ];

  const renderItem = ({item}) => {
    return(
      <View style={{ paddingVertical:wp(2)
    }}>
        <View style={styles.listView}>
            <Image source={item?.image}/>
            <View style={{marginHorizontal:wp(3)}}>
      <Text style={styles.listText}>{item?.dairyName}</Text>
      <Text style={styles.listText}>{item?.location}</Text>
      </View>
      </View>
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
      <View style={{alignItems:'flex-end',paddingHorizontal:wp(4),marginBottom:wp(2)}}>
        <Image source={require('../assets/icons/grayCross.png')}/>
      </View>
<View style={styles.headerView}>
      
        <Text style={styles.headingText}>Dairy 1</Text>
        <Text style={styles.subHeadiingText}>Maharastra India, India</Text>


   
</View>
<View style={styles.bottomTabView}> 
      <TouchableOpacity  style={styles.bottomView}>
      <Image source = {require('../assets/icons/Edit.png')}/>
      <Text style={styles.bottomText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.bottomView}>
      <Image source = {require('../assets/icons/userParties.png')}/>
      <Text style={styles.bottomText}>Parties</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomView}>
      <Image source = {require('../assets/icons/items.png')}/>
      <Text style={styles.bottomText}>Items</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={styles.bottomView}>
      <Image source = {require('../assets/icons/report.png')}/>
      <Text style={styles.bottomText}>Reports</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.textinputView}>
    <TextInput
    placeholder="Search"
    />
    <Image source={require('../assets/icons/searchIcon.png')}/>
</View>
<Text style={{paddingHorizontal:wp(5),marginTop:wp(5),marginBottom:wp(3),fontSize:17}}>
    Select Dairy
</Text>
   <View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000'}}/>
      <FlatList
      data={DATA}
      renderItem={renderItem}
      />

      <View style={{alignItems:'center',marginBottom:wp(10)}}>
      <SmartDairyButton
                title={t("Add Dairy")}
                buttonStyle={{ height: wp(14), width: wp(45),borderRadius:wp(10),flexDirection:'row' }}
            image = {require('../assets/icons/addDairy.png')}
            textStyle={{marginHorizontal:wp(3)}}
              />
      </View>
  

    </SafeAreaView>
  );
};

export default LeftMenu;
const styles = StyleSheet.create({
  headerView:{
    justifyContent:'center',marginTop:wp(2),marginHorizontal:wp(3),alignItems:'center'
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
textinput:{
 marginHorizontal:wp(2),marginTop:wp(6),paddingVertical:wp(3),flexDirection:'row',justifyContent:'space-between'

},bottomText:{
  color:COLORS.MainHeaderColor,fontSize:15,fontWeight:'400',marginTop:wp(1)
},bottomTabView:{
  flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(10),marginTop:wp(10),alignItems:'center'
},
bottomView:{
  alignItems:'center'
},
textinputView:{
    padding:wp(3),borderWidth:wp(0.2),marginTop:wp(5),marginHorizontal:wp(5),borderColor:'gray',flexDirection:'row',justifyContent:'space-between'
  },
  listText:{
    marginHorizontal:wp(3),fontWeight:'600',fontSize:17
  },
  listView:{
    flexDirection:'row',alignItems:'center',marginHorizontal:wp(5),marginVertical:wp(4)
  }
});
