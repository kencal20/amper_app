import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import logo from "../../assets/ampersand.png";
export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.amplogo} />

      <Text style={styles.amptxt}>Ampersand contacts</Text>

      <TouchableOpacity
        style={styles.amper_getstartedlink}
        onPress={() => {
          navigation.navigate("Welcome2");
        }}
      >
        <Text>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e9ed",
  },
  amplogo: {
    height: 70,
    width: 250,
    position: "absolute",
    top: 150,
  },
  amptxt: {
    fontSize: 30,
    fontWeight: "200",
    marginHorizontal: 60,
    textAlign: "center",
  },
  amper_getstartedlink: {
    position: "absolute",
    top: 670,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
});
