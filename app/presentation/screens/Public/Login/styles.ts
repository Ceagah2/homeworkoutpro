import { useResponsive } from "@/presentation/hooks/useResponsive";
import { colors, fonts } from "@/presentation/theme";
import styled from "styled-components/native";

export const Header = styled.View`
  height: 40%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${colors.primaryAction};
  font-size: ${useResponsive(18)};
  font-family: ${fonts.heading};
`;

export const Description = styled.Text`
  color: ${colors.primaryAction};
  font-size: ${useResponsive(10)};
  font-family: ${fonts.subTitle};
  text-align: center;
`;

export const Image = styled.Image`
  width: 300px;
  height: 300px;
`;

export const LoginForm = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const InputContainer = styled.View`
  width: 90%;
  margin-bottom: 12px;
  position: relative; 
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-family: ${fonts.body};
  font-size: ${useResponsive(14)};
  margin-left: 10px;
`;

export const OrText = styled.Text`
  color: ${colors.textSecondary};
  font-family: ${fonts.body};
  font-size: ${useResponsive(12)};
  margin-top: 20px;
  text-align: center;
`;



export const EyeIcon = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 12px;
`;

export const FooterLinks = styled.View`
  margin-top: 16px;
  align-items: center;
`;

export const LinkText = styled.Text`
  color: ${colors.primaryAction};
  font-size: 14px;
  margin-top: 8px;
  font-family: ${fonts.body};
`;
