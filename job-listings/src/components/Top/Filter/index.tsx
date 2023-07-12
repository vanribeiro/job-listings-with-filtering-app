import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import styles from "./styles";
import Words from "../../Words";
import { JobsContext } from "../../../contexts/jobs";

// itens to be filter languages, tools, level, role

function Filter() {

	return (
		<>
			<View style={styles.container}>
				<Words fontWeight={400}>filter</Words>
			</View>
		</>
	);
}

export default Filter;
