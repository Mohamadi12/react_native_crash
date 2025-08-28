import { Stack } from "expo-router";
import { Image, Pressable, Text } from "react-native";

function LogoTitle() {
  return (
    <Image
      source={require("../assets/images/expo_logo.png")}
      style={{ width: 30, height: 30 }}
    />
  );
}
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#6a51ae" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => (
          <Pressable onPress={() => alert("This is a button!")}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),
        headerTitle: (props) => <LogoTitle />,
        // headerLeft: () => (
        //   <Pressable onPress={() => alert("This is a button!")}>
        //     <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
        //   </Pressable>
        // ),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          title: "About",
        }}
      />
    </Stack>
  );
}
