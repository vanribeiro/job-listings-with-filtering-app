import React from "react";
import { Image } from "react-native";
import styles from "./styles";

function Logo({ company }) {
    return (
        <Image style={styles.logo} source={images[company]} />
    );
}

const images = {
    "Photosnap": require("../../../../assets/images/photosnap.png"),
    "Manage": require("../../../../assets/images/manage.png"),
    "Account": require("../../../../assets/images/account.png"),
    "MyHome": require("../../../../assets/images/myhome.png"),
    "Loop Studios": require("../../../../assets/images/loop-studios.png"),
    "FaceIt": require("../../../../assets/images/faceit.png"),
    "Shortly": require("../../../../assets/images/shortly.png"),
    "Insure": require("../../../../assets/images/insure.png"),
    "Eyecam Co.": require("../../../../assets/images/eyecam-co.png"),
    "The Air Filter Company": require("../../../../assets/images/the-air-filter-company.png"),
}

export default Logo;