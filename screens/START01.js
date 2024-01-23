import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const START01 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start01}>
      <Image
        style={styles.kateRemmerRzn4FznucyUnsplaIcon}
        contentFit="cover"
        source={require("../assets/kateremmerrzn4-fznucyunsplash-1.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("START02")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </Pressable>
      <View style={styles.start01Child} />
      <Text style={[styles.am, styles.amTypo]}>09:45 AM</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("START02")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Text style={[styles.youHaveTwo, styles.amTypo]}>{`You have two hands 
one to help yourself,
the second to help others.`}</Text>
      <Image
        style={styles.start01Item}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  amTypo: {
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  kateRemmerRzn4FznucyUnsplaIcon: {
    top: 185,
    left: 22,
    borderRadius: Border.br_10xl,
    width: 315,
    height: 298,
    position: "absolute",
  },
  wrapper: {
    left: 142,
    top: 632,
    width: 70,
    height: 70,
    position: "absolute",
  },
  start01Child: {
    top: -30,
    left: -41,
    width: 249,
    height: 58,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  am: {
    top: 14,
    left: 17,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "46.11%",
    top: "82%",
    right: "47.81%",
    bottom: "15.34%",
    width: "6.08%",
    height: "2.66%",
    position: "absolute",
  },
  youHaveTwo: {
    top: 522,
    left: 83,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    width: 194,
    height: 88,
  },
  start01Item: {
    marginTop: -384,
    marginLeft: 102,
    top: "50%",
    left: "50%",
    width: 62,
    height: 12,
    position: "absolute",
  },
  start01: {
    borderRadius: Border.br_mini,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default START01;
