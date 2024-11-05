import styled from "styled-components/native";
import { useResponsive } from "../../hooks/useResponsive";
import { colors, sizes } from "../../theme";

type TContainer = {
  backgroundColor?: string;
  border?: number;
  borderColor?: string;
  width: number;
  height: number;
}

type TText = {
  color?: string;

}

export const Container = styled.TouchableOpacity<TContainer>`
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : colors.primaryAction};
  width: ${(props) => props.width}px; 
  height: ${(props) => props.height}px; 
  padding: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  border: ${(props) => props.border ? props.border + `px ` + `solid ` + props.borderColor : 0};
`;

export const ButtonText = styled.Text<TText>`
  color: ${(props) => (props.color ? props.color : colors.background)};
  font-size: ${useResponsive(sizes.small)};
`;