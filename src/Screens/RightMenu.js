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


const RightMenu = () => {
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
        <View style={{backgroundColor:'#F5F5F5'}}>
        <View style={styles.listView}>
            <Image source={item?.image}/>
            <View style={{marginHorizontal:wp(3)}}>
      <Text style={styles.listText}>{item?.dairyName}</Text>
      <Text style={styles.listText}>{item?.location}</Text>
      </View>
      </View>
      </View>
      {/* <View style={{width:wp(100),height:wp(0.2),backgroundColor:'#000000'}}/> */}

      </View>
    )
  }

  // const handle = () => {
  //   navigation.dispatch(DrawerActions.toggleDrawer())
  // }
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
      {/* <CustomHeader title="Smart Dairy" /> */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{alignItems:'flex-end',paddingHorizontal:wp(4),marginBottom:wp(4)}}>
        <Image source={require('../assets/icons/grayCross.png')}/>
      </TouchableOpacity>
<View style={styles.headerView}>
      <Image source = {require('../assets/icons/userProfile.png')} style={{height:wp(15),width:wp(15)}}/>
        <Text style={styles.headingText}>User Name</Text>
        <Text style={styles.subHeadiingText}>Owner</Text>
</View>


 
<View style={{marginTop:wp(10)}}>
<TouchableOpacity style={{ paddingVertical:wp(2)}}>
        <View style={{backgroundColor:'#F5F5F5'}}>
        <View style={styles.listView}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../assets/icons/languageChange.png')}/>
        <View style={{marginHorizontal:wp(3)}}>
      <Text style={styles.listText}>{t('Change Language')}</Text>
      </View>
      </View>
      <Image source={require('../assets/icons/downArrow.png')}/>
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical:wp(2)}}>
        <View style={{backgroundColor:'#F5F5F5'}}>
        <View style={styles.listView}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../assets/icons/addUserdark.png')}/>
        <View style={{marginHorizontal:wp(3)}}>
      <Text style={styles.listText}>{t('Manage staff')}</Text>
      </View>
      </View>
      <Image source={require('../assets/icons/rightArrow.png')}/>
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical:wp(2)}}>
        <View style={{backgroundColor:'#F5F5F5'}}>
        <View style={styles.listView}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../assets/icons/Notification.png')}/>
        <View style={{marginHorizontal:wp(3)}}>
      <Text style={styles.listText}>{t('Notifications')}</Text>
      </View>
      </View>
      <Image source={require('../assets/icons/downArrow.png')}/>
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical:wp(2)}}>
        <View style={{backgroundColor:'#F5F5F5'}}>
        <View style={styles.listView}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../assets/icons/subscription.png')}/>
         <View style={{marginHorizontal:wp(3)}}>
      <Text style={styles.listText}>{t('Subscription')}</Text>
      </View>
      </View>
      <Image source={require('../assets/icons/rightArrow.png')}/>
      </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical:wp(2)}}>
        <View style={{backgroundColor:'#F5F5F5'}}>
        <View style={styles.listView}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={require('../assets/icons/chatandSupport.png')}/>
        <View style={{marginHorizontal:wp(3)}}>
      <Text style={styles.listText}>{t('Chat & Support')}</Text>
      </View>
      </View>
      <Image source={require('../assets/icons/rightArrow.png')}/>
      </View>
      </View>
      </TouchableOpacity>
</View>

      <TouchableOpacity style={{flex:1,justifyContent:'flex-end'}}>
        <View style={{backgroundColor:'#F5F5F5', alignItems:'center',paddingVertical:wp(3),marginBottom:wp(5)}}>
      <Text style={{color:'red',fontSize:18,textAlign:'center'}}>{t('Delete Account')}</Text>
      </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default RightMenu;
const styles = StyleSheet.create({
  headerView:{
    justifyContent:'center',marginTop:wp(5),marginHorizontal:wp(3),alignItems:'center'
  },
  leftHeaderView:{
    flexDirection:'row',alignItems:'center'
  },
headingText :{
  color:COLORS.MainHeaderColor,fontWeight:'600',fontSize:wp(5),marginTop:wp(2),marginBottom:wp(1)
},
subHeadiingText:{
 color: '#002047',opacity:0.7,fontSize:12
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
    marginHorizontal:wp(3),fontWeight:'300',fontSize:18
  },
  listView:{
    flexDirection:'row',alignItems:'center',marginHorizontal:wp(10),marginVertical:wp(4),justifyContent:'space-between'
  }
});
