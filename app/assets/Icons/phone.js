import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const PhoneSVG = ({ style, size = "24", color = "#656565" }) => {
  return (
    <View style={[style, { paddingLeft: 5 }]}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M17.01 15.38C15.78 15.38 14.59 15.18 13.48 14.82C13.13 14.7 12.74 14.79 12.47 15.06L10.9 17.03C8.07 15.68 5.42 13.13 4.01 10.2L5.96 8.54C6.23 8.26 6.31 7.87 6.2 7.52C5.83 6.41 5.64 5.22 5.64 3.99C5.64 3.45 5.19 3 4.65 3H1.19C0.65 3 0 3.24 0 3.99C0 13.28 7.73 21 17.01 21C17.72 21 18 20.37 18 19.82V16.37C18 15.83 17.55 15.38 17.01 15.38Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default PhoneSVG;
