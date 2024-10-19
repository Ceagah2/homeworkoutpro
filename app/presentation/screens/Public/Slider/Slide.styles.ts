import { useResponsive } from '@/presentation/hooks/useResponsive'
import { colors, fonts } from '@/presentation/theme'
import styled from 'styled-components/native'

export const Slide = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  color: ${colors.textPrimary};
  font-size: ${useResponsive(14)};
  font-family: ${fonts.heading};
`
export const Description = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${useResponsive(12)};
  font-family: ${fonts.description};
`;
export const Image = styled.Image`
  width: 90%;
  height: 50%;
`
export const DoneButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  justify-content: center;
  align-items: center;
`