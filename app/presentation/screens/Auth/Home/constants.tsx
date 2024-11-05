import { colors } from "@/presentation/theme";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export const Categories = [
  {
    id: 1,
    name: "Força",
    icon: (
      <FontAwesome5 name="dumbbell" size={16} color={colors.motivationalText} />
    ),
  },
  {
    id: 2,
    name: "Flexibilidade",
    icon: (
      <MaterialCommunityIcons
        name="yoga"
        size={16}
        color={colors.motivationalText}
      />
    ),
  },
  {
    id: 3,
    name: "Cardio",
    icon: (
      <FontAwesome5 name="running" size={16} color={colors.motivationalText} />
    ),
  },
];
