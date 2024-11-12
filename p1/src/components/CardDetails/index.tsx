import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import Wallet from '../../assets/Wallet.png';
import { useState } from "react";

export const CardDetails = () => {
    const [balance] = useState(15000);
    const formatedBalance = balance.toFixed(2).replace('.', ',');
    return (
        <View style={styles.cardDetails} >
            <View style={styles.cardDetailsHeader}>
                <Text style={styles.cardDetailsHeaderText} >Saldo disponível</Text>
                < Image source={Wallet} />
            </View>
            < Text style={styles.cardDetailsText} >R${formatedBalance} </Text>
        </View>

    );
}