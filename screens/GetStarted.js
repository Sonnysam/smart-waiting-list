import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import tw from "twrnc";

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/wait.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.benefits}>
        <Text style={{ color: Colors.white, fontSize: 20, fontWeight: "bold" }}>
          Benefits
        </Text>
        <View style={{ padding: 20 }}>
           <FlatList
          data={[
            { key: 'Save time by avoiding long lines and wait times' },
            { key: 'Manage your waitlist experience from your phones' },
            { key: 'Enjoy your free time by doing other things while waiting' },
          ]}
          renderItem={({ item }) => {
            return (
              <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 17, color: Colors.white }}>{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />
        </View>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={[styles.signup, tw`flex justify-center items-center`]}
          onPress={() => navigation.push("Login")}
        >
          <Text style={tw`text-[#0E75EF] font-bold text-xl`}>
            Get Started
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
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    marginHorizontal: 15,
  },
  imageContainer: {
    marginTop: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  benefits: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    width: "100%",
    height: 55,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    marginTop: 12,
    borderRadius: 25,
    paddingHorizontal: 10,
    fontSize: 17,
    backgroundColor: Colors.white,
  },
});
