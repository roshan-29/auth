import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const START03 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start03}>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("START04")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </Pressable>
      <Image
        style={styles.melanieLimNd3wung16foUnsplaIcon}
        contentFit="cover"
        source={require("../assets/melanielimnd3wung16founsplash-1.png")}
      />
      <Text
        style={[styles.givingIsNot, styles.amTypo]}
      >{`Giving is not just about
 making a donation, it is about
 making a difference.`}</Text>
      <View style={styles.start03Child} />
      <Text style={[styles.am, styles.amTypo]}>09:45 AM</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("START04")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={styles.start03Item}
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
  wrapper: {
    left: 142,
    top: 632,
    width: 70,
    height: 70,
    position: "absolute",
  },
  melanieLimNd3wung16foUnsplaIcon: {
    top: 185,
    left: 22,
    borderRadius: Border.br_10xl,
    width: 315,
    height: 298,
    position: "absolute",
  },
  givingIsNot: {
    top: 534,
    left: 71,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  start03Child: {
    top: -21,
    left: 0,
    width: 360,
    height: 58,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  am: {
    top: 18,
    left: 16,
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
  start03Item: {
    marginTop: -381,
    marginLeft: 100,
    top: "50%",
    left: "50%",
    width: 62,
    height: 12,
    position: "absolute",
  },
  start03: {
    borderRadius: Border.br_mini,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default START03;
