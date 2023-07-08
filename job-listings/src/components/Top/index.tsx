import React from 'react';
import { View } from 'react-native';
import TopBackground from '../../../assets/images/bg-header-mobile.svg';
import styles from './styles';

function Top() {
    return (
        <View style={styles.top}>
            <TopBackground width="100%" />
        </View>
    )
}

export default Top;