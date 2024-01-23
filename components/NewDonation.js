import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { TextInput } from "react-native-paper";

const NewDonation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.newDonation}>
      <Image
        style={styles.signalIcon}
        contentFit="cover"
        source={require("../assets/signal.png")}
      />
      <Image
        style={[styles.batteryIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/battery.png")}
      />
      <Image
        style={[styles.wifiIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/wifi1.png")}
      />
      <TextInput style={[styles.foodDetails, styles.submit1Typo]}>
        Food Details:
      </TextInput>
      <View style={[styles.rectangleParent, styles.rectangleParentLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.quantity, styles.quantityLayout]}>Quantity</Text>
      </View>
      <Text style={[styles.utensilsRequired, styles.utensilsRequiredPosition]}>
        Utensils Required ?
      </Text>
      <View
        style={[styles.newDonationChild, styles.utensilsRequiredPosition]}
      />
      <Text style={[styles.itemName, styles.itemNamePosition]}>Item Name</Text>
      <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.timeOfPreparation, styles.quantityLayout]}>
          Time Of preparation
        </Text>
      </View>
      <View
        style={[styles.rectangleContainer, styles.utensilsRequiredPosition]}
      >
        <View style={styles.groupInner} />
        <Text style={styles.address}>Address</Text>
      </View>
      <Pressable
        style={styles.newDonationItem}
        onPress={() => navigation.navigate("YourDonations")}
      />
      <Pressable
        style={styles.submit}
        onPress={() => navigation.navigate("YourDonations")}
      >
        <Text style={[styles.submit1, styles.submit1Typo]}>Submit</Text>
      </Pressable>
      <View style={[styles.groupParent, styles.itemNamePosition]}>
        <View style={[styles.yesParent, styles.parentPosition]}>
          <Text style={[styles.yes, styles.amTypo]}>Yes</Text>
          <Image
            style={[styles.ellipseIcon, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
        <View style={[styles.noParent, styles.parentPosition]}>
          <Text style={[styles.yes, styles.amTypo]}>No</Text>
          <Image
            style={[styles.ellipseIcon, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-11.png")}
          />
        </View>
      </View>
      <View style={[styles.newDonationInner, styles.rectangleParentLayout]} />
      <Text style={[styles.am, styles.amTypo]}>09:45 AM</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  submit1Typo: {
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  rectangleParentLayout: {
    height: 51,
    position: "absolute",
  },
  childLayout: {
    height: 40,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    width: 250,
  },
  quantityLayout: {
    height: 41,
    width: 145,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
  },
  utensilsRequiredPosition: {
    left: 55,
    position: "absolute",
  },
  itemNamePosition: {
    left: 88,
    position: "absolute",
  },
  rectanglePosition: {
    left: 54,
    width: 250,
  },
  parentPosition: {
    height: 18,
    left: 0,
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    position: "absolute",
  },
  signalIcon: {
    marginTop: -383,
    marginLeft: 143,
    top: "50%",
    left: "50%",
    width: 12,
    height: 12,
    position: "absolute",
  },
  batteryIcon: {
    height: "1.25%",
    width: "5%",
    top: "2.38%",
    right: "12.5%",
    left: "82.5%",
    bottom: "96.38%",
    maxWidth: "100%",
    position: "absolute",
  },
  wifiIcon: {
    height: "1.38%",
    width: "4.17%",
    top: "2.25%",
    right: "20%",
    left: "75.83%",
    bottom: "96.38%",
    maxWidth: "100%",
    position: "absolute",
  },
  foodDetails: {
    top: 125,
    left: 45,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupChild: {
    left: 0,
    position: "absolute",
    top: 0,
  },
  quantity: {
    top: 10,
    fontFamily: FontFamily.poppinsThin,
    fontWeight: "100",
    left: 34,
    height: 41,
    position: "absolute",
  },
  rectangleParent: {
    top: 316,
    width: 250,
    left: 54,
  },
  utensilsRequired: {
    top: 511,
    fontFamily: FontFamily.poppinsRegular,
    height: 41,
    width: 145,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
  },
  newDonationChild: {
    top: 180,
    height: 40,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    width: 250,
  },
  itemName: {
    top: 190,
    fontFamily: FontFamily.poppinsThin,
    fontWeight: "100",
    fontSize: FontSize.size_smi,
    left: 88,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
  },
  timeOfPreparation: {
    top: 11,
    fontFamily: FontFamily.poppinsThin,
    fontWeight: "100",
    left: 34,
    height: 41,
    position: "absolute",
  },
  rectangleGroup: {
    top: 248,
    height: 52,
    width: 250,
    position: "absolute",
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    height: 106,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    left: 0,
    top: 0,
    width: 250,
    position: "absolute",
  },
  address: {
    top: 7,
    left: 15,
    height: 109,
    width: 145,
    fontFamily: FontFamily.poppinsThin,
    fontWeight: "100",
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  rectangleContainer: {
    top: 383,
    height: 116,
    width: 250,
  },
  newDonationItem: {
    top: 606,
    left: 49,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorPaleturquoise,
    width: 265,
    height: 55,
    position: "absolute",
  },
  submit1: {
    fontSize: FontSize.size_base,
  },
  submit: {
    left: 149,
    top: 622,
    position: "absolute",
  },
  yes: {
    left: 24,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    top: 0,
  },
  ellipseIcon: {
    top: 1,
    width: 15,
    height: 15,
  },
  yesParent: {
    width: 45,
    top: 0,
  },
  noParent: {
    top: 28,
    width: 40,
  },
  groupParent: {
    top: 543,
    height: 46,
    width: 45,
  },
  newDonationInner: {
    top: -22,
    left: -13,
    width: 249,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 51,
  },
  am: {
    top: 16,
    left: 16,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.headingHeading5_size,
  },
  rectanglePressable: {
    top: 737,
    left: 297,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro,
    width: 48,
    height: 48,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlyboldprofile: {
    left: "84.72%",
    top: "93.13%",
    right: "6.39%",
    bottom: "2.88%",
    width: "8.89%",
    height: "4%",
    position: "absolute",
  },
  newDonation: {
    borderRadius: Border.br_mini,
    width: 360,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default NewDonation;
