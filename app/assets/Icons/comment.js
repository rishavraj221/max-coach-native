import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const CommentSVG = ({ style, size = "24", color = "#656565" }) => {
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
          d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default CommentSVG;
