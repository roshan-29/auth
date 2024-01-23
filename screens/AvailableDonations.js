import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import YouthRedCrossVecSection from "../components/YouthRedCrossVecSection";
import YouthRedCrossVecSection1 from "../components/YouthRedCrossVecSection1";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AvailableDonations = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.availableDonations}>
      <Image
        style={[styles.signalIcon, styles.signalIconPosition]}
        contentFit="cover"
        source={require("../assets/signal1.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/battery1.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wifi2.png")}
      />
      <Text
        style={[styles.donationsRequests, styles.amTypo]}
      >{`Donations Requests
`}</Text>
      <View style={styles.availableDonationsChild} />
      <Text style={[styles.am, styles.amTypo]}>09:45 AM</Text>
      <YouthRedCrossVecSection
        onGroupPressablePress={() => navigation.navigate("ConfirmRequests")}
      />
      <YouthRedCrossVecSection
        propTop={544}
        onGroupPressablePress={() => navigation.navigate("ConfirmRequests")}
      />
      <YouthRedCrossVecSection1 />
      <Pressable
        style={styles.availableDonationsItem}
        onPress={() => navigation.navigate("Profile")}
      />
      <Pressable
        style={styles.iconlyboldprofile}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldprofile1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  signalIconPosition: {
    left: "50%",
    top: "50%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  amTypo: {
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  signalIcon: {
    marginTop: -383,
    marginLeft: 149,
    width: 12,
    height: 13,
    position: "absolute",
  },
  batteryIcon: {
    height: "1.38%",
    width: "5%",
    top: "2.38%",
    right: "10.83%",
    left: "84.17%",
    bottom: "96.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  wifiIcon: {
    height: "1.5%",
    width: "4.17%",
    top: "2.25%",
    right: "18.33%",
    left: "77.5%",
    bottom: "96.25%",
    maxWidth: "100%",
    position: "absolute",
  },
  donationsRequests: {
    marginTop: -309,
    marginLeft: -91,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    left: "50%",
    top: "50%",
  },
  availableDonationsChild: {
    top: -27,
    left: -16,
    width: 249,
    height: 62,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  am: {
    top: 15,
    left: 15,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
    width: 57,
    height: 20,
  },
  availableDonationsItem: {
    top: 739,
    left: 293,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro,
    width: 48,
    height: 48,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  iconlyboldprofile: {
    left: "83.61%",
    top: "93.38%",
    right: "7.5%",
    bottom: "2.63%",
    width: "8.89%",
    height: "4%",
    position: "absolute",
  },
  availableDonations: {
    borderRadius: Border.br_mini,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default AvailableDonations;
