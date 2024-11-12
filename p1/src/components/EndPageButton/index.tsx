import { TouchableOpacity, View, Text } from "react-native"
import { styles } from "./styles"

interface EndPageButtonProps {
    title: string
}

export const EndPageButton = ({ title }: EndPageButtonProps) => {
    return (
        <View style={styles.container}>
            <View />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}