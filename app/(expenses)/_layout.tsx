import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

const SreensLayout = () => {

    return (
        <Tabs
            screenOptions={{
                tabBarLabelStyle: {
                    marginTop: 10
                },
                tabBarStyle: {
                    backgroundColor: Colors.primary,
                    bottom: 40,
                    margin: 10,
                    height: 80,
                    borderRadius: 20
                },
                headerStyle: {
                    backgroundColor: Colors.primary
                },
                headerTitleStyle: {
                    color: "white"
                },
                tabBarActiveTintColor: Colors.active,
                tabBarInactiveTintColor: "white"
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "All expenses",
                    tabBarIcon: ({ focused }) => <MaterialIcons name="list"
                        style={[styles.icons, focused ? { color: Colors.active } : null]}
                    />
                }}
            />
            <Tabs.Screen
                name="manageExpense"
                options={{
                    title: "Manage Expense",
                    tabBarIcon: ({ focused }) => <MaterialIcons name="store"
                        style={[styles.icons, focused ? { color: Colors.active } : null]}
                    />
                }}
            />
            <Tabs.Screen
                name="recentExpenses"
                options={{
                    title: "Recent Expenses",
                    tabBarIcon: ({ focused }) => <MaterialIcons name="history"
                        style={[styles.icons, focused ? { color: Colors.active } : null]}
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
        color: "white"
    }
})