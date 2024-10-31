import { SetItem } from '@/presentation/hooks/useStorage';
import { colors } from '@/presentation/theme';
import Boy from '@assets/funcional-menino.png';
import Strength from '@assets/halter-menina.png';
import Training from '@assets/treinadoras.png';
import YogaGirl from '@assets/yoga-menina-negra.png';
import { AntDesign } from "@expo/vector-icons";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import AppIntroSlider from "react-native-app-intro-slider";
import { ISlideItem } from "./Slide.interface";
import * as S from './Slide.styles';

export const Slider = () => {
  const navigation: NavigationProp<any, any> = useNavigation();
  const slides = [
    {
      id: 1,
      title: "Movimento e energia para todos os dias",
      description:
        "Descubra a força do seu corpo com exercícios funcionais que fortalecem, alongam e melhoram a sua mobilidade para a rotina diária.",
      image: Strength,
    },
    {
      id: 2,
      title: "Equilíbrio e conexão interior",
      description:
        "Inspire e relaxe com alongamentos inspirados no yoga, trazendo equilíbrio e harmonia para o seu corpo e mente.",
      image: YogaGirl,
    },
    {
      id: 3,
      title: "Força no seu próprio ritmo",
      description:
        "Aprimore sua força com pesos leves, desenvolvendo resistência e definição muscular de forma segura e eficaz.",
      image: Boy,
    },
    {
      id: 4,
      title: "Suporte e orientação a cada passo",
      description:
        "Treine com confiança com o apoio de um profissional, realizando exercícios guiados para o melhor desempenho e segurança.",
      image: Training,
    },
  ];


  const renderItem = ({item}: {item: ISlideItem}) => {
    return (
      <S.Slide>
        <S.Title>{item.title}</S.Title>
        <S.Image source={item.image} resizeMode='contain'/>
        <S.Description>{item.description}</S.Description>
      </S.Slide>       
    );
  }
  const renderButtons = (mode: string) => {
    switch (mode) {
      case "prev":
        return (
          <AntDesign name="leftcircleo" size={24} color={colors.textPrimary} />
        );
      case "next":
        return (
          <AntDesign name="rightcircleo" size={24} color={colors.textPrimary} />
        );
      case "done":
        return (
          <S.DoneButton onPress={() => handleNavigation()}>
            <AntDesign
              name="checkcircleo"
              size={24}
              color={colors.textPrimary}
            />
          </S.DoneButton>
        );
      default:
        return null;
    }
  }


  function handleNavigation() {
    SetItem('@isOnboarded', 'true');
    navigation.navigate('Login')
  }
  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={() => renderButtons('done')}
      renderPrevButton={() => renderButtons('prev')}
      renderNextButton={() => renderButtons('next')}
      showPrevButton={true}
    />
  );
}