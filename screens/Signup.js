import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from "../store/actions/AuthAction";
import { auth, db } from "../firebase/firebase";
import { FontAwesome5 } from "@expo/vector-icons";
import Pick from "../constants/Pick";
import { Entypo } from "@expo/vector-icons";
import tw from "twrnc";

export default function Signup({ navigation }) {
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState(null);

  const { name, email, password, churchName, phoneNo, profilePhoto } =
    useSelector((state) => state.AuthReducer);

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const OpenWeb = () => {
    // Linking.openURL("https://ag-pay-web.netlify.app/");
    console.log("hello");
  };

  //IMAGE PICKER
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      dispatch({
        type: AuthAction.USERPROFILE,
        payload: { type: "profilePhoto", value: result.assets[0].uri },
      });
    }
  };

  const handleSignUp = async () => {
    // e.preventDefault();
    // verifying
    setLoading(true);
    await auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Signed up with", user.email);
        setLoading(false);
        db.collection("users")
          .doc(user.uid)
          .set({
            UserName: name,
            Email: email,
            Uid: user.uid,
            UserType: "user",
            SignUpDate: new Date().toUTCString(),
            PhoneNo: phoneNo,
            ChurchName: churchName,
            profilePhoto: profilePhoto,
          })
          .then(() => {
            alert("You've successfully created an account 🚀");
            navigation.push("Login");
          })
          .catch((error) => alert(error.message));
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <TouchableOpacity
                style={styles.cardHeaderSignup}
                onPress={() => navigation.push("Signup")}
              >
                <Text style={styles.cardHeaderTextSignup}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cardHeaderLogin}
                onPress={() => navigation.push("Login")}
              >
                <Text style={styles.cardHeaderTextLogin}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={tw`mx-auto items-center justify-center`}>
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  style={tw`w-24 h-24 rounded-full mx-auto mt-5 items-center justify-center`}
                />
              ) : (
                <Image
                  source={require("../assets/images/user.png")}
                  style={tw`w-24 h-24 rounded-full mx-auto mt-5 items-center justify-center`}
                />
              )}
              <TouchableOpacity onPress={pickImage} style={styles.btn}>
                <Text style={styles.add}>
                  {" "}
                  <FontAwesome
                    name="file-photo-o"
                    size={18}
                    color={Colors.primary}
                  />{" "}
                  Upload photo
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardBody}>
              <View style={styles.loginCont}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#000"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
                <View
                  style={[
                    styles.input,
                    tw`flex flex-row items-center justify-between`,
                  ]}
                >
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#000"
                    value={password}
                    // style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={secureTextEntry}
                    onChangeText={(text) => setPassword(text)}
                  />
                  <TouchableOpacity onPress={toggleSecureTextEntry}>
                    {secureTextEntry ? (
                      <Entypo name="eye" size={24} color="black" />
                    ) : (
                      <Entypo name="eye-with-line" size={24} color="black" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.cardForgot}>
              <Text style={tw`text-[#0E75EF] font-bold text-base mt-3`}>
                Forgot Password?
              </Text>
            </View>
            <View style={styles.cardFooter}>
              {loading ? (
                <ActivityIndicator size="large" color={Colors.primary} />
              ) : (
                <TouchableOpacity
                  style={tw`bg-[#0E75EF] w-3/4 py-2 rounded-full items-center`}
                  // onPress={handleSignIn}
                >
                  <Text style={tw`text-white text-lg`}>Login</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    marginHorizontal: 15,
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: Colors.white,
    width: "100%",
    height: 400,
    borderRadius: 10,
    padding: 20,
  },
  appLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appLogoText: {
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.primary,
  },
  cardHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  cardHeaderSignup: {
    backgroundColor: Colors.primary,
    width: 100,
    height: 35,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  cardHeaderLogin: {
    elevation: 10,
    backgroundColor: Colors.white,
    width: 100,
    height: 35,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  cardHeaderTextSignup: {
    color: Colors.white,
    fontSize: 16,
  },
  cardHeaderTextLogin: {
    color: Colors.primary,
    fontSize: 16,
  },
  cardBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardFooter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginCont: {
    width: "100%",
    justifyContent: "center",
    // marginVertical: 10,
    marginTop: 20,
  },
  input: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    marginVertical: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  cardForgot: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
