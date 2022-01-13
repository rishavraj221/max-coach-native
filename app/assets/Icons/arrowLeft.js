import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const HomeSVG = ({ style, size = "17", color = "black" }) => {
  return (
    <View style={style}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M3.828 7.70531H16V9.70245H3.828L9.192 15.0588L7.778 16.4707L0 8.70388L7.778 0.937012L9.192 2.34899L3.828 7.70531Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default HomeSVG;
