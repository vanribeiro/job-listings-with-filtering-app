import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width - 48;

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        position: 'absolute',
        top: '60%',
        width:  width,
        paddingVertical: 24,
        paddingHorizontal: 24,
        marginHorizontal: 24,
        borderRadius: 6,
        elevation: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },
    filters: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap',
        width: '90%'
    },
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