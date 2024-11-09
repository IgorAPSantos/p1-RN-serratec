import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import mastercard from '../../../assets/mastercard.png';

export const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <View />
                <Image source={mastercard} />
            </View>
            <Text style={styles.cardText}>Igor Pádua</Text>
        </View>
    );
}