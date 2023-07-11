import React from "react";
import { View } from "react-native";
import Words from "../../Words";
import styles from "./styles";

function Flags({ news, featured }) {
	return (
		<View style={styles.flags}>
			{news && (
				<Words fontWeight={700} style={styles.flagNew}>
					New!
				</Words>
			)}
			{featured && (
				<Words fontWeight={700} style={styles.flagFeatured}>
					Featured
				</Words>
			)}
		</View>
	);
}

export default Flags;
