import { categories } from "@/presentation/mock/training";
import { colors } from "@/presentation/theme";
import { AntDesign, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { FlatList } from "react-native";
import * as S from './styles';
type CategoryCarouselProps = {
  onCategorySelect: (categoryName: string) => void;
};

export function CategoryCarousel({ onCategorySelect }: CategoryCarouselProps) {
  const renderIcon = (library: string, name: string) => {
    switch (library) {
      case "AntDesign":
        return (
          <AntDesign name={name} size={20} color={colors.motivationalText} />
        );
      case "FontAwesome":
        return <FontAwesome5 name={name} size={20} color={colors.motivationalText} />;
      case "MaterialIcons":
        return (
          <MaterialIcons
            name={name}
            size={20}
            color={colors.motivationalText}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => item.name}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{marginLeft: 10}}
      renderItem={({ item }) => (
        <S.CategoryCard onPress={() => onCategorySelect(item.name)}>
          {renderIcon(item.icon.library, item.icon.name)}
          <S.CategoryText>{item.name}</S.CategoryText>
        </S.CategoryCard>
      )}
    />
  );
}
