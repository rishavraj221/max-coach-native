import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const ArrowLeft2 = ({ style, size = "24", color = "black" }) => {
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
          d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default ArrowLeft2;
