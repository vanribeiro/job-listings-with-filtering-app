import React, { useState, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Words from "../../Words";
import { JobsContext } from "../../../contexts/jobs";
import FilterItem from "./FilterItem";

function Filter() {
	const { filteredJobs, setFilteredJobs } = useContext(JobsContext);

	console.log(filteredJobs);

	const clearFilter = () => {
		setFilteredJobs([]);
	};

	return (
		<>
			{filteredJobs.length > 0 && (
				<View style={styles.container}>
					<View style={styles.filters}>
						{filteredJobs.map((item, index) => (
							<FilterItem word={item} key={index} />
						))}
					</View>
					<TouchableOpacity onPress={() => clearFilter()}>
						<Words fontWeight={400}>Clear</Words>
					</TouchableOpacity>
				</View>
			)}
		</>
	);
}

export default Filter;
