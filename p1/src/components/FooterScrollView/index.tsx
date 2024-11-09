import { Image, ScrollView, Text, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react";

import pix from '../../../assets/pix.png';
import boleto from '../../../assets/boleto.png';
import dinheiro from '../../../assets/dinheiro.png';


export const FooterScrollView = () => {

    const [scrollViewData] = useState([
        {
            id: 1,
            title: 'Fazer um Pix',
            icon: pix,
        },
        {
            id: 2,
            title: 'Pagar um Boleto',
            icon: boleto,
        },
        {
            id: 3,
            title: 'Fazer um Depósito',
            icon: dinheiro,
        },
        {
            id: 4,
            title: 'Fazer um Pix',
            icon: pix,
        },
        {
            id: 5,
            title: 'Pagar um Boleto',
            icon: boleto,
        },
        {
            id: 6,
            title: 'Fazer um Depósito',
            icon: dinheiro,
        },
    ])

    return (
        <ScrollView
            style={styles.footerScrollView}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {scrollViewData.map(({ id, title, icon }) => (
                <View key={id} style={styles.footerCard} >
                    <Image source={icon} />
                    <Text style={styles.footerCardText}>{title}</Text>
                </View>
            ))}
        </ScrollView>
    )
}