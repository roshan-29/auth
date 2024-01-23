import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useEffect, useState } from "react";

import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
const RestaurantLogin = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState(""); // State to hold the user's name


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
    <View style={[styles.restaurantLogin, styles.iconLayout]}>
      <View style={[styles.restaurantLoginChild, styles.restaurantLayout]} />
      <Text style={styles.am}>09:45 AM</Text>
      <View style={[styles.restaurantLoginItem, styles.restaurantLayout]} />
      <Image
        style={styles.restaurantLoginInner}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Text
        style={[styles.welcomeBackSaravana, styles.makeADonationFlexBox]}
      >{`Welcome Back  ${userName} `} </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.restaurantChildShadowBox]}
        onPress={() => navigation.navigate("NewDonation2")}
      />
      <Pressable
        style={[styles.restaurantLoginChild1, styles.restaurantChildShadowBox]}
        onPress={() => navigation.navigate("AvailableDonations")}
      />
      <Pressable
        style={[styles.restaurantLoginChild2, styles.restaurantChildShadowBox]}
        onPress={() => navigation.navigate("YourDonations")}
      />
      <Pressable
        style={styles.makeADonationContainer}
        onPress={() => navigation.navigate("NewDonation2")}
      >
        <Text style={[styles.makeADonation, styles.makeADonationFlexBox]}>
          Make a Donation
        </Text>
      </Pressable>
      <Pressable
        style={styles.donationRequests}
        onPress={() => navigation.navigate("AvailableDonations")}
      >
        <Text style={[styles.makeADonation, styles.makeADonationFlexBox]}>
          Donation Requests
        </Text>
      </Pressable>
      <Pressable
        style={styles.yourDonations}
        onPress={() => navigation.navigate("YourDonations")}
      >
        <Text style={[styles.makeADonation, styles.makeADonationFlexBox]}>
          Your Donations
        </Text>
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-10.png")}
      />
      <View style={styles.rectangleView} />
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
      <Image
        style={[styles.image1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  restaurantLayout: {
    height: 58,
    width: 249,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  makeADonationFlexBox: {
    textAlign: "center",
    color: Color.bordersBackgroundsBlackBackground,
  },
  restaurantChildShadowBox: {
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
    left: 80,
    position: "absolute",
  },
  iconPosition: {
    top: 178,
    position: "absolute",
    borderRadius: Border.br_mini,
  },
  restaurantLoginChild: {
    top: -20,
    left: 0,
  },
  am: {
    top: 13,
    left: 16,
    fontSize: FontSize.headingHeading5_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  restaurantLoginItem: {
    top: -946,
    left: 800,
  },
  restaurantLoginInner: {
    marginTop: -384,
    marginLeft: 101,
    top: "50%",
    left: "50%",
    width: 62,
    height: 12,
    position: "absolute",
  },
  welcomeBackSaravana: {
    top: 94,
    left: 92,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    position: "absolute",
  },
  rectanglePressable: {
    top: 545,
  },
  restaurantLoginChild1: {
    top: 605,
  },
  restaurantLoginChild2: {
    top: 665,
  },
  makeADonation: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
  },
  makeADonationContainer: {
    left: 124,
    top: 552,
    position: "absolute",
  },
  donationRequests: {
    left: 115,
    top: 672,
    position: "absolute",
  },
  yourDonations: {
    left: 129,
    top: 612,
    position: "absolute",
  },
  rectangleIcon: {
    left: 64,
    width: 240,
    height: 325,
  },
  rectangleView: {
    top: 735,
    left: 296,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro,
    width: 48,
    height: 48,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconlyboldprofile: {
    left: "84.44%",
    top: "92.88%",
    right: "6.67%",
    bottom: "3.13%",
    width: "8.89%",
    height: "4%",
    position: "absolute",
  },
  image1Icon: {
    left: 62,
    width: 238,
    height: 326,
  },
  restaurantLogin: {
    flex: 1,
    height: 800,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_mini,
    width: "100%",
  },
});

export default RestaurantLogin;
