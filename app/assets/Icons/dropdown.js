import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const DropDownSVG = ({ style, size = "5", color = "black" }) => {
  return (
    <View style={style}>
      <Svg
        width={2 * size}
        height={size}
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path d="M0 0L5 5L10 0H0Z" fill={color} />
      </Svg>
    </View>
  );
};

export default DropDownSVG;
