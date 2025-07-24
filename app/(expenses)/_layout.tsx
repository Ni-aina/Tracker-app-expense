import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

const SreensLayout = () => {

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    color: "#777777",
                    marginTop: 5
                },
                tabBarStyle: {
                    backgroundColor: "#ebe0e0ff",
                    position: "absolute",
                    bottom: 40,
                    margin: 20,
                    height: 75,
                    borderRadius: 80
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "All expenses",
                    tabBarIcon: ({ focused }) => <MaterialIcons name="list"
                        style={[styles.icons, focused ? { color: "#925301ff" } : null]}
                    />
                }}
            />
            <Tabs.Screen
                name="manageExpense"
                options={{
                    title: "Manage Expense",
                    tabBarIcon: ({ focused }) => <MaterialIcons name="store"
                        style={[styles.icons, focused ? { color: "#925301ff" } : null]}
                    />
                }}
            />
            <Tabs.Screen
                name="recentExpenses"
                options={{
                    title: "Recent Expenses",
                    tabBarIcon: ({ focused }) => <MaterialIcons name="history"
                        style={[styles.icons, focused ? { color: "#925301ff" } : null]}
                    />
                }}
            />
        </Tabs>
    )
}

export default SreensLayout;

const styles = StyleSheet.create({
    icons: {
        fontSize: 30,
        color: "#222222"
    }
})