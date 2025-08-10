import Icons from "@/components/ui/Icons";
import { Colors } from "@/constants/Colors";
import { ScreenHistoryContext } from "@/context/screenHistory";
import { PathName } from "@/types/PathName";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs, usePathname } from "expo-router";
import { useContext, useEffect } from "react";
import { StyleSheet } from "react-native";

const SreensLayout = () => {
    const screenHistory = useContext(ScreenHistoryContext);
    const lastTab = screenHistory?.lastTab || "index";
    const setLastTab = screenHistory?.setLastTab;
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== "/manageExpense" && setLastTab) {
            setLastTab(pathname.slice(1) as PathName);
        }
    }, [pathname]);

    return (
        <Tabs
            screenOptions={({ navigation }) => ({
                tabBarLabelStyle: {
                    marginTop: 5
                },
                tabBarStyle: {
                    backgroundColor: Colors.primary,
                    bottom: 40,
                    margin: 10,
                    height: 80,
                    borderRadius: 20
                },
                tabBarIconStyle: {
                    marginTop: 8
                },
                headerStyle: {
                    backgroundColor: Colors.primary
                },
                headerTitleStyle: {
                    color: "white"
                },
                tabBarActiveTintColor: Colors.active,
                tabBarInactiveTintColor: "white",
                headerRight: () => <Icons
                    name="add"
                    size={30}
                    color="white"
                    onPress={() => navigation.navigate("manageExpense")}
                />
            })}
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
                name="recentExpenses"
                options={{
                    title: "Recent Expenses",
                    tabBarIcon: ({ focused }) => <MaterialIcons name="history"
                        style={[styles.icons, focused ? { color: Colors.active } : null]}
                    />
                }}
            />
            <Tabs.Screen
                name="manageExpense"
                options={({ navigation }) => ({
                    title: "Manage Expense",
                    tabBarIcon: ({ focused }) => <MaterialIcons name="store"
                        style={[styles.icons, focused ? { color: Colors.active } : null]}
                    />,
                    headerLeft: () => <Icons
                        name="arrow-back"
                        size={30}
                        color="white"
                        onPress={() => navigation.navigate(lastTab)}
                    />
                })}
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