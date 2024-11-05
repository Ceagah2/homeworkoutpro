import { colors, fonts } from "@/presentation/theme";
import styled from "styled-components/native";

export const Header = styled.View`
  align-items: center;
  padding: 20px;
`;

export const ProfileImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  margin-bottom: 16px;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: ${colors.textPrimary};
  font-family: ${fonts.heading};
`;

export const Email = styled.Text`
  font-size: 16px;
  color: ${colors.textSecondary};
  font-family: ${fonts.body};
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: ${colors.primaryAction};
  font-family: ${fonts.heading};
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const SettingsContainer = styled.View`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 32px;
`;

export const SettingItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.secondaryBackground};
`;

export const SettingText = styled.Text`
  font-size: 16px;
  color: ${colors.textPrimary};
  font-family: ${fonts.body};
  margin-left: 12px;
`;

export const LogoutButton = styled.TouchableOpacity`
  background-color: ${colors.secondaryAction};
  padding: 14px 24px;
  border-radius: 24px;
  margin-top: 32px;
`;

export const LogoutButtonText = styled.Text`
  color: ${colors.background};
  font-size: 16px;
  font-family: ${fonts.heading};
  text-align: center;
`;
