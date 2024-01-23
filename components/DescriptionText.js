import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DescriptionText = () => {
  return <Text style={styles.description}>Description</Text>;
};

const styles = StyleSheet.create({
  description: {
    fontSize: FontSize.size_smi,
    fontWeight: "100",
    fontFamily: FontFamily.poppinsThin,
    color: Color.bordersBackgroundsBlackBackground,
    textAlign: "left",
  },
});

export default DescriptionText;
