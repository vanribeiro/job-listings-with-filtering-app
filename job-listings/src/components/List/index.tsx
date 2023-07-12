import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import Card from '../Card';
import { JobsContext } from '../../contexts/jobs';
import Top from '../Top';

function List() {
    const { jobs } = useContext(JobsContext);
    
	const word = "";

	const jobList = jobs.filter((job) => {
        if(word.length !== 0){
            return (
                job.role === word ||
                job.level === word ||
                job.languages.includes(word) ||
                job.tools.includes(word)
            );
        } else {
            return job;
        }
	});


    return (
        <View style={styles.container}>
            <FlatList 
                data={jobList}
                //@ts-ignore
                keyExtractor={item => item.id}
                renderItem={({item}) => <Card {...item} />}
                ListHeaderComponent={<Top />}
            />
        </View>
    )
}

export default List;