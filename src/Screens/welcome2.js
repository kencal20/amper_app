import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/welcome2.jpg";

export default function Welcome2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.wel_img} />

      <Text style={styles.header}>
        KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
      </Text>
      <Text style={styles.subheader}>
        Sign in or register with your Ampersand email
      </Text>
      <View style={styles.amper_dlink}>
        <TouchableOpacity
          style={styles.amper_signinlink}
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text style={styles.amper_signtxt}>Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.amper_registerlink}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.amper_signtxt}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wel_img: {
    width: null,
    height: 510,
    resizeMode: "cover",
  },
  header: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 20,
  },
  subheader: {
    fontSize: 20,
    fontWeight: "100",
    marginHorizontal: 10,
  },
  amper_dlink: {
    marginTop: 30,
    marginLeft: 90,
    marginHorizontal: 30,
  },
  amper_signinlink: {
    position: "absolute",
    top: 70,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  amper_registerlink: {
    position: "absolute",
    top: 70,
    borderBottomColor: "red",
    borderBottomWidth: 1,
    left: 170,
  },
  amper_signtxt: {
    fontSize: 20,
  },
});
