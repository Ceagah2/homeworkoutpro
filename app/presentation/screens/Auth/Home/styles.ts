import { useResponsive } from "@/presentation/hooks/useResponsive";
import { colors, fonts } from "@/presentation/theme";
import styled from "styled-components/native";

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  background-color: ${colors.background};
  padding: 20px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${useResponsive(18)};
  color: ${colors.textPrimary};
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.body};
  font-size: ${useResponsive(12)};
  color: ${colors.textSecondary};
`;

export const FeaturedWorkout = styled.View`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.Text`
  font-family: ${fonts.subTitle};
  font-size: 18px;
  color: ${colors.textPrimary};
  margin-bottom: 10px;
`;

export const WorkoutImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const WorkoutTitle = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${useResponsive(14)};
  color: ${colors.textPrimary};
  margin-bottom: 8px;
`;

export const WorkoutDescription = styled.Text`
  font-family: ${fonts.body};
  font-size: ${useResponsive(11)};
  color: ${colors.textSecondary};
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.subTitle};
  color: ${colors.primaryAction};
  font-size: ${useResponsive(10)};
  text-align: center;
`;

export const ProgressSection = styled.View`
  margin-bottom: 30px;
  align-items: center;
`;

export const ProgressChart = styled.Image`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
`;

export const OtherSections = styled.View`
  margin-bottom: 30px;
`;

export const CategoriesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CategoryCard = styled.TouchableOpacity`
  width: 30%;
  height: 100px;
  background-color: ${colors.background};
  border-radius: 10px;
  padding: 8px;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${colors.primaryAction};
`;

export const CategoryText = styled.Text`
  font-family: ${fonts.body};
  color: ${colors.textPrimary};
  font-size: ${useResponsive(12)};
  text-align: center;
`;
