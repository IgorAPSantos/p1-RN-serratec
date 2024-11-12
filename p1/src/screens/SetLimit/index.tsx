import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './styles';
import Pencil from '../../../assets/Pencil.png';
import { SliderInput } from '../../components/SliderInput';
import { EndPageButton } from '../../components/EndPageButton';
export default function SetLimit() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Pencil} style={styles.headerIcon} />
                <Text style={styles.headerText}>Selecione</Text>
                <Text style={styles.headerText}>seu novo limite</Text>
            </View>
            <SliderInput />
            <EndPageButton title="Definir" />
        </View >
    );
}

