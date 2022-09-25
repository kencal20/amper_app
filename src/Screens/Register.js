import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import image from "../../assets/sign.jpg";

export default function Register({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Image source={image} style={styles.img} />
      <View style={styles.dinput}>
        <TextInput placeholder="Full Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Phone Number" style={styles.input} />
        <TextInput placeholder="Role" style={styles.input} />
        <TextInput placeholder="Twitter" style={styles.input} />
        <TextInput placeholder="Linkedin" style={styles.input} />
      </View>
      <TouchableOpacity style={styles.register_button}>
        <Text style={styles.register_buttontxt}>REGISTER</Text>
      </TouchableOpacity>
      <View style={styles.aRy_have}>
        <Text>Already have an account</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signin");
          }}
        >
          <Text style={styles.signin_txt}>Signin</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 300,
    width: null,
  },
  dinput: {
    marginVertical: 50,
    marginHorizontal: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccdcf",
    height: 40,
    marginVertical: 7,
  },

  register_button: {
    position: "absolute",
    top: 680,
    marginVertical: 10,
    marginHorizontal: 30,
    width: 200,
    backgroundColor: "#fc0330",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  register_buttontxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  aRy_have: {
    marginHorizontal: 30,
    position: "absolute",
    top: 750,
  },
  signin_txt: {
    position: "absolute",
    bottom: 1,
    left: 170,
    fontSize: 14,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
});
