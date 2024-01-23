import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const START04 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start04}>
      <Image
        style={styles.istockphoto1286361571170667aIcon}
        contentFit="cover"
        source={require("../assets/istockphoto1286361571170667a-1.png")}
      />
      <Text
        style={[styles.beTheChange, styles.beTheChangeTypo]}
      >{`Be the change you want to
see in this world`}</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <Pressable
          style={[styles.groupChild, styles.childPosition]}
          onPress={() => navigation.navigate("LoginPage")}
        />
        <Pressable
          style={styles.getStarted}
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text style={[styles.getStarted1, styles.beTheChangeTypo]}>
            Get Started
          </Text>
        </Pressable>
      </View>
      <View style={[styles.start04Child, styles.childPosition]} />
      <Image
        style={styles.start04Item}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Text style={styles.am}>09:45 AM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  beTheChangeTypo: {
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  groupChildLayout: {
    height: 55,
    width: 265,
  },
  childPosition: {
    left: 0,
    position: "absolute",
  },
  istockphoto1286361571170667aIcon: {
    top: 187,
    left: 26,
    borderRadius: Border.br_10xl,
    width: 315,
    height: 298,
    position: "absolute",
  },
  beTheChange: {
    top: 534,
    left: 82,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorPaleturquoise,
    height: 55,
    width: 265,
  },
  getStarted1: {
    fontSize: FontSize.size_base,
  },
  getStarted: {
    left: 84,
    top: 16,
    position: "absolute",
  },
  rectangleParent: {
    top: 635,
    left: 53,
    position: "absolute",
  },
  start04Child: {
    top: -22,
    width: 360,
    height: 58,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  start04Item: {
    marginTop: -382,
    marginLeft: 101,
    top: "50%",
    left: "50%",
    width: 62,
    height: 12,
    position: "absolute",
  },
  am: {
    top: 15,
    left: 16,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  start04: {
    borderRadius: Border.br_mini,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default START04;
