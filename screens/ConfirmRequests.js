import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const ConfirmRequests = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.confirmRequests}>
      <Image
        style={styles.signalIcon}
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
        style={[styles.confirmRequests1, styles.youthRedCrossTypo]}
      >{`Confirm Requests
`}</Text>
      <View style={styles.confirmRequestsChild} />
      <Text style={[styles.am, styles.amTypo]}>09:45 AM</Text>
      <View style={[styles.confirmRequestsItem, styles.rectangleViewLayout]} />
      <Text
        style={[styles.youthRedCross, styles.youthRedCrossTypo]}
      >{`Youth red Cross VEC
`}</Text>
      <View
        style={[
          styles.confirmRequestsInner,
          styles.quantity15ContainerPosition,
        ]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.descriptionWeAre, styles.amTypo]}>{`Description:

         We are in need of 15 food packets in Thirumalaiv
-oyil Location before 2:30 PM`}</Text>
      <Text
        style={[styles.quantity15Container, styles.quantity15ContainerPosition]}
      >
        {`Quantity : 15
Location - Thirumulaivoyil
Need before - 2:30 pm
`}
      </Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Pressable
        style={styles.rectanglePressable}
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
      <Text style={[styles.confirm, styles.amTypo]}>CONFIRM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  youthRedCrossTypo: {
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  amTypo: {
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  rectangleViewLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  quantity15ContainerPosition: {
    left: 37,
    position: "absolute",
  },
  signalIcon: {
    marginTop: -383,
    marginLeft: 149,
    width: 12,
    height: 13,
    left: "50%",
    top: "50%",
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
  confirmRequests1: {
    marginTop: -309,
    marginLeft: -82,
    fontSize: FontSize.size_lg,
  },
  confirmRequestsChild: {
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
    width: 57,
    height: 20,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
    position: "absolute",
  },
  confirmRequestsItem: {
    top: 145,
    left: 13,
    backgroundColor: Color.colorSilver,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 335,
    height: 416,
  },
  youthRedCross: {
    marginTop: -129,
    marginLeft: -132,
    fontSize: 24,
    width: 266,
    height: 54,
  },
  confirmRequestsInner: {
    top: 450,
    borderRadius: 5,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    width: 284,
    height: 71,
  },
  rectangleView: {
    top: 619,
    left: 196,
    backgroundColor: Color.colorPaleturquoise,
    width: 116,
    height: 24,
  },
  descriptionWeAre: {
    top: 460,
    left: 46,
    fontSize: 10,
    position: "absolute",
  },
  quantity15Container: {
    top: 355,
    fontSize: FontSize.size_sm,
    width: 225,
    height: 64,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  ellipseIcon: {
    top: 169,
    left: 135,
    width: 86,
    height: 80,
    position: "absolute",
  },
  rectanglePressable: {
    top: 740,
    left: 302,
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
    left: "86.11%",
    top: "93.5%",
    right: "5%",
    bottom: "2.5%",
    width: "8.89%",
    height: "4%",
    position: "absolute",
  },
  confirm: {
    top: 622,
    left: 223,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
    position: "absolute",
  },
  confirmRequests: {
    borderRadius: Border.br_mini,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default ConfirmRequests;
