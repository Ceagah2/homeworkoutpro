export interface IButton {
  title: string;
  backgroundColor?: string;
  color?: string;
  onPress?: () => void;
  border?: number;
  borderColor?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  isLoading?: boolean;
}
