import React from "react";
import { View } from "react-native";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const TickSVG = ({ style, size = "22", color = "#ABABAB" }) => {
  return (
    <View style={style}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#clip0_1_4078)">
          <Path
            d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C21.9936 4.92759 17.0725 0.00649136 11 0ZM17.0555 7.62693L9.19835 15.4841C8.89151 15.7909 8.39416 15.7909 8.08736 15.4841L4.94448 12.3412C4.63235 12.0398 4.62369 11.5424 4.92515 11.2302C5.2266 10.9181 5.724 10.9094 6.03614 11.2109C6.04267 11.2173 6.04912 11.2237 6.05547 11.2302L8.64285 13.8176L15.9445 6.51594C16.2567 6.21449 16.7541 6.22314 17.0555 6.53523C17.3496 6.83973 17.3496 7.32244 17.0555 7.62693Z"
            fill={color}
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_4078">
            <Rect width="22" height="22" fill="white" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  );
};

export default TickSVG;
