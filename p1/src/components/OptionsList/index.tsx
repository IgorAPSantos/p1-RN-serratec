import { Image, Text, FlatList, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react";

import pix from '../../assets/pix.png';
import boleto from '../../assets/boleto.png';
import dinheiro from '../../assets/dinheiro.png';


export const OptionsList = () => {

    const [data] = useState([
        {
            id: '1',
            title: 'Fazer um Pix',
            icon: pix,
        },
        {
            id: '2',
            title: 'Pagar um Boleto',
            icon: boleto,
        },
        {
            id: '3',
            title: 'Fazer um Depósito',
            icon: dinheiro,
        },
        {
            id: '4',
            title: 'Fazer um Pix',
            icon: pix,
        },
        {
            id: '5',
            title: 'Pagar um Boleto',
            icon: boleto,
        },
        {
            id: '6',
            title: 'Fazer um Depósito',
            icon: dinheiro,
        },
    ])

    return (
        <FlatList
            style={styles.container}
            data={data}
            keyExtractor={data => data.id}
            horizontal
            renderItem={({ item }) => {
                return <View key={item.id} style={styles.card} >
                    <Image source={item.icon} />
                    <Text style={styles.cardText}>{item.title}</Text>
                </View>
            }}
        />
    )
}