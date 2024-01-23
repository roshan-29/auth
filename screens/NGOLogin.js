import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";
import { useEffect, useState } from "react";

import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
const NGOLogin = () => {
  const [userName, setUserName] = useState(""); // State to hold the user's name
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch user data from Firestore
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          // Assuming you have a field named 'name' in your user document
          const name = userData.name; // Replace 'name' with the actual field name

          // Set the user's name in the state
          setUserName(name);
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData(); // Invoke the function when the component mounts
  }, []);


  return (
    <View style={[styles.ngoLogin, styles.ngoLoginLayout]}>
      <Image
        style={[styles.ngoLoginChild, styles.signalIconPosition]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Text style={styles.welcomeBackThagam}>{`Welcome Back  ${userName} `}</Text>
      <Pressable
        style={[styles.ngoLoginItem, styles.ngoShadowBox]}
        onPress={() => navigation.navigate("DonatedListRecepients")}
      />
      <Pressable
        style={[styles.ngoLoginInner, styles.ngoShadowBox]}
        onPress={() => navigation.navigate("DonatedListRecepients")}
      />
      <Pressable
        style={styles.donationRequests}
        onPress={() => navigation.navigate("NewDonation1")}
      >
        <Text style={styles.donationRequests1}>Request Donation </Text>
      </Pressable>
      <Pressable
        style={styles.requestHistory}
        onPress={() => navigation.navigate("YourRequest")}
      >
        <Text style={styles.donationRequests1}>Request History</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.am, styles.amTypo]}>09:45 AM</Text>
      <View style={[styles.ngoLoginChild1, styles.ngoLoginChild1Layout]} />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Pressable
        style={[styles.iconlyboldprofile, styles.iconlyboldprofileLayout]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/iconlyboldprofile1.png")}
        />
      </Pressable>
      <View style={[styles.yourRequests, styles.ngoLoginLayout]}>
        <Image
          style={[styles.signalIcon, styles.signalIconPosition]}
          contentFit="cover"
          source={require("../assets/signal.png")}
        />
        <Image
          style={[styles.batteryIcon, styles.batteryIconPosition]}
          contentFit="cover"
          source={require("../assets/battery.png")}
        />
        <Image
          style={[styles.wifiIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Text style={[styles.yourRequests1, styles.liveRequestTypo]}>
          Your Requests
        </Text>
        <Text style={[styles.liveRequest, styles.liveRequestTypo]}>
          Live Request
        </Text>
        <View style={[styles.yourRequestsChild, styles.rectangleViewLayout]} />
        <Text style={[styles.am1, styles.amTypo]}>09:45 AM</Text>
        <Pressable
          style={[styles.yourRequestsItem, styles.ngoLoginChild1Layout]}
          onPress={() => navigation.navigate("Profile")}
        />
        <Pressable
          style={[styles.iconlyboldprofile1, styles.batteryIconPosition]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/iconlyboldprofile1.png")}
          />
        </Pressable>
        <Image
          style={[styles.yourRequestsInner, styles.yourChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <View style={[styles.yourRequestsChild1, styles.yourChildShadowBox]} />
        <Text style={[styles.itemName, styles.itemPosition]}>{`Item Name
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
        <View style={[styles.yourRequestsChild2, styles.yourChildShadowBox]} />
        <Text style={[styles.itemName1, styles.itemPosition]}>{`Item Name
`}</Text>
        <Text
          style={[styles.quantity2001, styles.quantityTypo]}
        >{`Quantity : 200 Packets  
Status : Accepted
Date : 23/05/2002`}</Text>
        <Image
          style={[styles.yourRequestsChild3, styles.yourChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <View style={[styles.yourRequestsChild4, styles.yourChildShadowBox]} />
        <Text style={[styles.itemName2, styles.itemPosition]}>{`Item Name
`}</Text>
        <Text
          style={[styles.quantity2002, styles.quantityTypo]}
        >{`Quantity : 200 Packets  
Status : Not Accepted
Date : 23/05/2002`}</Text>
        <Image
          style={[styles.yourRequestsChild5, styles.yourChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <View style={[styles.yourRequestsChild6, styles.yourChildShadowBox]} />
        <Text style={[styles.itemName3, styles.itemPosition]}>{`Item Name
`}</Text>
        <Text
          style={[styles.quantity2003, styles.quantityTypo]}
        >{`Quantity : 200 Packets  
Status :  Not Accepted
Date : 23/05/2002`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ngoLoginLayout: {
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_mini,
  },
  signalIconPosition: {
    height: 12,
    left: "50%",
    top: "50%",
    marginTop: -380,
    position: "absolute",
  },
  ngoShadowBox: {
    height: 35,
    width: 205,
    borderWidth: 1,
    borderColor: Color.bordersBackgroundsBlackBackground,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_6xl,
    left: 82,
    position: "absolute",
  },
  rectangleViewLayout: {
    width: 249,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  amTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.headingHeading5_size,
    top: 17,
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  ngoLoginChild1Layout: {
    height: 48,
    width: 48,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  iconlyboldprofileLayout: {
    height: "4%",
    width: "8.89%",
  },
  batteryIconPosition: {
    left: "83.61%",
    position: "absolute",
  },
  iconLayout: {
    bottom: "96%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  liveRequestTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
    left: "50%",
    top: "50%",
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
    shadowColor: "rgba(0, 0, 0, 0.15)",
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_3xs,
    left: 15,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    position: "absolute",
  },
  itemPosition: {
    height: 54,
    width: 220,
    marginLeft: -106,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
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
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  ngoLoginChild: {
    marginLeft: 101,
    width: 62,
  },
  welcomeBackThagam: {
    top: 104,
    left: 78,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  ngoLoginItem: {
    top: 522,
  },
  ngoLoginInner: {
    top: 462,
  },
  donationRequests1: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
  },
  donationRequests: {
    left: 119,
    top: 469,
    position: "absolute",
  },
  requestHistory: {
    left: 127,
    top: 528,
    position: "absolute",
  },
  rectangleView: {
    top: -23,
    left: -4,
    height: 58,
  },
  am: {
    left: 15,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.headingHeading5_size,
    top: 17,
  },
  ngoLoginChild1: {
    top: 734,
    left: 291,
  },
  image2Icon: {
    top: 184,
    left: 56,
    width: 248,
    height: 232,
    position: "absolute",
    borderRadius: Border.br_mini,
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconlyboldprofile: {
    left: "83.06%",
    top: "92.75%",
    right: "8.06%",
    bottom: "3.25%",
    position: "absolute",
  },
  signalIcon: {
    marginLeft: 147,
    width: 12,
  },
  batteryIcon: {
    height: "1.25%",
    width: "5%",
    top: "2.75%",
    right: "11.39%",
    bottom: "96%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  wifiIcon: {
    height: "1.38%",
    width: "4.17%",
    top: "2.63%",
    right: "18.89%",
    left: "76.94%",
    position: "absolute",
  },
  yourRequests1: {
    marginTop: -120,
    marginLeft: -70,
  },
  liveRequest: {
    marginTop: -328,
    marginLeft: -58,
  },
  yourRequestsChild: {
    top: -27,
    left: 1,
    height: 51,
  },
  am1: {
    left: 16,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.headingHeading5_size,
    top: 17,
  },
  yourRequestsItem: {
    top: 740,
    left: 293,
  },
  iconlyboldprofile1: {
    top: "93.5%",
    right: "7.5%",
    bottom: "2.5%",
    height: "4%",
    width: "8.89%",
  },
  yourRequestsInner: {
    top: 147,
  },
  yourRequestsChild1: {
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
  yourRequestsChild2: {
    top: 313,
  },
  itemName1: {
    marginTop: -66,
  },
  quantity2001: {
    top: 358,
  },
  yourRequestsChild3: {
    top: 468,
  },
  yourRequestsChild4: {
    top: 443,
  },
  itemName2: {
    marginTop: 64,
  },
  quantity2002: {
    top: 488,
  },
  yourRequestsChild5: {
    top: 598,
  },
  yourRequestsChild6: {
    top: 573,
  },
  itemName3: {
    marginTop: 194,
  },
  quantity2003: {
    top: 618,
  },
  yourRequests: {
    top: 0,
    left: 800,
    width: 360,
    position: "absolute",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  ngoLogin: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 800,
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default NGOLogin;
