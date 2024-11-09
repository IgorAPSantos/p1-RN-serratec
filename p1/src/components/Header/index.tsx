import { Image, View } from "react-native";
import { styles } from "./styles";
import logo from '../../../assets/logo.png';
import settings from '../../../assets/settings.png';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Image source={logo} />
            <Image source={settings} />
        </View>
    );
}