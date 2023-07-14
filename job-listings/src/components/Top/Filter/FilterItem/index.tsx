import { Image, TouchableOpacity, View } from "react-native";
import Words from "../../../Words";
import { useContext } from "react";
import { JobsContext } from "../../../../contexts/jobs";
import closeIcon from "../../../../../assets/images/icon-remove.png";
import styles from "./styles";

function FilterItem ({ word }: any) {
    const { filteredJobs, setFilteredJobs } = useContext(JobsContext);
    
    const removeThisCategory = (category: string) => {
        const updatedCategories: Array<string> = filteredJobs.filter(
            (item) => item !== category
        );

        setFilteredJobs(updatedCategories);
    };

    return (
        <View style={styles.filterItem}>
            <Words fontWeight={400} style={styles.word}>
                {word.category}
            </Words>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => removeThisCategory(word)}>
                <Image source={closeIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default FilterItem;