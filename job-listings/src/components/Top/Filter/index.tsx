import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Words from "../../Words";
import closeIcon from "../../../../assets/images/icon-remove.png";

function Filter() {

	const [categories, setCategories] = useState([]);
	const removeThisCategory = (category: string) => {
		const copiedCategoriesList: Array<string> = [...categories];
		const updatedCategories = copiedCategoriesList.filter(item => item !== category);
		setCategories(updatedCategories);
	}
	
	const clearFilter = () => { setCategories([]); }

	return (
		<>
			{ categories.length > 0 &&
				<View style={styles.container}>
					<View style={styles.filters}>
						{categories.map((category, indexKey) => (
							<View key={indexKey} style={styles.filterItem}>
								<Words fontWeight={400} style={styles.word}>
									{category}
								</Words>
								<TouchableOpacity
									style={styles.closeButton}
									onPress={() => removeThisCategory(category)}>
									<Image source={closeIcon} />
								</TouchableOpacity>
							</View>
						))}
					</View>
					<TouchableOpacity onPress={() => clearFilter()}>
						<Words fontWeight={400}>Clear</Words>
					</TouchableOpacity>
				</View>
			}
		</>
	);
}

export default Filter;
