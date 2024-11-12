import { TextInput, View, Text } from "react-native";
import { styles } from "./styles";
import Slider from "@react-native-community/slider";
import { useState } from "react";

export const SliderInput = () => {
    const [minSliderValue] = useState(100);
    const [maxSliderValue] = useState(10000);
    const [value, setValue] = useState(minSliderValue);

    const handleTextInputChange = (text: string) => {
        const numericValue = Number(text.replace('R$', ''));
        if (!isNaN(numericValue)) {
            setValue(numericValue)
        }
        if (numericValue > maxSliderValue) {
            setValue(maxSliderValue)
        }
    };

    return (
        <View style={styles.mainContainer} >
            <TextInput
                style={styles.limitInput}
                inputMode='numeric'
                value={`R$${value}`}
                onChangeText={handleTextInputChange}
            />
            <View style={styles.sliderContainer}>
                <View style={styles.sliderTextContainer}>
                    <Text style={styles.sliderText}>R${minSliderValue} </Text>
                    <Text style={styles.sliderText}> R${maxSliderValue}</Text>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={minSliderValue}
                    maximumValue={maxSliderValue}
                    minimumTrackTintColor="#black"
                    maximumTrackTintColor="#24B293"
                    thumbTintColor="#fff"
                    value={value}
                    onValueChange={(val) => setValue(parseInt(val.toFixed(0)))} // Atualiza o valor real ao terminar o deslize
                />
            </View>
        </View>
    )
}