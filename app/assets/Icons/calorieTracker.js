import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

const CalorieTrackerSVG = ({ style, size = "30", color = "#656565" }) => {
  return (
    <View style={style}>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 30 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M19.1175 18.9545C18.4888 20.2834 17.0233 21.8945 16.1422 22.6006C16.4668 20.9754 17.5064 19.4422 17.2993 17.75C17.0696 15.848 15.4531 15.3982 14.9118 13.7254C14.764 17.0828 11.5277 17.7229 12.9642 20.8359C13.4764 21.9399 14.6012 22.3746 15.5351 22.5314C14.6379 22.4449 13.1281 22.3054 12.48 22.0545C10.2563 21.1798 8.28606 18.7869 9.83788 15.6728C10.2617 14.8262 10.7685 14.4077 11.614 13.4021C11.2905 14.8597 12.1759 15.7226 13.0343 16.061C12.5317 14.6434 12.7356 12.9318 13.4548 11.6375C14.2011 10.2848 14.956 9.1062 15.1566 7.4021C15.5017 10.1431 16.5865 12.6377 18.0941 14.6413C18.9924 15.8339 19.8196 17.4742 19.1175 18.9545Z"
          fill={color}
        />
        <Path
          d="M16.3738 20.2675C16.3059 20.9887 16.0869 21.578 16.1419 22.6008C15.7084 22.3846 14.1965 21.459 14.4693 20.2675C14.7368 19.1029 15.3288 18.744 15.4226 17.9341C15.4539 17.9341 16.4859 19.0651 16.3738 20.2675Z"
          fill={color}
        />
        <Path
          d="M24.3797 4.00508C27.5869 6.76666 29.4159 10.7447 29.4159 15.0006C29.4159 19.3495 27.5222 23.3838 24.2029 26.1443L22.2553 23.6216C24.7927 21.471 26.2356 18.358 26.2356 15.0006C26.2356 11.7178 24.8402 8.64701 22.3901 6.49526L24.3797 4.00508ZM24.3053 3.28711L21.6869 6.56447C24.2579 8.62971 25.731 11.7038 25.731 15.0006C25.731 18.3677 24.2083 21.4807 21.5532 23.5395L24.1166 26.8611C27.8047 24.0001 29.9206 19.6761 29.9206 14.9995C29.9206 10.4214 27.8737 6.1525 24.3053 3.28711Z"
          fill={color}
        />
        <Path
          d="M5.81188 26.8633C2.11835 24.0055 0.000366211 19.6814 0.000366211 15.0006C0.000366211 6.72988 6.71127 0 14.96 0C18.3505 0 21.6698 1.16778 24.3065 3.28709L21.686 6.56444C19.7621 5.01713 17.436 4.1986 14.96 4.1986C9.02013 4.1986 4.18888 9.04381 4.18888 14.9995C4.18888 18.3688 5.71374 21.4796 8.37093 23.5373L5.81188 26.8633Z"
          fill={color}
        />
        <Path
          d="M21.3278 25.8113L20.1372 25.6383L19.6045 24.5559L19.0718 25.6383L17.8812 25.8113L18.7429 26.6525L18.5401 27.843L19.6056 27.2807L20.6689 27.843L20.4662 26.6525L21.3278 25.8113ZM19.6045 26.9952L18.8734 27.3802L19.0125 26.5638L18.4237 25.9875L19.24 25.8696L19.6045 25.1279L19.969 25.8696L20.7843 25.9875L20.1944 26.5638L20.3335 27.3791L19.6045 26.9952Z"
          fill={color}
        />
        <Path
          d="M14.9598 24.5559L15.4925 25.6383L16.6831 25.8113L15.8214 26.6525L16.0252 27.843L14.9598 27.2807L13.8954 27.843L14.0981 26.6525L13.2375 25.8113L14.427 25.6383L14.9598 24.5559Z"
          fill={color}
        />
        <Path
          d="M10.3164 24.5558L10.8492 25.6381L12.0397 25.8111L11.1781 26.6524L11.3819 27.8428L10.3164 27.2806L9.25204 27.8428L9.45478 26.6524L8.59314 25.8111L9.7837 25.6381L10.3164 24.5558Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export default CalorieTrackerSVG;