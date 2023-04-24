import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Colors from "../constants/Colors";

import Onboarding from "react-native-onboarding-swiper";
const image = require("../assets/images/background.png");
const topImage1 = require("../assets/images/people3.png");
const topImage2 = require("../assets/images/woman.webp");

const Done = ({ ...props }) => (
  <TouchableOpacity {...props} style={{ marginHorizontal: 20 }}>
    <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.white }}>
      Done
    </Text>
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
          image: (
            <View style={styles.imageSpace}>
              <Image source={topImage1} style={styles.topImage} />
            </View>
          ),
          title: (
            <View>
              <Text style={styles.titleText}>Welcome</Text>
            </View>
          ),
          subtitle: (
            <View style={styles.subTitle}>
              <Text style={styles.subTexts}>
                The smart waiting app that saves you time and the hassle. Join
                waitlist remotely and get notified when it’s your turn
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: Colors.primary,
          image: (
            <View style={{ ...styles.imageSpace, marginTop: "-24%" }}>
              <Image source={topImage2} style={styles.topImage2} />
            </View>
          ),
          title: (
            <View>
              <Text style={styles.titleText}>How it works</Text>
            </View>
          ),
          subtitle: (
            <View style={styles.subTitle}>
              <Text style={styles.subTexts}>
                Join the waitlist and receive a confirmation message. Get
                real-time updates and notifications on your place in line.
              </Text>
            </View>
          ),
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

const backgroundColor = "rgba(0,0,0,0)";
const styles = StyleSheet.create({
  backImage: {
    flex: 1,
  },
  subTexts: {
    color: "#e4e2e2",
    fontSize: 18,
    textAlign: "center",
  },
  subTitle: {
    marginTop: 30,
    marginHorizontal: 10,
  },
  titleText: {
    color: "#ffffff",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "-8%",
  },
  imageSpace: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
    marginTop: "-32%",
  },
  topImage: {
    width: "100%",
    height: 320,
  },
  topImage2: {
    width: "100%",
    height: 300,
  },
});
