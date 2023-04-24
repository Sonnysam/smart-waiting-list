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
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-gray-500 text-xl font-bold`}>
                  Enter Queue Code
                </Text>
                <TouchableOpacity
                  style={tw`bg-blue-500 p-2 rounded-md`}
                  onPress={GenerateCode}
                >
                  <Text style={tw`text-white text-base font-bold`}>
                    Generate Code
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={tw`mt-5`}>
                {/* <Text style={tw`text-gray-500 text-xl mb-2 font-bold`}>
                  Queue Code: {code !== '' && <Text style={tw`text-orange-500`}>{code}</Text>}
                </Text> */}
                <TextInput
                  style={tw`border-2 border-gray-300 rounded-md p-2`}
                  placeholder="Enter Queue Code"
                  placeholderTextColor={Colors.gray}
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={code}
                  onChangeText={(text) => setCode(text)}
                />
                <Text>{}</Text>
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
    height: 500,
    borderRadius: 10,
    padding: 20,
  },
});
