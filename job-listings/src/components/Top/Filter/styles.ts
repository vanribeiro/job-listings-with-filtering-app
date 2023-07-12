import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width - 48;

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        position: 'absolute',
        top: '40%',
        width:  width,
        paddingVertical: 16,
        paddingHorizontal: 24,
        marginHorizontal: 24,
        borderRadius: 6,
        height: 120,
        elevation: 6
    }
});