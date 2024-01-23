import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const YouthRedCrossVecSection1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.ellipseParent}
      onPress={() => navigation.navigate("ConfirmRequests")}
    >
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={styles.groupItemShadowBox} />
      <Text
        style={[styles.youthRedCross, styles.youthTypo]}
      >{`Youth red Cross VEC
`}</Text>
      <Text style={[styles.weAreIn, styles.weAreInTypo]}>
        We are in need of 15 food packets in Thirumalaivoyil Location before
        1:30 PM
      </Text>
      <Text style={[styles.hoursAgo, styles.weAreInTypo]}>5 hours ago</Text>
      <View style={styles.ellipseGroup}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <View style={styles.groupItemShadowBox} />
        <Text
          style={[styles.youthRedCross1, styles.youthTypo]}
        >{`Youth red Cross VEC
`}</Text>
        <Text style={[styles.weAreIn, styles.weAreInTypo]}>
          We are in need of 15 food packets in Thirumalaivoyil Location before
          1:30 PM
        </Text>
        <Text style={[styles.hoursAgo, styles.weAreInTypo]}>5 hours ago</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  youthTypo: {
    height: 54,
    width: 220,
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    marginLeft: -105.5,
    position: "absolute",
  },
  weAreInTypo: {
    height: 66,
    width: 232,
    textAlign: "left",
    fontSize: FontSize.size_5xs,
    left: 97,
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    top: 25,
    left: 17,
    width: 59,
    height: 60,
    position: "absolute",
  },
  groupItemShadowBox: {
    height: 111,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    width: 329,
    position: "absolute",
  },
  youthRedCross: {
    marginTop: -116,
  },
  weAreIn: {
    top: 48,
  },
  hoursAgo: {
    top: 78,
  },
  youthRedCross1: {
    marginTop: -51,
  },
  ellipseGroup: {
    top: 130,
    height: 144,
    left: 0,
    width: 329,
    position: "absolute",
  },
  ellipseParent: {
    top: 284,
    left: 12,
    height: 274,
    width: 329,
    position: "absolute",
  },
});

export default YouthRedCrossVecSection1;
