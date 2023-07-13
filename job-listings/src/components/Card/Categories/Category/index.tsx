import React from "react";
import styles from "./styles";
import Words from "../../../Words";
import { TouchableOpacity } from "react-native";

function Category({ text, setSelectedCategory }: any) {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(text)}>
            <Words fontWeight={700} style={styles.category}>
                {text}
            </Words>
        </TouchableOpacity>
	);
}

export default Category;
