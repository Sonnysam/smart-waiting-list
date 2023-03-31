import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Colors from "../constants/Colors";

import Onboarding from "react-native-onboarding-swiper";

const Done = ({ ...props }) => (
  <TouchableOpacity {...props} style={{ marginHorizontal: 20 }}>
    <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.white }}>Done</Text>
  </TouchableOpacity>
);

export default function OnBoarding({ navigation }) {
  return (
    <Onboarding
    DoneButtonComponent={Done}
    onDone={() => navigation.push("GetStarted")}
    onSkip={() => navigation.push("GetStarted")}
    pages={[
      {
        backgroundColor: Colors.primary,
        // fontSize: 10,
        image: (
          <Image
            source={require("../assets/images/people3.png")}
            style={{ width: 220, height: 245 }}
          />
        ),
        title: "Welcome",
        subtitle:
          "The smart waiting app that saves you time and the hassle. Join waitlist remotely and get notified when it’s your turn.",
      },
      {
        backgroundColor: Colors.primary,
        image: (
          <Image
            source={require("../assets/images/woman.webp")}
            style={{ width: 220, height: 245 }}
          />
        ),
        title: "How it Works",
        subtitle:
          " Join the waitlist and receive a confirmation message Get real-time updates and notifications on your place in line.",
      },
      // {
      //   backgroundColor: "#fff",
      //   image: (
      //     <Image
      //       source={require("../assets/online-pay.png")}
      //       style={{ width: 305, height: 245 }}
      //     />
      //   ),
      //   title: "Pay tithes & offerings online",
      //   subtitle: "Pay with ease with few clicks",
      // },
    ]}
  />
  );
}

const styles = StyleSheet.create({});
