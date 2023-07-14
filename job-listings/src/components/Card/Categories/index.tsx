import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import styles from "./styles";
import Category from "./Category";
import useCategories from "../../../hooks/useCategories";
import { JobsContext } from "../../../contexts/jobs";

let nextId = 0;
// TODO
function Categories({ languages, tools, level, role }) {
	const { setFilteredJobs, filteredJobs } = useContext(JobsContext);
	const { categoryList } = useCategories({
		languages,
		tools,
		level,
		role,
	});
	const [category, setCategory] = useState('');

	useEffect(() => {
		if(category){
			setFilteredJobs([...new Set([
				...filteredJobs,
				{ 
					id: nextId++, 
					category: category
				},
			])]);
		}
	}, [category]);
	
	
	const pushItems = (item: string) => {
		setCategory(item);
	};

	return (
		<View style={styles.categories}>
			{categoryList.map((item, index) => (
				<Category key={index} pushItems={pushItems} text={item} />
			))}
		</View>
	);
}

export default Categories;
