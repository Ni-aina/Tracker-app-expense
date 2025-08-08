import { Colors } from "@/constants/Colors";
import { ExpensesType } from "@/types/Expenses";
import { FlatList, Text } from "react-native";
import ExpensesItem from "./ExpensesItem";

interface ExpensesListProps {
    expenses: ExpensesType[];
}

const ExpensesList = ({ expenses }: ExpensesListProps) => {
    return (
        <FlatList
            data={expenses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ExpensesItem expense={item} />
            )}
            ListEmptyComponent={<Text style={{ fontSize: 22, color: Colors.primary }}>No expenses found.</Text>}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
    )
}
 
export default ExpensesList;