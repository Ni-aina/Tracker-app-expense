import { StyleSheet, Text, View } from 'react-native';

const AllExpenses = ()=> {
  
  return (
   <View style={styles.container}>
      <Text>
        All expenses
      </Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default AllExpenses;