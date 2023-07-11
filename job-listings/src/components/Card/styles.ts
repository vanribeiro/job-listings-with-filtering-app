import { StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 24,
        marginTop: 20,
        marginBottom: 20,
        elevation: 4,
        borderRadius: 6,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 16,
        borderLeftWidth: 6
    },
    cardTitle: {
        flexDirection: 'row',
        marginVertical: 6,
        gap: 24,
        alignItems: 'center'
    },
    companyName: {
        fontSize: 15,
        color: 'hsl(180, 29%, 50%)',
    },
    role: {
        fontWeight: 'bold',
        fontSize: 15,
        marginVertical: 6,
    },

});