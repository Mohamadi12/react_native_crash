import { View, Text } from 'react-native'
import { Link } from 'expo-router';

const Index = () => {
return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about">About</Link>
    </View>
  );
}

export default Index