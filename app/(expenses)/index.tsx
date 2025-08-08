import ExpensesList from '@/components/expenses/ExpensesList';
import ExpensesSummary from '@/components/expenses/ExpensesSummary';
import { DUMMY_EXPENSES } from '@/data/dummyExpenses';
import { StyleSheet, View } from 'react-native';

const AllExpenses = ()=> {
  
  return (
   <View style={styles.container}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        periodName="All expenses"
      />
      <ExpensesList
        expenses={DUMMY_EXPENSES}
      />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    width: '100%',
    padding: 16
  }
})

export default AllExpenses;