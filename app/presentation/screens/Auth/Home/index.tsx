import { Container } from '@/presentation/components/container';
import { colors } from '@/presentation/theme';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import * as S from "./styles";
export default function Home() {
  const navigation = useNavigation();

  const navigateToWorkout = () => {
    navigation.navigate("Workout");
  };

  const navigateToProgress = () => {
    navigation.navigate("Progress");
  };
  const Categories = [
    {
      id: 1,
      name: "Strength",
      icon: (
        <FontAwesome5 name="dumbbell" size={24} color={colors.textPrimary} />
      ),
    },
    {
      id: 2,
      name: "Flexibility",
      icon: (
        <MaterialCommunityIcons
          name="yoga"
          size={24}
          color={colors.textPrimary}
        />
      ),
    },
    {
      id: 3,
      name: "Cardio",
      icon: (
        <FontAwesome5 name="running" size={24} color={colors.textPrimary} />
      ),
    },
  ];
  return (
    <Container>
      <S.ScrollContainer>
        <S.Header>
          <S.Title>Bem-vindo(a) {"\n"} ao Home Workout Pro!</S.Title>
          <S.SubTitle>Saúde e bem-estar na palma da sua mão.</S.SubTitle>
        </S.Header>

        <S.FeaturedWorkout>
          <S.SectionTitle>Seu treino de hoje</S.SectionTitle>
          <S.WorkoutImage source={{ uri: "https://via.placeholder.com/400" }} />
          <S.WorkoutTitle>Movimente-se com tudo!</S.WorkoutTitle>
          <S.WorkoutDescription>
            Em apenas 30 minutinhos, você vai transformar seu corpo e sua
            energia!
          </S.WorkoutDescription>
          <TouchableOpacity onPress={navigateToWorkout}>
            <S.ButtonText>
              Comece agora e faça um pouquinho por dia!
            </S.ButtonText>
          </TouchableOpacity>
        </S.FeaturedWorkout>

        <S.ProgressSection>
          <S.SectionTitle>Seu Progresso</S.SectionTitle>
          <S.ProgressChart
            source={{ uri: "https://via.placeholder.com/300" }}
          />
          <TouchableOpacity onPress={navigateToProgress}>
            <S.ButtonText>
              Veja como você está se superando a cada dia!
            </S.ButtonText>
          </TouchableOpacity>
        </S.ProgressSection>

        <S.OtherSections>
          <S.SectionTitle>Explore nossas categorias de treinos!</S.SectionTitle>
          <S.CategoriesContainer>
            {Categories &&
              Categories.map((category) => (
                <S.CategoryCard key={category.id}>
                  {category.icon}
                  <S.CategoryText>{category.name}</S.CategoryText>
                </S.CategoryCard>
              ))}
          </S.CategoriesContainer>
        </S.OtherSections>
      </S.ScrollContainer>
    </Container>
  );
}
