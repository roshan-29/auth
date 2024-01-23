import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput ,TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db} from "../firebase";
import { useEffect, useState } from "react";

import { doc, setDoc ,getDoc} from "firebase/firestore";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setLoading(false);
      if (authUser) {
        // Check user type based on Firestore collection
        const myUserUid = auth.currentUser.uid;
        const userSnapshot = getDoc(doc(db, "restaurants", myUserUid));

        userSnapshot
          .then((snapshot) => {
            if (snapshot.exists()) {
              // User is an NGO, navigate to NGO dashboard
              navigation.replace("RestaurantLogin");
            } else {
              // User is not in the "ngos" collection, assume it's a restaurant
              navigation.replace("NGOLogin");
            }
          })
          .catch((error) => {
            console.error("Error checking user type:", error.message);
          });
      }
    });

    return unsubscribe;
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential.user;
        console.log("user details", user);
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        Alert.alert("Error", "Login failed. Check your credentials.");
      });
  };
 
  return (
    <View style={styles.loginPage}>
      <Text style={[styles.signIn, styles.signTypo]}>Sign In:</Text>
      <View style={[styles.loginPageChild, styles.loginLayout]} />
      <View style={[styles.loginPageItem, styles.loginLayout]} />
     <Pressable
        style={[styles.loginPageInner, styles.loginLayout]}
       
      />
      <Pressable
        style={styles.login}
        onPress={login}
      >
        <Text style={styles.loginTypo}>LOGIN</Text>
      </Pressable>
      <Text style={[styles.login2, styles.login2Position]}>LOGIN</Text>
      <TextInput    placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor="black"
    style={[styles.username, styles.usernameTypo]} /> 

      <TextInput  value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="black"
      style={[styles.password, styles.usernameTypo]} /> 
      <Image
        style={[styles.ellipseIcon, styles.login2Position]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Text style={styles.or}>OR</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.loginPageChild1, styles.lineViewLayout]} />
      <Pressable
        style={[styles.rectanglePressable, styles.signInPosition]}
        onPress={() => navigation.navigate("SignUp1")}
      />
      <Pressable
        style={styles.signUp}
        onPress={() => navigation.navigate("SignUp1")}
      >
        <Text style={[styles.signUp1, styles.signTypo]}>Sign Up</Text>
      </Pressable>
 <Pressable   onPress={() => navigation.navigate("StaffLogin")}>
 
      <Text style={styles.forgotPassword}>STAFF lOGIN HERE </Text>
       </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.loginPageChild2, styles.rectangleViewLayout]} />
      <Text style={[styles.am, styles.signTypo]}>09:45 AM</Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signTypo: {
    color: Color.bordersBackgroundsBlackBackground,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  loginLayout: {
    height: 40,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  login2Position: {
    left: 155,
    position: "absolute",
  },
  usernameTypo: {
    fontFamily: FontFamily.poppinsThin,
    fontWeight: "100",
    left: 85,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  lineViewLayout: {
    height: 1,
    width: 125,
    borderTopWidth: 1,
    borderColor: Color.bordersBackgroundsBlackBackground,
    borderStyle: "solid",
    top: 486,
    position: "absolute",
  },
  signInPosition: {
    left: 45,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 58,
    width: 360,
    top: -29,
    position: "absolute",
    backgroundColor: Color.colorWhitesmoke_100,
  },
  signIn: {
    top: 164,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: 45,
    position: "absolute",
  },
  loginPageChild: {
    top: 215,
    width: 250,
    left: 55,
    height: 40,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_81xl,
  },
  loginPageItem: {
    top: 273,
    width: 250,
    left: 55,
    height: 40,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_81xl,
  },
  loginPageInner: {
    top: 374,
    left: 130,
    width: 100,
    height: 40,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    borderRadius: Border.br_81xl,
  },
  loginTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
  },
  login: {
    left: 160,
    top: 385,
    position: "absolute",
  },
  login2: {
    top: 597,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
  },
  username: {
    top: 225,
  },
  password: {
    top: 283,
  },
  ellipseIcon: {
    top: 461,
    width: 50,
    height: 50,
  },
  or: {
    top: 476,
    left: 170,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.bordersBackgroundsBlackBackground,
    position: "absolute",
  },
  lineView: {
    left: 31,
  },
  loginPageChild1: {
    left: 205,
  },
  rectanglePressable: {
    top: 579,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorPaleturquoise,
    width: 265,
    height: 55,
  },
  signUp1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  signUp: {
    left: 150,
    top: 593,
    position: "absolute",
  },
  forgotPassword: {
    top: 341,
    left: 142,
    fontSize: 11,
    fontFamily: FontFamily.portLligatSansRegular,
    color: "#23b8a6",
    textAlign: "left",
    position: "absolute",
  },
  rectangleView: {
    left: 0,
  },
  loginPageChild2: {
    left: 401,
  },
  am: {
    top: 15,
    left: 22,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    marginTop: -382,
    marginLeft: 94,
    top: "50%",
    left: "50%",
    width: 62,
    height: 12,
    position: "absolute",
  },
  loginPage: {
    borderRadius: Border.br_mini,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhitesmoke_100,
  },
});

export default LoginPage;