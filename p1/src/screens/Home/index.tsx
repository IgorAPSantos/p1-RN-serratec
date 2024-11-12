import { Text, View } from 'react-native';
import { styles } from './styles';
import { OptionsList } from '../../components/OptionsList';
import { Card } from '../../components/Card';
import { CardDetails } from '../../components/CardDetails';
import { Header } from '../../components/Header';

export default function Home() {
    return (
        <View style={styles.container} >
            <View style={styles.content}>
                <Header />
                <Card />
                <CardDetails />
            </View>
            <Text style={styles.containerText}>Do que você precisa?</Text>
            <OptionsList />
        </View >
    );
}

