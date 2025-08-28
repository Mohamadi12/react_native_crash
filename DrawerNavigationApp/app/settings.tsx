import { View, Text, StyleSheet } from 'react-native'

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings page</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})