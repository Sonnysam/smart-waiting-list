import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import tw from "twrnc";
import { auth, db } from "../firebase/firebase";
import { AuthAction } from "../store/actions/AuthAction";
import Colors from "../constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { data } from "../data/data";
import { Feather } from "@expo/vector-icons";

export default function List() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <Text style={tw`text-black text-2xl font-bold`}>Virtual Queue</Text>
          </View>
          <View style={tw`flex-row justify-center items-center`}>
            <MaterialIcons name="notifications-on" size={24} color="black" />
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
        </View>

        <View style={tw`flex mt-5 bg-white p-4 rounded-md shadow-lg`}>
          <View style={tw`flex-row justify-around items-center`}>
            <View style={tw`justify-center items-center`}>
              <FontAwesome name="users" size={45} color="gray" />
              <Text>People in waiting</Text>
              <Text
                style={tw`bg-blue-200 p-1 text-base font-semibold rounded-md mt-2`}
              >
                56
              </Text>
            </View>
            <View style={tw`justify-center items-center`}>
              <Entypo name="clock" size={45} color="gray" />
              <Text>Approx. Wait time</Text>
              <Text
                style={tw`bg-red-200 p-1 text-base font-semibold rounded-md mt-2`}
              >
                23mins
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={tw`text-gray-300 text-sm font-semibold mt-5 mb-2`}>
            Consulting room
          </Text>
          <View style={tw`flex-row items-center`}>
            <Image
              style={tw`w-10 h-10 rounded-full`}
              source={require("../assets/images/user.png")}
            />
            <Text style={tw`text-black text-base font-semibold ml-3`}>
              Samuel Agbenyo
            </Text>
          </View>
          <View style={tw`flex-row justify-between items-center mt-5`}>
            <View>
              <Text style={tw`text-gray-300 text-sm font-semibold`}>
                In queue
              </Text>
            </View>
            <View style={tw`flex-row justify-center items-center`}>
              <Text>
                <Feather name="search" size={15} color="blue" />
              </Text>
            </View>
          </View>

          <FlatList
            data={data}
            // keyExtractor={(item) => item.id}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={tw`flex-row items-center my-2`}>
                <Image style={tw`w-10 h-10 rounded-full`} source={item.image} />
                <Text style={tw`text-black text-base font-semibold ml-3`}>
                  {item.name}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={tw`bg-blue-500 p-4 rounded-md mt-5`}>
            <Text
              style={tw`
            text-white text-center text-base font-semibold
          `}
            >
              Logout
            </Text>
          </TouchableOpacity>
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
  bottom: {
    justifyContent: "flex-end",
    marginTop: 20,
  },
});
