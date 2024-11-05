import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

export interface ITextInputProps extends TextInputProps {
 leftIcon?: boolean
 rightIcon?: boolean
 icon?: keyof typeof Feather.glyphMap | keyof typeof Ionicons.glyphMap | keyof typeof FontAwesome.glyphMap
 iconLibrary?: string
 setIsPasswordVisible?: (value: boolean) => void
}