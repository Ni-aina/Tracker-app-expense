import { ExpensesType } from "@/types/Expenses";
import { StyleSheet, Text, View } from "react-native";

interface ExpensesSummaryProps {
    expenses: ExpensesType[],
    periodName: string
}

const ExpensesSummary = ({ expenses, periodName }: ExpensesSummaryProps) => {
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return ( 
        <View>
            <Text style={styles.text}>
                {periodName} Expenses Summary
            </Text>
            <Text style={[styles.text, { color: '#888888' }]}>
                Total Expenses: ${totalExpenses.toFixed(2)}
            </Text>
        </View>
    )
}
 
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#333333',
    }
});

export default ExpensesSummary;
