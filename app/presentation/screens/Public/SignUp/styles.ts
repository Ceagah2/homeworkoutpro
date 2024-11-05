import { useResponsive } from '@/presentation/hooks/useResponsive';
import { colors, fonts } from '@/presentation/theme';
import styled from 'styled-components/native';

export const Header = styled.View`
  height: 20%;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  color: ${colors.primaryAction};
  font-size: ${useResponsive(18)};
  font-family: ${fonts.heading};
  text-align: center;
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


export const ButtonText = styled.Text`
  color: white;
  font-family: ${fonts.body};
  font-size: ${useResponsive(14)};
  margin-left: 10px;
`;


export const EyeIcon = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 12px;
`;


export const LinkText = styled.Text`
  color: ${colors.primaryAction};
  font-size: 14px;
  margin-top: 8px;
  font-family: ${fonts.body};
`;


export const SignUpForm = styled.View`
  width: 100%;
  padding: 20px;
`;

export const InputContainer = styled.View`
  margin-bottom: 16px;
  width: 100%;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const OrText = styled.Text`
  font-size: ${useResponsive(12)};
  color: ${colors.textSecondary};
  margin: 16px 0;
  text-align: center;
  font-family: ${fonts.body};
`;

export const FooterLinks = styled.View`
  margin-top: 16px;
  align-items: center;
`;

export const LoginLink = styled.Text`
  color: ${colors.primaryAction};
  font-size: ${useResponsive(12)};
  text-decoration: underline;
  font-family: ${fonts.body};
`;

export const ProfileImageContainer = styled.View`
  align-items: center;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ProfilePlaceholder = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${colors.secondaryBackground};
  align-items: center;
  justify-content: center;
`;

export const ImageText = styled.Text`
  font-size: 14px;
  color: ${colors.textSecondary};
  margin-top: 8px;
  font-family: ${fonts.body};
`;
