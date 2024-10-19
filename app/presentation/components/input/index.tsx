import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { ITextInputProps } from './interface';
import * as S from './styles';

export const Input = (props: ITextInputProps) => {
  const renderIcon = (libName: string) => {
    switch (libName) {
      case "Feather":
        return <Feather name={props.icon} size={24} color="black" />
      case "Ionicons":
        return <Ionicons name={props.icon} size={24} color="black" />
      case "FontAwesome":
        return <FontAwesome name={props.icon} size={24} color="black" />
      default:
        return <Feather name={props.icon} size={24} color="black" />
    }
  }
  return (
    <S.Container>
      {props.leftIcon && renderIcon(props.iconLibrary || "Feather")}
      <S.Input {...props} />
      {props.rightIcon && renderIcon(props.iconLibrary || "Feather")}
    </S.Container>
  );
}