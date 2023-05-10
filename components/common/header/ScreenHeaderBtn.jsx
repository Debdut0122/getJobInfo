import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
// import { COLORS, icons, images, SIZES } from "../../../constants"

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  // console.log(iconUrl);
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
