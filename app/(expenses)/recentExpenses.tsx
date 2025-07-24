import { StyleSheet, Text, View } from 'react-native';

const RecentExpenses = ()=> {
  
  return (
   <View style={styles.container}>
      <Text>
        Recent expenses
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

export default RecentExpenses;