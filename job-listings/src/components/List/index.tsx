import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import Card from '../Card';
import { JobsContext } from '../../contexts/jobs';
import Top from '../Top';

function List() {
    const { jobs } = useContext(JobsContext);
    return (
        <View style={styles.container}>
            <FlatList 
                data={jobs}
                //@ts-ignore
                keyExtractor={item => item.id}
                renderItem={({item}) => <Card {...item} />}
                ListHeaderComponent={Top}
            />
        </View>
    )
}

export default List;