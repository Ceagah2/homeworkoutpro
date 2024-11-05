import { CategoryCarousel } from "@/presentation/components/categories";
import { Container } from "@/presentation/components/container";
import { Header } from "@/presentation/components/header";
import { categories } from "@/presentation/mock/training";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import * as S from "./styles";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredTrainings, setFilteredTrainings] = useState<any[]>([]);
  const navigation: NavigationProp<any, any> = useNavigation();
  const navigateToWorkout = () => navigation.navigate("Workout");
  const navigateToProgress = () => navigation.navigate("Progress");

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);

    const category = categories.find((cat) => cat.name === categoryName);
    setFilteredTrainings(category ? category.trainings : []);
  };

  return (
    <Container>
      <S.ScrollContainer>
        <Header />

        <S.CategorySection>
          <S.SectionTitle>Categorias</S.SectionTitle>
          <CategoryCarousel onCategorySelect={handleCategorySelect} />
        </S.CategorySection>

        <S.FeaturedWorkout>
          <S.SectionTitle>Seu treino de hoje</S.SectionTitle>
          <S.WorkoutImage source={{ uri: "https://via.placeholder.com/400" }} />
          <S.WorkoutTitle>Movimente-se com tudo!</S.WorkoutTitle>
          <S.WorkoutDescription>
            Em apenas 30 minutos, sinta a transformação no seu corpo e energia!
          </S.WorkoutDescription>
          <S.StartButton onPress={navigateToWorkout}>
            <S.StartButtonText>
              Comece agora e faça um pouquinho por dia!
            </S.StartButtonText>
          </S.StartButton>
        </S.FeaturedWorkout>

        <S.ProgressSection>
          <S.SectionTitle>Seu Progresso</S.SectionTitle>
          <S.ProgressChart
            source={{ uri: "https://via.placeholder.com/400" }}
          />
          <S.ProgressButton onPress={navigateToProgress}>
            <S.ProgressButtonText>
              Veja como você está se superando a cada dia!
            </S.ProgressButtonText>
          </S.ProgressButton>
        </S.ProgressSection>
      </S.ScrollContainer>
    </Container>
  );
}
