import { StyleSheet } from "react-native";

export default StyleSheet.create({
    filterItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    word: {
        paddingHorizontal: 9,
        paddingVertical: 5,
        borderRadius: 4,
        backgroundColor: 'hsl(180, 31%, 95%)',
        color: 'hsl(180, 29%, 50%)',
        fontWeight: 'bold',
        fontSize: 15
    },
    closeButton: {
        paddingHorizontal: 9,
        paddingVertical: 8,
        backgroundColor: 'hsl(180, 29%, 50%)',
        borderTopEndRadius: 6,
        borderBottomRightRadius: 6
    }
});