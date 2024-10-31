import { colors, fonts } from "@/presentation/theme";
import styled from "styled-components/native";

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.background};
`;

export const Header = styled.View`
  padding: 24px;
  background-color: ${colors.secondaryBackground};
  align-items: center;
  border-radius: 24px;
`

export const Title = styled.Text`
  font-size: 26px;
  font-family: ${fonts.heading};
  color: ${colors.primaryAction};
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  font-family: ${fonts.body};
  color: ${colors.textSecondary};
  text-align: center;
  margin-top: 10px;
`;

export const FeaturedWorkout = styled.View`
  padding: 20px;
  background-color: ${colors.secondaryBackground};
  border-radius: 16px;
  margin: 20px;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.Text`
  font-size: 22px;
  font-family: ${fonts.heading};
  color: ${colors.textPrimary};
  margin-bottom: 10px;
`;

export const WorkoutImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  margin-bottom: 14px;
`;

export const WorkoutTitle = styled.Text`
  font-size: 20px;
  font-family: ${fonts.heading};
  color: ${colors.textPrimary};
`;

export const WorkoutDescription = styled.Text`
  font-size: 16px;
  color: ${colors.textSecondary};
  text-align: center;
  margin-bottom: 12px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.primaryAction};
  padding: 14px 28px;
  border-radius: 24px;
  margin-top: 12px;
`;

export const ButtonText = styled.Text`
  color: ${colors.textPrimary};
  font-size: 16px;
  font-family: ${fonts.heading};
  text-align: center;
`;

export const ProgressSection = styled.View`
  padding: 20px;
  margin: 20px;
  background-color: ${colors.secondaryBackground};
  border-radius: 16px;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProgressChart = styled.Image`
  width: 100%;
  height: 140px;
  border-radius: 12px;
  margin-bottom: 14px;
`;

export const OtherSections = styled.View`
  padding: 24px;
`;

export const CategoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CategoryCard = styled.View`
  width: 100px;
  height: 100px;
  background-color: ${colors.primaryBackground};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

export const CategoryText = styled.Text`
  font-size: 15px;
  color: ${colors.motivationalText};
  margin-top: 8px;
  font-family: ${fonts.body};
  text-align: center;
`;
