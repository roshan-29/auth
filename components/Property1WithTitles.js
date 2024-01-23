import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1WithTitles = ({
  pageTitle,
  iconImageUrl,
  showComponent1Icon,
  showComponent2Icon,
  property1WithTitlesPosition,
  property1WithTitlesHeight,
  property1WithTitlesWidth,
  property1WithTitlesTop,
  property1WithTitlesRight,
  property1WithTitlesBottom,
  property1WithTitlesLeft,
  rectangleViewBackgroundColor,
  dailyPracticeLeft,
  dailyPracticeFontSize,
  dailyPracticeLetterSpacing,
  dailyPracticeFontWeight,
  dailyPracticeFontFamily,
}) => {
  const property1WithTitlesStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1WithTitlesPosition),
      ...getStyleValue("height", property1WithTitlesHeight),
      ...getStyleValue("width", property1WithTitlesWidth),
      ...getStyleValue("top", property1WithTitlesTop),
      ...getStyleValue("right", property1WithTitlesRight),
      ...getStyleValue("bottom", property1WithTitlesBottom),
      ...getStyleValue("left", property1WithTitlesLeft),
    };
  }, [
    property1WithTitlesPosition,
    property1WithTitlesHeight,
    property1WithTitlesWidth,
    property1WithTitlesTop,
    property1WithTitlesRight,
    property1WithTitlesBottom,
    property1WithTitlesLeft,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBackgroundColor]);

  const dailyPracticeStyle = useMemo(() => {
    return {
      ...getStyleValue("left", dailyPracticeLeft),
      ...getStyleValue("fontSize", dailyPracticeFontSize),
      ...getStyleValue("letterSpacing", dailyPracticeLetterSpacing),
      ...getStyleValue("fontWeight", dailyPracticeFontWeight),
      ...getStyleValue("fontFamily", dailyPracticeFontFamily),
    };
  }, [
    dailyPracticeLeft,
    dailyPracticeFontSize,
    dailyPracticeLetterSpacing,
    dailyPracticeFontWeight,
    dailyPracticeFontFamily,
  ]);

  return (
    <View style={[styles.property1withTitles, property1WithTitlesStyle]}>
      <View
        style={[
          styles.property1withTitlesChild,
          styles.borderPosition,
          rectangleViewStyle,
        ]}
      />
      <View
        style={[
          styles.barsStatusBarIphoneL,
          styles.barsStatusBarIphoneLPosition,
        ]}
      >
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
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
          <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
        </View>
      </View>
      <Text style={[styles.dailyPractice, styles.timeTypo, dailyPracticeStyle]}>
        {pageTitle}
      </Text>
      {showComponent1Icon && (
        <Image
          style={[styles.component1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/sizes-iconarrow-back-ios.png")}
        />
      )}
      {showComponent2Icon && (
        <Image
          style={[styles.component2Icon, styles.iconLayout]}
          contentFit="cover"
          source={iconImageUrl}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  barsStatusBarIphoneLPosition: {
    right: "0%",
    width: "100%",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.headingHeading5,
    position: "absolute",
  },
  iconLayout: {
    bottom: "22.86%",
    top: "54.29%",
    width: "6.4%",
    height: "22.86%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  property1withTitlesChild: {
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.bordersBackgroundsBlackBackground,
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
    color: Color.bordersBackgroundsBlackBackground,
    left: "0%",
    width: "100%",
    textAlign: "center",
    fontFamily: FontFamily.headingHeading5,
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
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  dailyPractice: {
    top: "58.1%",
    left: "38.13%",
    fontSize: FontSize.headingHeading5_size,
    letterSpacing: 0.6,
    lineHeight: 16,
    fontWeight: "500",
    color: Color.typographyHeadingMain,
  },
  component1Icon: {
    right: "87.2%",
    left: "6.4%",
  },
  component2Icon: {
    right: "8%",
    left: "85.6%",
  },
  property1withTitles: {
    width: 375,
    height: 105,
  },
});

export default Property1WithTitles;
