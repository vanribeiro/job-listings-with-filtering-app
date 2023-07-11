import React from "react";
import styles from "./styles";
import Words from "../../Words";
import { TouchableOpacity } from "react-native";

function Category({ children }: any) {
	return (
        <TouchableOpacity onPress={() => {}}>
            <Words fontWeight={700} style={styles.category}>
                {children}
            </Words>
        </TouchableOpacity>
	);
}

export default Category;
