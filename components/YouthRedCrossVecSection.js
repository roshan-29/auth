import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const YouthRedCrossVecSection = ({ propTop, onGroupPressablePress }) => {
  const groupPressableStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <Pressable
      style={[
        styles.ellipseParent,
        styles.groupItemLayout,
        groupPressableStyle,
      ]}
      onPress={onGroupPressablePress}
    >
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.groupItem, styles.groupItemLayout]} />
      <Text style={styles.youthRedCross}>{`Youth red Cross VEC
`}</Text>
      <Text style={[styles.weAreIn, styles.weAreInTypo]}>
        We are in need of 15 food packets in Thirumalaivoyil Location before
        1:30 PM
      </Text>
      <Text style={[styles.hoursAgo, styles.weAreInTypo]}>5 hours ago</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupItemLayout: {
    width: 329,
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
  groupItem: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSilver,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 111,
  },
  youthRedCross: {
    marginTop: -51,
    marginLeft: -105.5,
    top: "50%",
    left: "50%",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    width: 220,
    height: 54,
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  weAreIn: {
    top: 48,
  },
  hoursAgo: {
    top: 78,
  },
  ellipseParent: {
    top: 156,
    left: 12,
    height: 144,
  },
});

export default YouthRedCrossVecSection;
