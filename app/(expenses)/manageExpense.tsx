import { StyleSheet, Text, View } from 'react-native';

const ManageExpense = ()=> {
  
  return (
   <View style={styles.container}>
      <Text>
        Manage expense
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

export default ManageExpense;