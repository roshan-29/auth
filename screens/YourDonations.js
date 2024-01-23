import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const YourDonations = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.yourDonations}>
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
      <Text style={[styles.yourDonations1, styles.donationsTypo]}>
        Your Donations
      </Text>
      <Text style={[styles.liveDonations, styles.donationsTypo]}>
        Live Donations
      </Text>
      <View style={styles.yourDonationsChild} />
      <Text style={styles.am}>09:45 AM</Text>
      <Pressable
        style={styles.yourDonationsItem}
        onPress={() => navigation.navigate("Profile")}
      />
      <Pressable
        style={[styles.iconlyboldprofile, styles.batteryIconPosition]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyboldprofile1.png")}
        />
      </Pressable>
      <Image
        style={[styles.yourDonationsInner, styles.yourChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.rectangleView, styles.yourChildShadowBox]} />
      <Text style={[styles.itemName, styles.itemTypo]}>{`Item Name
`}</Text>
      <Text
        style={[styles.quantity200, styles.quantityTypo]}
      >{`Quantity : 200 Packets  
Time Of Preparation - 1:30 AM
Date : 23/05/2002`}</Text>
      <Image
        style={[styles.ellipseIcon, styles.yourChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.yourDonationsChild1, styles.yourChildShadowBox]} />
      <Text style={[styles.itemName1, styles.itemTypo]}>{`Item Name
`}</Text>
      <Text
        style={[styles.quantity2001, styles.quantityTypo]}
      >{`Quantity : 200 Packets  
Status : Accepted
Date : 23/05/2002`}</Text>
      <Image
        style={[styles.yourDonationsChild2, styles.yourChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.yourDonationsChild3, styles.yourChildShadowBox]} />
      <Text style={[styles.itemName2, styles.itemTypo]}>{`Item Name
`}</Text>
      <Text
        style={[styles.quantity2002, styles.quantityTypo]}
      >{`Quantity : 200 Packets  
Status : Not Accepted
Date : 23/05/2002`}</Text>
      <Image
        style={[styles.yourDonationsChild4, styles.yourChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <View style={[styles.yourDonationsChild5, styles.yourChildShadowBox]} />
      <Text style={[styles.itemName3, styles.itemTypo]}>{`Item Name
`}</Text>
      <Text
        style={[styles.quantity2003, styles.quantityTypo]}
      >{`Quantity : 200 Packets  
Status :  Not Accepted
Date : 23/05/2002`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  donationsTypo: {
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  batteryIconPosition: {
    left: "83.61%",
    position: "absolute",
  },
  yourChildLayout: {
    height: 60,
    width: 59,
    left: 32,
    position: "absolute",
  },
  yourChildShadowBox: {
    height: 111,
    width: 329,
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
    left: 15,
    position: "absolute",
  },
  itemTypo: {
    height: 54,
    width: 220,
    fontSize: FontSize.size_sm,
    marginLeft: -106,
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  quantityTypo: {
    height: 66,
    width: 232,
    fontSize: FontSize.size_5xs,
    left: 112,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  signalIcon: {
    marginTop: -380,
    marginLeft: 147,
    width: 12,
    height: 12,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  batteryIcon: {
    height: "1.25%",
    width: "5%",
    top: "2.75%",
    right: "11.39%",
    left: "83.61%",
    position: "absolute",
    bottom: "96%",
    maxWidth: "100%",
  },
  wifiIcon: {
    height: "1.38%",
    width: "4.17%",
    top: "2.63%",
    right: "18.89%",
    left: "76.94%",
    bottom: "96%",
    maxWidth: "100%",
    position: "absolute",
  },
  yourDonations1: {
    marginTop: -120,
    marginLeft: -75,
  },
  liveDonations: {
    marginTop: -328,
    marginLeft: -68,
  },
  yourDonationsChild: {
    top: -27,
    left: 1,
    width: 249,
    height: 51,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  am: {
    top: 17,
    left: 16,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  yourDonationsItem: {
    top: 740,
    left: 293,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro,
    width: 48,
    height: 48,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    width: "100%",
  },
  iconlyboldprofile: {
    top: "93.5%",
    right: "7.5%",
    bottom: "2.5%",
    width: "8.89%",
    height: "4%",
  },
  yourDonationsInner: {
    top: 147,
  },
  rectangleView: {
    top: 122,
  },
  itemName: {
    marginTop: -257,
  },
  quantity200: {
    top: 167,
  },
  ellipseIcon: {
    top: 338,
  },
  yourDonationsChild1: {
    top: 313,
  },
  itemName1: {
    marginTop: -66,
  },
  quantity2001: {
    top: 358,
  },
  yourDonationsChild2: {
    top: 468,
  },
  yourDonationsChild3: {
    top: 443,
  },
  itemName2: {
    marginTop: 64,
  },
  quantity2002: {
    top: 488,
  },
  yourDonationsChild4: {
    top: 598,
  },
  yourDonationsChild5: {
    top: 573,
  },
  itemName3: {
    marginTop: 194,
  },
  quantity2003: {
    top: 618,
  },
  yourDonations: {
    borderRadius: Border.br_mini,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default YourDonations;
