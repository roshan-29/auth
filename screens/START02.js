import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const START02 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.start02}>
      <View
        style={[
          styles.kateRemmerRzn4FznucyUnspla,
          styles.kateRemmerRzn4FznucyUnsplaLayout,
        ]}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("START03")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
      </Pressable>
      <View style={styles.start02Child} />
      <Text style={[styles.am, styles.amTypo]}>09:45 AM</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("START03")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.joelMunizQvzjg2pf4beUnsplasIcon,
          styles.kateRemmerRzn4FznucyUnsplaLayout,
        ]}
        contentFit="cover"
        source={require("../assets/joelmunizqvzjg2pf4beunsplash-1.png")}
      />
      <Text
        style={[styles.ifYouCant, styles.amTypo]}
      >{`If you cant feed a hundred people,
then just feed one. `}</Text>
      <Image
        style={styles.signalIcon}
        contentFit="cover"
        source={require("../assets/signal.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/battery.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/wifi1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  kateRemmerRzn4FznucyUnsplaLayout: {
    borderRadius: Border.br_10xl,
    position: "absolute",
  },
  amTypo: {
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconPosition: {
    bottom: "95.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kateRemmerRzn4FznucyUnspla: {
    top: 1168,
    left: -1177,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    width: 144,
    height: 148,
  },
  icon: {
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
  start02Child: {
    top: -27,
    left: -70,
    width: 249,
    height: 58,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  am: {
    top: 18,
    left: 13,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
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
  joelMunizQvzjg2pf4beUnsplasIcon: {
    top: 184,
    left: 22,
    width: 315,
    height: 298,
  },
  ifYouCant: {
    top: 544,
    left: 55,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  signalIcon: {
    marginTop: -379,
    marginLeft: 154,
    top: "50%",
    left: "50%",
    width: 12,
    height: 12,
    position: "absolute",
  },
  batteryIcon: {
    height: "1.25%",
    width: "5%",
    top: "2.88%",
    right: "9.44%",
    left: "85.56%",
  },
  wifiIcon: {
    height: "1.38%",
    width: "4.17%",
    top: "2.75%",
    right: "16.94%",
    left: "78.89%",
  },
  start02: {
    borderRadius: Border.br_mini,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default START02;
