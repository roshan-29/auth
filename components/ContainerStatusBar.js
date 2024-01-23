import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ContainerStatusBar = () => {
  return (
    <View style={[styles.barsStatusBarIphoneL, styles.timePosition]}>
      <View style={styles.battery}>
        <View style={[styles.border, styles.timePosition]} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap.png")}
        />
        <View style={styles.capacity} />
      </View>
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.cellularConnectionIcon}
        contentFit="cover"
        source={require("../assets/cellular-connection.png")}
      />
      <View style={styles.timeStyle}>
        <Text style={[styles.time, styles.timePosition]}>9:41</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    left: "0%",
    position: "absolute",
  },
  border: {
    height: "100%",
    width: "90.53%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.bordersBackgroundsBlackBackground,
    borderWidth: 1,
    opacity: 0.35,
    top: "0%",
    left: "0%",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.4,
    right: "0%",
    position: "absolute",
  },
  capacity: {
    height: "64.6%",
    width: "74.07%",
    top: "17.7%",
    right: "17.7%",
    bottom: "17.7%",
    left: "8.23%",
    borderRadius: 1,
    backgroundColor: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  battery: {
    height: "25.68%",
    width: "6.48%",
    top: "39.32%",
    right: "3.84%",
    bottom: "35%",
    left: "89.68%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -4.5,
    top: "50%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.headingHeading5,
    color: Color.bordersBackgroundsBlackBackground,
    textAlign: "center",
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "41.9%",
    bottom: "58.1%",
    right: "0%",
    top: "0%",
    left: "0%",
    width: "100%",
  },
});

export default ContainerStatusBar;
