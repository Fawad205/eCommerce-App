import React from "react";
import { SvgXml } from "react-native-svg";

interface SvgIconProps {
  xml: string;          
  width?: number;
  height?: number;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  xml,
  width = 24,
  height = 24,
}) => {
  return <SvgXml xml={xml} width={width} height={height} />;
};

export default SvgIcon;
