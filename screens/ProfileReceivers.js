import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import Property1WithTitles from "../components/Property1WithTitles";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
const ProfileReceivers = () => {

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
    <View style={styles.profile}>
      <View style={[styles.modelight, styles.modelightLayout]}>
        <View style={styles.homeIndicator} />
      </View>
      <Property1WithTitles
        pageTitle="Profile"
        iconImageUrl={require("../assets/component-21.png")}
        showComponent1Icon={false}
        showComponent2Icon={false}
        property1WithTitlesPosition="absolute"
        property1WithTitlesHeight="12.93%"
        property1WithTitlesWidth="100%"
        property1WithTitlesTop="1.11%"
        property1WithTitlesRight="0.53%"
        property1WithTitlesBottom="85.96%"
        property1WithTitlesLeft="-0.53%"
        rectangleViewBackgroundColor="#f0f4f3"
        dailyPracticeLeft="41.07%"
        dailyPracticeFontSize={18}
        dailyPracticeLetterSpacing={0.9}
        dailyPracticeFontWeight="700"
        dailyPracticeFontFamily="Montserrat-Bold"
      />
      <Text style={[styles.youthRedCross, styles.shareAppTypo]}>
       {userName} 
      </Text>
      <Text
        style={[styles.nonGovernmentalOrganization, styles.shareAppFlexBox]}
      >
        Non Governmental Organization
      </Text>
      <View style={[styles.profileChild, styles.profileChildLayout]} />
      <View style={[styles.profileItem, styles.profileChildLayout]} />
      <View style={[styles.profileInner, styles.profileChildLayout]} />
      <Image
        style={[styles.iconlyboldprofile, styles.iconlyboldstarLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile2.png")}
      />
      <View style={[styles.rectangleView, styles.profileChildLayout]} />
      <View style={[styles.profileChild1, styles.profileChildLayout]} />
      <Image
        style={[styles.iconlyboldsetting, styles.iconlyboldstarLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldsetting.png")}
      />
      <Image
        style={[styles.iconlyboldpaper, styles.iconlyboldstarLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldpaper.png")}
      />
      <Image
        style={[styles.iconlyboldlogout, styles.iconlyboldstarLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldlogout.png")}
      />
      <Image
        style={[styles.iconlyboldstar, styles.iconlyboldstarLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldstar.png")}
      />
     <Pressable onPress={() => navigation.navigate("ProfileEdit")}>
        <Text style={[styles.editProfile, styles.aboutTypo]}>Edit Profile</Text>
      </Pressable>
      <Text style={[styles.about, styles.aboutTypo]}>About</Text>
      <Text style={[styles.settings, styles.aboutTypo]}>Settings</Text>
      <Text
        style={[styles.termsPrivacy, styles.aboutTypo]}
      >{`Terms & Privacy Policy`}</Text>
      <Text style={[styles.logOut, styles.aboutTypo]}>Log Out</Text>
        <Pressable onPress={() => navigation.navigate("ProfileEdit")}>
      <Image
        style={[styles.iconlylightarrowRight2, styles.iconlylightarrowLayout]}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--right-21.png")}
      />
      </Pressable>
      <Image
        style={[styles.iconlylightarrowRight3, styles.iconlylightarrowLayout]}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--right-21.png")}
      />
      <Image
        style={[styles.iconlylightarrowRight4, styles.iconlylightarrowLayout]}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--right-21.png")}
      />
      <Image
        style={[styles.iconlylightarrowRight5, styles.iconlylightarrowLayout]}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--right-21.png")}
      />
      <Image
        style={[styles.iconlylightarrowRight6, styles.iconlylightarrowLayout]}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--right-21.png")}
      />
      <View style={styles.lineView} />
      <Text style={[styles.shareApp, styles.shareAppFlexBox]}>Share App</Text>
      <View style={[styles.shareParent, styles.modelightLayout]}>
        <Image
          style={styles.shareIcon}
          contentFit="cover"
          source={require("../assets/share.png")}
        />
        <View style={[styles.addPhone, styles.addPhonePosition]} />
        <View style={[styles.homeAddress, styles.addPhonePosition]} />
      </View>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modelightLayout: {
    width: 375,
    position: "absolute",
  },
  shareAppTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  shareAppFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  profileChildLayout: {
    height: 48,
    backgroundColor: Color.colorLightcyan,
    borderRadius: Border.br_5xs,
    width: 48,
    left: 32,
    position: "absolute",
  },
  iconlyboldstarLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "11.2%",
    right: "81.33%",
    width: "7.47%",
    height: "3.45%",
    position: "absolute",
    overflow: "hidden",
  },
  aboutTypo: {
    color: Color.colorDimgray,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mid,
    left: 96,
    textAlign: "left",
    fontFamily: FontFamily.signikaRegular,
    position: "absolute",
  },
  iconlylightarrowLayout: {
    height: 24,
    width: 24,
    left: 321,
    position: "absolute",
  },
  addPhonePosition: {
    left: 333,
    width: 42,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.bordersBackgroundsBlackBackground,
    width: 134,
    height: 5,
    position: "absolute",
  },
  modelight: {
    top: 778,
    height: 34,
    display: "none",
    left: 0,
    width: 375,
  },
  youthRedCross: {
    top: 273,
    left: 42,
    fontSize: 25,
    letterSpacing: 1.3,
    color: "#272727",
    textAlign: "center",
    position: "absolute",
  },
  nonGovernmentalOrganization: {
    top: 323,
    left: 76,
    fontSize: FontSize.size_base,
    letterSpacing: 0.8,
    color: "#a1a1a1",
    fontFamily: FontFamily.signikaRegular,
    textAlign: "left",
  },
  profileChild: {
    top: 593,
  },
  profileItem: {
    top: 657,
  },
  profileInner: {
    top: 385,
  },
  iconlyboldprofile: {
    top: "48.65%",
    bottom: "47.91%",
  },
  rectangleView: {
    top: 449,
  },
  profileChild1: {
    top: 513,
  },
  iconlyboldsetting: {
    top: "64.41%",
    bottom: "32.14%",
  },
  iconlyboldpaper: {
    top: "74.26%",
    bottom: "22.29%",
  },
  iconlyboldlogout: {
    top: "82.14%",
    bottom: "14.41%",
  },
  iconlyboldstar: {
    top: "56.53%",
    bottom: "40.02%",
  },
  editProfile: {
    top: 398,
    width: 90,
  },
  about: {
    top: 462,
    width: 48,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mid,
    left: 96,
  },
  settings: {
    top: 526,
    width: 68,
  },
  termsPrivacy: {
    top: 606,
    width: 181,
  },
  logOut: {
    top: 670,
    width: 63,
  },
  iconlylightarrowRight2: {
    top: 397,
  },
  iconlylightarrowRight3: {
    top: 461,
  },
  iconlylightarrowRight4: {
    top: 525,
  },
  iconlylightarrowRight5: {
    top: 605,
  },
  iconlylightarrowRight6: {
    top: 669,
  },
  lineView: {
    top: 577,
    borderStyle: "solid",
    borderColor: "#f7f7f7",
    borderTopWidth: 1,
    width: 314,
    height: 1,
    left: 32,
    position: "absolute",
  },
  shareApp: {
    top: 753,
    left: 263,
    fontSize: FontSize.size_sm,
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  shareIcon: {
    top: 272,
    height: 28,
    width: 42,
    left: 0,
    position: "absolute",
  },
  addPhone: {
    top: 57,
    height: 85,
  },
  homeAddress: {
    top: 0,
    height: 28,
  },
  shareParent: {
    top: 477,
    left: 222,
    height: 300,
  },
  image3Icon: {
    top: 114,
    left: 115,
    borderRadius: 500,
    width: 139,
    height: 137,
    position: "absolute",
  },
  profile: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhitesmoke_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ProfileReceivers;
