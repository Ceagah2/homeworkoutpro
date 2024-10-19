
import { ActivityIndicator } from 'react-native'
import * as S from './styles'
interface IButton {
  title: string
  backgroundColor?: string
  color?: string
  onPress?: () => void
  border?: number
  borderColor?: string
  width?: number
  height?: number
  children?: React.ReactNode
  isLoading: boolean
}

export const Button = (props: IButton) => {
  const Loading = props.isLoading
  return (
    <S.Container
      backgroundColor={props.backgroundColor}
      onPress={props.onPress}
      border={props.border}
      borderColor={props.borderColor}
      width={props.width ?? 0}
      height={props.height ?? 0}
    >
      {!Loading ? (
        <>
          {props.children}
          <S.ButtonText color={props.color}>{props.title}</S.ButtonText>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </S.Container>
  );
};