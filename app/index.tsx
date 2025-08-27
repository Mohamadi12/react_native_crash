import { Link } from "expo-router";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
    </View>
  );
};

export default Home;
