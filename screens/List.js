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
import { MaterialIcons } from "@expo/vector-icons";

export default function List() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <Text style={tw`text-black text-2xl font-bold`}>Virtual Queue</Text>
          </View>
          <View style={tw` flex-row justify-center items-center`}>
            <MaterialIcons name="notifications-on" size={24} color="black" />
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
        </View>

        <View style={tw`flex mt-5 bg-gray-200 p-4 rounded-md shadow-md`}>
          <View style={tw`flex-row justify-around items-center`}>
            <View style={tw`justify-center items-center`}>
              <FontAwesome name="users" size={45} color="gray" />
              <Text>People in waiting</Text>
              <Text style={tw`bg-blue-200 p-1 text-base font-semibold rounded-md mt-2`}>56</Text>
            </View>
            <View style={tw`justify-center items-center`}>
              <Entypo name="clock" size={45} color="gray" />
              <Text>Approx. Wait time</Text>
              <Text style={tw`bg-red-200 p-1 text-base font-semibold rounded-md mt-2`}>23mins</Text>
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
    backgroundColor: Colors.white,
  },
  main: {
    marginHorizontal: 15,
    marginTop: 25,
  },
});
