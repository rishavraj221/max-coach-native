import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const ArrowRight2 = ({ style, size = "24", color = "black" }) => {
  return (
    <View style={style}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default ArrowRight2;
