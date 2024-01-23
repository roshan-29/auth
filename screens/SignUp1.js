import * as React from "react";
import { Text, StyleSheet, View, Pressable ,TextInput,Alert } from "react-native";
import { RadioButton } from "react-native-paper";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import  { useState } from "react";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";


import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

 const SignUp1 = () => {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState("ngo"); // Default to "ngo"
  const navigation = useNavigation();

  const register = () => {
    if (name === "" || email === "" || password === "" || phone === "") {
      Alert.alert(
        "Invalid Details",
        "Please fill all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }

    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("user credential", userCredential);
      const user = userCredential._tokenResponse.email;
      const myUserUid = auth.currentUser.uid;

      if (userType === "ngo") {
        setDoc(doc(db, "users", `${myUserUid}`), {
         name:name,
          email: user,
          phone: phone,
        });
                navigation.replace("NGOLogin");

      } else if (userType === "restaurant") {
        setDoc(doc(db, "restaurants", `${myUserUid}`), {
        name:name,
          email: user,
          phone: phone,
        });
          navigation.replace("RestaurantLogin");
      }
    });
  };

  return (
    <View style={styles.signUp1}>
      <Text style={[styles.register, styles.submit1Typo]}>Register:</Text>
      <View style={[styles.signUp1Child, styles.signLayout]} />
      <View style={[styles.signUp1Item, styles.signPosition]} />
      <View style={[styles.signUp1Inner, styles.signLayout]} />

      <TextInput placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="black"
      style={[styles.emailId, styles.emailIdTypo]} />
      <View style={[styles.rectangleView, styles.signLayout]} />
      <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      <TextInput style={styles.name} placeholder="phone"
              value={name}
              onChangeText={(text) => setName(text)}
              placeholderTextColor="black"/>
      <TextInput placeholder="phone"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholderTextColor="black"
       style={[styles.phoneNumber, styles.emailIdTypo]} />
      <TextInput value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="black"
      
      style={[styles.password, styles.emailIdTypo]} />
      <View style={styles.signUp1Child1} />
      <Pressable
        style={styles.submit}
        onPress={register}
      >
        <Text style={[styles.submit1, styles.submit1Typo]}>Submit</Text>
      </Pressable>
     

      <View style={[styles.ngo, styles.ngoTypo]}>
        <RadioButton.Group onValueChange={(value) => setUserType(value)} value={userType}>
          <View style={styles.radioButton}>
            <RadioButton.Item label="NGO" value="ngo" />
          </View>
          <View style={styles.radioButton}>
            <RadioButton.Item label="Restaurant" value="restaurant" />
          </View>
        </RadioButton.Group>
      </View>

    
      <Pressable
        style={[styles.signInInsteadContainer, styles.signPosition]}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={[styles.signInInstead, styles.loginTypo]}>
          Sign in instead
        </Text>
      </Pressable>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <View style={styles.signUp1Child3} />
      <Text style={styles.am}>09:45 AM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  submit1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.bordersBackgroundsBlackBackground,
  },
  signLayout: {
    height: 40,
    width: 250,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_81xl,
  },
  signPosition: {
    left: 56,
    position: "absolute",
  },
  emailIdTypo: {
    height: 41,
    width: 145,
    fontFamily: FontFamily.poppinsThin,
    fontWeight: "100",
    fontSize: FontSize.size_smi,
    left: 82,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  loginTypo: {
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  ngoTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    left: 115,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 15,
    width: 15,
    left: 91,
    position: "absolute",
  },
  register: {
    top: 144,
    left: 45,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  signUp1Child: {
    top: 204,
    left: 55,
    width: 250,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  signUp1Item: {
    top: 267,
    height: 40,
    width: 250,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_81xl,
  },
  signUp1Inner: {
    top: 438,
    left: 55,
    width: 250,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  emailId: {
    top: 448,
  },
  rectangleView: {
    top: 502,
    left: 55,
    width: 250,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  login: {
    top: 597,
    left: 155,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.bordersBackgroundsBlackBackground,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  name: {
    top: 214,
    fontFamily: FontFamily.poppinsThin,
    fontWeight: "100",
    left: 82,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  phoneNumber: {
    top: 276,
  },
  password: {
    top: 512,
  },
  signUp1Child1: {
    top: 580,
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
    left: 150,
    top: 594,
    position: "absolute",
  },
  ngo: {
    top: 345,
  },
  restaurant: {
    top: 372,
  },
  ellipseIcon: {
    top: 346,
  },
  signUp1Child2: {
    top: 373,
  },
  signInInstead: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: "#0085ff",
  },
  signInInsteadContainer: {
    top: 673,
  },
  groupIcon: {
    marginTop: -380,
    marginLeft: 100,
    top: "50%",
    left: "50%",
    width: 62,
    height: 12,
    position: "absolute",
  },
  signUp1Child3: {
    top: 1851,
    left: -2000,
    width: 249,
    height: 58,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  am: {
    top: 18,
    left: 21,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  signUp1: {
    borderRadius: Border.br_mini,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default SignUp1;
