import { StyleSheet } from "react-native";

export default StyleSheet.create({
    flags: {
        flexDirection: 'row',
        gap: 16
    },
    flagNew: {
        color: '#FFF',
        fontWeight: 'bold',
        backgroundColor: 'hsl(180, 29%, 50%)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 25,
        textTransform: "uppercase"
    },
    flagFeatured: {
        color: '#FFF',
        fontWeight: 'bold',
        backgroundColor: 'hsl(180, 14%, 20%)',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 25,
        textTransform: "uppercase"
    },
});