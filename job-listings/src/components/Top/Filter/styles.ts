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
    }
});