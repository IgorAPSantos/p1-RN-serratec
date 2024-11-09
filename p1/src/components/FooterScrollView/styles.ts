import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    footer: {
        paddingTop: 30,
        paddingLeft: 20
    },
    footerText: {
        color: '#fff',
        marginHorizontal: 20,
        paddingBottom: 30,
        fontWeight: '600',
        fontSize: 14

    },
    footerCard: {
        width: 100,
        height: 127,
        backgroundColor: '#9500F6',
        elevation: 5,
        borderRadius: 20,
        padding: 20,
        justifyContent: 'space-between',
        marginLeft: 10
    },
    footerCardText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 18
    },
    footerScrollView: {
        height: 400
    }
})