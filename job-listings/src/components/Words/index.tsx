import {
	useFonts,
	LeagueSpartan_400Regular,
	LeagueSpartan_500Medium,
	LeagueSpartan_700Bold,
} from "@expo-google-fonts/league-spartan";
import { Text } from "react-native";

interface IText {
    children: string;
    fontWeight: number;
    style?: any;
};

function Words({ children, fontWeight, style }: IText) {
    let [isFontsLoaded] = useFonts({
		LeagueSpartan_400Regular,
		LeagueSpartan_500Medium,
		LeagueSpartan_700Bold,
	});

    const fontWeightDictionary = {
        400: 'LeagueSpartan_400Regular',
		500: 'LeagueSpartan_500Medium',
        700: 'LeagueSpartan_700Bold'
    }

    const styles = {
        fontFamily: fontWeightDictionary[fontWeight]
    };

	if (!isFontsLoaded) return null;

    return (
        <Text style={[styles, style]}>
            {children}
        </Text>
    );
}

export default Words;