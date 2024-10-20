import { ActivityIndicator } from 'react-native';
import { IButton } from './interface';
import * as S from './styles';
export const Button = (props: IButton) => {
  const Loading = props.isLoading
  return (
    <S.Container
      backgroundColor={props.backgroundColor}
      onPress={props.onPress}
      border={props.border}
      borderColor={props.borderColor}
      width={props.width ?? 150}
      height={props.height ?? 50}
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