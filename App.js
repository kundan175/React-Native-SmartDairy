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
            initialRouteName="LanguageSelection"
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

export default App;
