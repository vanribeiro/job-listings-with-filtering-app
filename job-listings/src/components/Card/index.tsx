import React from "react";
import styles from "./styles";
import Words from "../Words";
import Categories from "./Categories";
import StatusLine from "./StatusLine";
import Flags from "./Flags";
import Logo from "./Logo";
import { View } from "react-native";

function Card({
	company,
	position,
	postedAt,
	contract,
	location,
	languages,
	tools,
	level,
	role,
	news,
	featured
}: any) {

	return (
		<View
			style={[
				styles.card,
				{ borderColor: featured ? "hsl(180, 29%, 50%)" : "#FFF" },
			]}>
			<View>
				<Logo company={company} />
				<View style={styles.cardTitle}>
					<Words fontWeight={700} style={styles.companyName}>
						{company}
					</Words>
					<Flags news={news} featured={featured} />
				</View>
				<Words fontWeight={400} style={styles.role}>
					{position}
				</Words>
				<StatusLine
					postedAt={postedAt}
					contract={contract}
					location={location}
				/>
				<Categories
					languages={languages}
					tools={tools}
					level={level}
					role={role}
				/>
			</View>
		</View>
	);
}

export default Card;
