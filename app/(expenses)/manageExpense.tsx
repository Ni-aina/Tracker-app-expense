import { Colors } from '@/constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

const ManageExpense = () => {

  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 16,
        color: Colors.primary,
        textTransform: "uppercase",
        fontWeight: "bold"
      }}>
        Manage your expenses here
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