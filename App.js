const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import START01 from "./screens/START01";
import Property1WithTitles from "./components/Property1WithTitles";
import DescriptionText from "./components/DescriptionText";
import START02 from "./screens/START02";
import START03 from "./screens/START03";
import START04 from "./screens/START04";
import LoginPage from "./screens/LoginPage";
import ProfileReceivers from "./screens/ProfileReceivers";
import SignUp1 from "./screens/SignUp1";
import RestaurantLogin from "./screens/RestaurantLogin";
import StaffDashboard from "./screens/StaffDashboard";
import MapComponentUser from "./screens/MapComponentUser";
import DonatedListRecepients from "./screens/DonatedListRecepients";

import YourDonations from "./screens/YourDonations";
import ConfirmRequests from "./screens/ConfirmRequests";
import AvailableDonations from "./screens/AvailableDonations";
import NGOLogin from "./screens/NGOLogin";
import NewDonation1 from "./components/NewDonation1";
import YourRequest from "./screens/YourRequest";
import Profile from "./screens/Profile";
import NewDonation2 from "./screens/NewDonation2";
import DonatedFoodScreen  from "./screens/DonatedFoodScreen";
import ProfileEdit from "./screens/ProfileEdit";
import StaffLogin from "./screens/StaffLogin";
import StaffSignUp from "./screens/StaffSignUp"; 
import AllDonatedFoods from "./screens/AllDonatedFoods";
import AcceptDonationPage from "./screens/AcceptDonationPage";
import UserRequests from  "./screens/UserRequests";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "PortLligatSans-Regular": require("./assets/fonts/PortLligatSans-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Signika-Regular": require("./assets/fonts/Signika-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="START01"
              component={START01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="START02"
              component={START02}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="START03"
              component={START03}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="START04"
              component={START04}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="ProfileReceivers"
              component={ProfileReceivers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestaurantLogin"
              component={RestaurantLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourDonations"
              component={YourDonations}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="NewDonation2"
              component={NewDonation2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConfirmRequests"
              component={ConfirmRequests}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AvailableDonations"
              component={AvailableDonations}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NGOLogin"
              component={NGOLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="YourRequest"
              component={YourRequest}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="DonatedFoodScreen"
              component={DonatedFoodScreen}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="ProfileEdit"
              component={ProfileEdit}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="DonatedListRecepients"
              component={DonatedListRecepients}
              options={{ headerShown: false }}
            />

              <Stack.Screen
              name="StaffLogin"
              component={StaffLogin}
              options={{ headerShown: false }}
            />

              <Stack.Screen
              name="StaffSignUp"
              component={StaffSignUp}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="StaffDashboard"
              component={StaffDashboard}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="AllDonatedFoods"
              component={AllDonatedFoods}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="AcceptDonationPage"
              component={AcceptDonationPage}
              options={{ headerShown: false }}
            />

             <Stack.Screen
              name="UserRequests"
              component={UserRequests}
              options={{ headerShown: false }}
            />

            
             <Stack.Screen
              name="MapComponentUser"
              component={MapComponentUser}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
