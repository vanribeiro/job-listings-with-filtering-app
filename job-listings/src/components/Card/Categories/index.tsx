import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import Category from "./Category";
import useCategories from "../../../hooks/useCategories";

function Categories({
	languages,
	tools,
	level,
	role,
	position,
}) {
	const [selectedCategory, setSelectedCategory] = useState<string>('');
	const { categoryList } = useCategories({ languages, tools, level, role, position });

	return (
		<View>
			<FlatList
				style={styles.categories}
				data={categoryList}
				refreshing
				keyExtractor={item => item}
				renderItem={({item}) => (
					<Category setSelectedCategory={setSelectedCategory} text={item} />
				)}
			/>
		</View>
	);
}

export default Categories;
