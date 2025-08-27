import { Link } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'

const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
})