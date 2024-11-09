import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 190,
        backgroundColor: '#9500F6',
        borderRadius: 20,
        elevation: 5,
        marginBottom: 20,
        padding: 20,
        justifyContent: 'space-between'

    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },


    cardText: {
        color: '#fff',
        fontSize: 24,
        lineHeight: 36,
        fontWeight: '600'
    },
})