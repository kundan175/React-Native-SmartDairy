import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/Components/NavigationService";
import LanguageSelection from "./src/Screens/LanguageSelection";
import SelectUser from "./src/Screens/SelectUser";
import RegisterUser from "./src/Screens/RegisterUser";
import OtpVerification from "./src/Screens/OtpVerification";
import CreateDairy from "./src/Screens/CreateDairy";
import SplashScreen from "react-native-splash-screen";
import CustomAlert from "./src/Components/CustomAlert";
import { useDispatch, useSelector } from "react-redux";
import { alertHideNow } from "./src/store/counterSlice";
import LeftRightDrawer from "./src/Screens/LeftRightDrawer";
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from "./src/Components/CustomDrawer";
import LeftDrawer from "./src/Screens/LeftDrawer";
import Receipt from "./src/Screens/Receipt";
import Payment from "./src/Screens/Payment";
import Sales from "./src/Screens/Sales";
import Purchase from "./src/Screens/Purchase";
import CustomizePrice from "./src/Screens/CustomizePrice";
import CreateParty from "./src/Screens/CreateParty";
import EditDairy from "./src/Screens/EditDairy";
import Party from "./src/Screens/Party";


const App = () => {
  const alertShow = useSelector((state) => state.smartDairy.alertVisible);
  const custom_title = useSelector((state) => state.smartDairy.alertTitle);
  const dispatch = useDispatch();

  const Stack = createNativeStackNavigator();
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="LeftRightDrawer"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="LanguageSelection"
              component={LanguageSelection}
            />
            <Stack.Screen name="SelectUser" component={SelectUser} />
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
            <Stack.Screen name="OtpVerification" component={OtpVerification} />

            <Stack.Screen name="CreateDairy" component={CreateDairy} />
            <Stack.Screen name="LeftRightDrawer" component={LeftRightDrawer} />
            <Stack.Screen name="MyDrawer" component={MyDrawer} />
            <Stack.Screen name="Receipt" component={Receipt} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Sales" component={Sales} />
            <Stack.Screen name="LeftDrawer" component={LeftDrawer} />
            <Stack.Screen name="Purchase" component={Purchase} />
            <Stack.Screen name="CustomizePrice" component={CustomizePrice} />
            <Stack.Screen name="CreateParty" component={CreateParty} />
            <Stack.Screen name="EditDairy" component={EditDairy} />
            <Stack.Screen name="Party" component={Party} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>



      <CustomAlert
        visible={alertShow}
        heading="Oops!"
        text={custom_title}
        title="Ok"
        onPress={() => {
          dispatch(alertHideNow());
        }}
      />
    </View>

    
  );
};
function MyDrawer({navigation}) {
const Drawer = createDrawerNavigator();

return (
  // <NavigationContainer ref={navigationRef}>
  <Drawer.Navigator screenOptions={{ swipeEnabled: false, headerShown: false, tabBarStyle: { display: "none" } }} 
    drawerContent={(props) =>
      <CustomDrawerContent {...props} navigation={navigation}/>}>
     <Drawer.Screen name="LeftRightDrawer" component={LeftRightDrawer} />
    {/* <Drawer.Screen name="LeftDrawer" component={LeftDrawer} /> */}
  </Drawer.Navigator>
  // </NavigationContainer>
);
    }
// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="CreateDairy" component={CreateDairy} />
//       <Drawer.Screen name="OtpVerification" component={OtpVerification} />
//     </Drawer.Navigator>
//   );
// }



export default App;
