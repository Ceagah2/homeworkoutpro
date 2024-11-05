import { useResponsive } from "@/presentation/hooks/useResponsive";
import { colors } from "@/presentation/theme";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  background-color: ${colors.secondaryBackground};
  border-radius: 8px;
`;

export const UserImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 16px;
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;

export const GreetingText = styled.Text`
  font-size: ${useResponsive(14)};
  font-weight: bold;
  color: ${colors.textPrimary};
`;

export const DateTimeText = styled.Text`
  font-size: ${useResponsive(10)};
  color: ${colors.textSecondary};
  margin-top: 4px;
`;
