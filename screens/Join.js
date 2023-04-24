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
import { FontAwesome } from "@expo/vector-icons";

export default function Join() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");

  const GenerateCode = () => {
    const newCode = Math.floor(Math.random() * 1000000);
    setCode(newCode.toString());
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={tw`items-center`}>
          <Text style={tw`text-white text-2xl font-bold`}>Join a Queue</Text>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.appLogo}>
                <Text style={styles.appLogoText}>Smart Waiting List</Text>
              </View>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-gray-500 text-xl font-bold`}>
                  Enter Queue Code
                </Text>
              </View>
              <View style={tw`mt-3`}>
                <TextInput
                  style={tw`border-2 border-gray-300 rounded-md p-2`}
                  placeholder="Enter Queue Code"
                  placeholderTextColor={Colors.gray}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={code}
                  onChangeText={(text) => setCode(text)}
                />
                <View>
                  <Text style={tw`text-green-700 text-base font-bold mt-2`}>
                    {code.length < 6
                      ? "Code must be 6 digits"
                      : "Code is valid!"}
                  </Text>
                  <View style={tw`flex-row justify-between mt-2 items-center`}>
                    <Text style={tw`text-blue-500 text-xl font-bold`}>
                      Don't have one?
                    </Text>
                    <TouchableOpacity
                      style={tw`bg-blue-500 p-2 rounded-md`}
                      onPress={GenerateCode}
                    >
                      <Text style={tw`text-white text-base font-bold`}>
                        Generate Code
                      </Text>
                    </TouchableOpacity>
                    {/* {code ? "":()} */}
                  </View>

                  <View style={tw`flex items-center`}>
                    {code ? (
                      <Text style={tw`text-gray-500 text-2xl font-medium mt-2`}>
                        Queue Code
                      </Text>
                    ) : (
                      <Text
                        style={tw`text-gray-500 text-base font-medium mt-2`}
                      >
                        No queue code. Please generate one.
                      </Text>
                    )}
                    <Text style={tw`text-gray-500 text-6xl my-2 font-bold`}>
                      {code !== "" && (
                        <Text style={tw`text-orange-500`}>#{code}</Text>
                      )}
                    </Text>
                  </View>

                  {/* <View style={tw`flex-row justify-between items-center`}>
                    <View style={tw`justify-center items-center`}>
                      <FontAwesome name="users" size={45} color="gray" />
                      <Text>People in waiting</Text>
                    </View>
                    <View style={tw`justify-center items-center`}>
                      <Entypo name="clock" size={45} color="gray" />
                      <Text>Approx. Wait time</Text>
                    </View>
                  </View> */}
                  {code ? (
                    <View style={tw`mt-5`}>
                      <TouchableOpacity
                        style={tw`bg-blue-500 p-3 items-center rounded-md mt-2`}
                        onPress={() => {
                          // dispatch(AuthAction.login(email, password));
                        }}
                      >
                        <Text style={tw`text-white text-2xl font-bold`}>
                          Join Queue
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View>
                      <Text>{" "}</Text>
                    </View>
                  )}
                </View>
              </View>
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
    // justifyContent: "center",
  },
  main: {
    marginHorizontal: 15,
    marginTop: 55,
  },
  bottomSection: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: Colors.white,
    width: 350,
    height: 450,
    borderRadius: 10,
    padding: 20,
  },
  appLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  appLogoText: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
