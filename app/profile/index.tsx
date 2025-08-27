import { Redirect } from "expo-router";
import { View, Text } from "react-native";

const Profile = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
