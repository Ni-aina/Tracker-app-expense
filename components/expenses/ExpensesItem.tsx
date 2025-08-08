import { Colors } from "@/constants/Colors";
import { ExpensesType } from "@/types/Expenses";
import { StyleSheet, Text, View } from "react-native";

interface ExpensesItemProps {
    expense: ExpensesType
}

const ExpensesItem = ({ expense }: ExpensesItemProps) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.description, { color: Colors.primary}]}>{expense.description}</Text>
            <Text style={styles.amount}>${expense.amount.toFixed(2)}</Text>
            <Text style={styles.date}>{expense.date.toLocaleDateString()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#f9f9f9",
        borderRadius: 5
    },
    description: {
        fontSize: 16,
        fontWeight: "bold"
    },
    amount: {
        fontSize: 14,
        color: "#333"
    },
    date: {
        fontSize: 12,
        color: "#666"
    }
});

export default ExpensesItem;
