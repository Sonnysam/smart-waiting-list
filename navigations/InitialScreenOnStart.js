import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Login from "./../screens/Login";
import Signup from "./../screens/Signup";
import OnBoarding from "./../screens/Onboarding";
import GetStarted from "./../screens/GetStarted";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const InitialScreenOnStart = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UserDashboard"
        component={UserDashboard}
        options={{
          headerShown: false,
        }}
      />
  
    </Stack.Navigator>
  );
};

export const Dashboard = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="UserDashboard"
        component={UserDashboard}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export const UserDashboard = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 14,
          },

          tabBarIcon: (props) => (
            <FontAwesome name="dashboard" {...props} size={24} />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "black",
          tabBarLabelStyle: {
            fontSize: 14,
          },

          tabBarIcon: (props) => (
            <AntDesign {...props} name="profile" size={24} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
