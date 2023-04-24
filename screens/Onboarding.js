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

const Done = ({ ...props }) => (
  <TouchableOpacity {...props} style={{ marginHorizontal: 20 }}>
    <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.white }}>
      Done
    </Text>
  </TouchableOpacity>
);

export default function OnBoarding({ navigation }) {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.backImage}>
      <Onboarding
        DoneButtonComponent={Done}
        onDone={() => navigation.push("GetStarted")}
        onSkip={() => navigation.push("GetStarted")}
        pages={[
          {
            backgroundColor: backgroundColor,
            image: <View style={styles.imageSpace}></View>,
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
            backgroundColor: backgroundColor,
            image: <View style={styles.imageSpace}></View>,
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
    </ImageBackground>
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
    marginTop: 20,
    marginHorizontal: 10,
  },
  titleText: {
    color: "#ffffff",
    fontSize: 50,
    textAlign: "center",
    fontWeight: "bold",
  },
  imageSpace: {
    height: "30%",
  },
});
