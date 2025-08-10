import { Colors } from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, View } from "react-native";

interface IconsProps {
    onPress?: () => void;
    name: React.ComponentProps<typeof MaterialIcons>["name"];
    size?: number;
    color?: string;
}

const Icons = ({name, size, color, onPress}: IconsProps) => {
    return (
        <Pressable
            style={({ pressed }) => pressed && styles.pressed}
            onPress={onPress}
        >
            <View
                style={styles.containerIcons}
            >
                <MaterialIcons
                    name={name}
                    size={size || 24}
                    color={color || Colors.text}
                />
            </View>
        </Pressable>
    )
}
 
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.70
    },
    containerIcons: {
        marginHorizontal: 10,
        marginVertical: 5
    }
})

export default Icons;
