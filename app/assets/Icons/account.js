import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const AccountCircleSVG = ({ style, size = "64" }) => {
  return (
    <View style={style}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
          fill="#F1F1F1"
        />
        <Path
          d="M52 56V51C52 48.3478 50.9201 45.8043 48.9979 43.9289C47.0756 42.0536 44.4685 41 41.75 41H21.25C18.5315 41 15.9244 42.0536 14.0022 43.9289C12.0799 45.8043 11 48.3478 11 51V56"
          stroke="#A2A2A2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M31.5001 32C37.299 32 42 27.5228 42 22C42 16.4771 37.299 12 31.5001 12C25.7011 12 21 16.4771 21 22C21 27.5228 25.7011 32 31.5001 32Z"
          stroke="#A2A2A2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};

export default AccountCircleSVG;
