import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Category from './Category';

function Categories({languages, tools, level, role}) {
    const [ list, setList ] = useState([]);
    const allCategories = languages?.concat(tools);
    allCategories.push(level)
    allCategories.push(role);

    useEffect(() => {
       setList(allCategories); 
    }, [])

    return (
        <View style={styles.categories}>
            {
                list.map((item, index) => (
                    <Category key={index}>{item}</Category>  
                ))
            }
        </View>
    );
}

export default Categories;