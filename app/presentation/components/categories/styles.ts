import { colors, fonts } from '@/presentation/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 24px;
`;
export const SectionTitle = styled.Text`
  font-size: 22px;
  font-family: ${fonts.heading};
  color: ${colors.textPrimary};
  margin-bottom: 10px;
`;
export const CategoriesContainer = styled.ScrollView`
  flex-direction: row;
`;

export const CategoryCard = styled.TouchableOpacity`
  width: 150px;
  height: 40px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.primaryAction};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  margin-right: 16px;
`;

export const CategoryText = styled.Text`
  font-size: 15px;
  color: ${colors.motivationalText};
  font-family: ${fonts.body};
  text-align: center;
`;