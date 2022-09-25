import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../Screens/welcome";
import Welcome2 from "../Screens/welcome2";
import Signin from "../Screens/Signin";
import Register from "../Screens/Register";

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Welcome2" component={Welcome2} />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
          
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
