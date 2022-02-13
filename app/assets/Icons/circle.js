import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const CircleSVG = ({ style, size = "24", color = "#C4C4C4" }) => {
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
          d="M12 0C5.3828 0 0 5.3828 0 12C0 18.6172 5.3828 24 12 24C18.6172 24 24 18.6163 24 12C24 5.38373 18.6172 0 12 0ZM12 22.141C6.40898 22.141 1.85902 17.592 1.85902 12C1.85902 6.40805 6.40898 1.85902 12 1.85902C17.591 1.85902 22.141 6.40805 22.141 12C22.141 17.592 17.592 22.141 12 22.141Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default CircleSVG;
