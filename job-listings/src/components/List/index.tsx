import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import Card from "../Card";
import { JobsContext } from "../../contexts/jobs";
import Top from "../Top";

function List() {
	const { jobs, filteredJobs } = useContext(JobsContext);

	console.log(filteredJobs);

	//TODO
	const filteredBy = jobs.filter((job) => {
		if (filteredJobs.length > 0) {
			return (
				job.tools.some(item => item === filteredJobs[0].category) ||
				job.languages.some(item => item === filteredJobs[0].category) ||
				job.level === filteredJobs[0].category ||
				job.role === filteredJobs[0].category
			);
		} else {
			return job;
		}
	});

	return (
		<View style={styles.container}>
			<FlatList
				refreshing
				data={filteredBy}
				keyExtractor={(item: any) => item.id}
				renderItem={({ item }: any) => <Card {...item} />}
				ListHeaderComponent={<Top />}
			/>
		</View>
	);
}

export default List;
