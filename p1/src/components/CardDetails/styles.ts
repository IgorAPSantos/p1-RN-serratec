import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    cardDetails: {
        width: '100%',
        height: 120,
        backgroundColor: '#9500F6',
        borderRadius: 20,
        elevation: 5,
        padding: 20,
        justifyContent: 'space-between'
    },

    cardDetailsHeader: {
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    cardDetailsText: {
        color: '#fff',
        fontSize: 34,
        fontWeight: '600'
    },
    cardDetailsHeaderText: {
        color: '#fff'
    },
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
    }
})