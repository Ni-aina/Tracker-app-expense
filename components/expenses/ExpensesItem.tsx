import { Colors } from "@/constants/Colors";
import { ExpensesType } from "@/types/Expenses";
import { formatDate } from "@/utils/formatDate";
import { Pressable, StyleSheet, Text } from "react-native";

interface ExpensesItemProps {
    expense: ExpensesType
}

const ExpensesItem = ({ expense: { description, amount, date } }: ExpensesItemProps) => {
    const expensePressHandler = () => {}

    return (
        <Pressable
            onPress={expensePressHandler}
            android_ripple={{ color: Colors.ripple }}
            style={({ pressed }) => [styles.container, pressed ? styles.pressed : null]}
        >
            <Text style={[styles.description, { color: Colors.primary}]}>{description}</Text>
            <Text style={styles.amount}>${amount.toFixed(2)}</Text>
            <Text style={styles.date}>{formatDate(date)}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: Colors.background,
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
    },
    pressed: {
        opacity: 0.75
    }
});

export default ExpensesItem;
