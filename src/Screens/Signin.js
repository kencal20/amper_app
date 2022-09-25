import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import image from "../../assets/sign.jpg";

export default function Signin({ navigation }) {
  return (
    <ScrollView>
      <Image source={image} style={styles.img} />
      <View style={styles.dinput}>
        <TextInput placeholder="Email" style={styles.email_input} />
        <TextInput placeholder="Password" style={styles.password_input} />
      </View>
      <TouchableOpacity style={styles.signin_button}>
        <Text style={styles.signin_buttontxt}>SIGN IN</Text>
      </TouchableOpacity>
      <View style={styles.reset_row}>
        <Text style={styles.forgot}>Forgot Account details?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("");
          }}
          style={styles.reset_button}
        >
          <Text style={styles.reset_buttontxt}>Reset Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.register_row}>
        <Text style={styles.Dnt_have}>Don't have an account?</Text>
        <TouchableOpacity 
        style={styles.register_button}
        onPress={() => {
          navigation.navigate("Register");
        }}
         
        >
          <Text style={styles.register_buttontxt}>Register</Text>
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
    marginVertical: 70,
    marginHorizontal: 30,
  },
  email_input: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccdcf",
    height: 40,
  },
  password_input: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccdcf",
    marginTop: 20,
    height: 40,
  },
  signin_button: {
    marginHorizontal: 30,
    backgroundColor: "#fc0330",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  signin_buttontxt: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  reset_button: {
    position: "absolute",
    top: 30,
    left: 200,
  },
  forgot: {
    marginHorizontal: 30,
    marginVertical: 30,
  },

  reset_buttontxt: {
    borderBottomWidth: 1,
    borderBottomColor: "#fc0330",
  },
  reset_row: {
    marginVertical: 15,
  },
  reset_button: {
    position: "absolute",
    top: 30,
    left: 200,
  },
  // register_row: {
   
  // },
  Dnt_have: {
    marginHorizontal: 30,
    marginVertical: 30,
  },

  register_buttontxt: {
    position:'absolute',
    bottom:30,
    left:170,
    marginHorizontal: 30,
   borderBottomWidth: 1,
   borderBottomColor:'red'
    
  },
});
