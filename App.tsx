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

const App = () => {
  const Stack = createNativeStackNavigator();

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
    </View>
  );
};

export default App;
