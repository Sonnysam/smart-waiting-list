import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { useState } from "react";
import tw from "twrnc";
import { auth, db } from "../firebase/firebase";
import { AuthAction } from "../store/actions/AuthAction";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // PASSWORD FUNTIONALITY
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  function getUserInfo(user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          dispatch({
            type: AuthAction.LOGIN,
            userToken: true,
            userData: user,
            userInfo: doc.data(),
          });
        } else {
          alert("No such User!");
        }
      })
      .catch((error) => {
        alert("Error getting document:", error);
      });
    setLoading(false);
  }

  const handleSignIn = async () => {
    setLoading(true);
    await auth
      .signInWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        getUserInfo(userCredentials.user);
        setLoading(false);
        // navigation.push("WelcomeUser");
        // navigation.push("DashboardU");
      })
      .catch((error) => {
        alert(error.message);
        setLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.appLogo}>
              <Text style={styles.appLogoText}>Smart Waiting List</Text>
            </View>
            <View style={styles.cardHeader}>
              <TouchableOpacity
                style={styles.cardHeaderSignup}
                onPress={() => navigation.push("Signup")}
              >
                <Text style={styles.cardHeaderTextSignup}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cardHeaderLogin} onPress={() => navigation.push("Login")}>
                <Text style={styles.cardHeaderTextLogin}>Login</Text>
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
                  onPress={() => navigation.push("Join")}
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
    // width: "100%",
    width: 350,
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
