import ExpensesList from '@/components/expenses/ExpensesList';
import ExpensesSummary from '@/components/expenses/ExpensesSummary';
import { DUMMY_EXPENSES } from '@/data/dummyExpenses';
import { StyleSheet, View } from 'react-native';

const RecentExpenses = () => {
  const today = new Date();
  const last30Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
  const recentExpenses = DUMMY_EXPENSES.filter(expense => {
    const expenseDate = new Date(expense.date);
    return expenseDate >= last30Days && expenseDate <= today;
  });

  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={recentExpenses}
        periodName="Last 30 Days"
      />
      <ExpensesList
        expenses={recentExpenses}
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

export default RecentExpenses;