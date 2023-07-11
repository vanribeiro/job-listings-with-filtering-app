import React from "react";
import { View } from "react-native";
import Words from "../../Words";
import styles from "./styles";

function StatusLine({ postedAt, contract, location }: any) {
    return (
        <View style={styles.status}>
            <Words fontWeight={400} style={styles.text}>{postedAt}</Words>
            <Words fontWeight={400} style={styles.text}>&#x22C5;</Words>
            <Words fontWeight={400} style={styles.text}>{contract}</Words>
            <Words fontWeight={400} style={styles.text}>&#x22C5;</Words>
            <Words fontWeight={400} style={styles.text}>{location}</Words>
        </View>
    )
}

export default StatusLine;