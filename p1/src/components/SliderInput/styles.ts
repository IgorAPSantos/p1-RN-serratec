import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 50,
        justifyContent: 'center'
    },
    limitInput: {
        fontSize: 40,
        fontWeight: '700',
        color: '#FFF',
        textAlign: 'center'
    },
    sliderContainer: {
        flexDirection: 'column',
        width: '100%',

    },
    sliderTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    sliderText: {
        fontSize: 14,
        color: '#FFF'
    },
    slider: {
        width: '100%',
        backgroundColor: '#24B293',
        borderRadius: 50,
        height: 30
    }
})