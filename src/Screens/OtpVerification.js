import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import SmartDairyButton from '../Components/SmartButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomHeader from '../Components/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import TextInputField from '../Components/TextInputField';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import COLORS from '../config/Constant'
import { CodeField, useBlurOnFulfill, useClearByFocusCell,Cursor } from 'react-native-confirmation-code-field';
import Api from '../config/Api';

const OtpVerification = ({route}) => {
const userData = route.params;
  const navigation = useNavigation();
  const CELL_COUNT = 6;


  const [value, setValue] = useState('');
  console.log('sdf',userData?.mobileNumber)
  const [verifiedEmail, setVerifiedEmail] = useState(false)
  const [phoneVerified, setPhoneVerified] = useState(false)
  const [confirmationCode, setConfirmationCode] = useState("")
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
      value,
      setValue,
  });


  const ConfirmOtp = () => {
    Api.call(`http://saylussapidev.bancplus.in/api/CustomerRegisterConfirmOTP?Mobile=${userData?.mobileNumber}&DeviceId=abc1234&COtp=${value}&OTPId=22`,'POST',null,true).then(res => {
      console.log('ressss',res)
    })
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader
        title='Phone Verification'
      />
            {/* <ScrollView contentContainerStyle={{flex:1,justifyContent:'space-around',}}> */}
            <KeyboardAwareScrollView contentContainerStyle={{flex:1,justifyContent:'space-between',}}>



              <View style={styles.container}>
                  <Text style={styles.headlineText}>OTP Verification</Text>
                  <Text style={styles.text1}>An authentication code has been sent to</Text>
                  <Text style={styles.text1}>(91) {userData?.mobileNumber}</Text>
              </View>
              <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />
            <View style={styles.container2}>
                <Text style={styles.text2}>I didn't receive code. <Text style={{color:COLORS.blue,fontWeight:'700'}}>Resend Code</Text></Text>
            <Text style={styles.text3}>1:20 Sec left</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop:wp(5)}}>
                <Text style={styles.changeNumText}>Change Mobile Number</Text>
            </TouchableOpacity>
            </View>
      <View style={{alignItems:'center',marginBottom:wp(10) }}>
        <SmartDairyButton
          title='Verify Now'

          onPress={() => ConfirmOtp()
            // navigation.navigate('CreateDairy')
          }
        />
      </View>
      </KeyboardAwareScrollView>
      {/* </ScrollView> */}
    </SafeAreaView>
  )
};

export default OtpVerification;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',marginTop:hp(10)
    },
    headlineText:{
fontWeight:'700',
fontSize:24
  },
  text1:{
    color:COLORS.gray,fontSize:16,marginTop:wp(2)
  },
  text2:{
    fontSize:17
  },
  container2:{
    alignItems:'center'
  },
  text3:{
    fontSize:17,marginTop:wp(2),fontWeight:'500'
  },
  changeNumText:{
    color:COLORS.blue,fontWeight:'600',fontSize:16
  },
  codeFieldRoot: {
    color: 'white', justifyContent:'space-evenly'
},
cell: {
    width: 50,
    lineHeight: 55,
    fontSize: 25,
    borderWidth: 1,
    borderColor: 'white',
    textAlign: 'center',
    backgroundColor: "#F4F5F7",
    color: 'black',
    height: 60,shadowOpacity:wp(0.1),shadowOffset:{height:1,width:2},borderRadius:wp(2),elevation:6
},




})