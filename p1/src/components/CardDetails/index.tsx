import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Wallet from '../../../assets/Wallet.png';

export const CardDetails = () => {
    return (
        <View style={styles.cardDetails} >
            <View style={styles.cardDetailsHeader}>
                <Text style={styles.cardDetailsHeaderText} > Saldo disponível </Text>
                < Image source={Wallet} />
            </View>
            < Text style={styles.cardDetailsText} > R$150000,00 </Text>
        </View>

    );
}